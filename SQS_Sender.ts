import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs";

const sqsClient = new SQSClient({ region: "us-west-1" }); 
const url = "https://gdsapi.cnbc.com/market-mover/groupMover/SP500/CHANGE_PCT/BOTH/12.json?source=SAVED&delayed=false&partnerId=2";

export const handler = async (event) => {
    try {
        const res = await fetch(url);
        console.info("status", res.status);
        const json= await res.json();
        const params = {
            QueueUrl: "https://sqs.us-west-1.amazonaws.com/873996336316/Mammo_BigMover", 
            MessageBody: JSON.stringify(json),
        };

        await sqsClient.send(new SendMessageCommand(params));
        console.log("Message sent successfully!" )
        console.log( json)

        return {
            statusCode: 200,
            body: "Message sent successfully!",
        };
    } catch (error) {
        console.error("Error sending message:", error);
        return {
            statusCode: 500,
            body: "Error sending message to SQS.",
        };
    }
};