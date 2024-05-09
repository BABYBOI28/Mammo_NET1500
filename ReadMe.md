export const handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('AWS Lambda is a compute service that lets you run code without servers.
• AWS lambda function has : Handler function, event object, and context object
• AWS Lambda function supports many languages
• AWS Lambda function can be invoked by different triggers
• AWS function is the answer for many business needs

AWS SES
Simple Email Service
Highly-scalable inbound and outbound email
service(per AWS claim)
a cloud-based email service that is
cost-effective,
flexible and
scalable

Amazon SQS
Amazon Simple Queue Service is a fully managed message queuing for microservices, distributed systems, and serverless applications

RESTful API - is an interface that two computer systems use to exchange information securely over the internet. 
Representational State Transfer (REST) - is a software architecture that imposes condiions on how an API should work

The scope of the big mover prohect was to use the aws services provided to achieve a desired outcome of notifying a user of what movements were happening in the market. By using lambda we were able to write the code we wanted. By use of SES we were able to send the emial to the desired user. SQS enabled us to send the message via email and the Restful API allwed us to communicate between our device and the desired website.'),

    };
    return response;
};


