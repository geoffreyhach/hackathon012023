import dynamoClient from "../db";

export default async function handler(req, res) {
    const { pid } = req.query;
    console.log(`USER#${pid}`);
    if (req.method === "GET") {
        const params = {
            TableName: "users",
            Key: {
                pk: `USER#${pid}`,
                sk: `USER#${pid}`,
            },
        };
        const user = await dynamoClient.get(params).promise();

        res.status(200).json(user);
    }

    if (req.method === "PUT") {
        const item = req.body;
        let updateExpression = "set";
        let ExpressionAttributeNames = {};
        let ExpressionAttributeValues = {};
        for (const property in item) {
            updateExpression += ` #${property} = :${property} ,`;
            ExpressionAttributeNames["#" + property] = property;
            ExpressionAttributeValues[":" + property] = item[property];
        }

        updateExpression = updateExpression.slice(0, -1);
        console.log(ExpressionAttributeNames);
        console.log(ExpressionAttributeValues);
        console.log(updateExpression);

        const params = {
            TableName: "users",
            Key: {
                pk: `USER#${pid}`,
                sk: `USER#${pid}`,
            },
            UpdateExpression: updateExpression,
            ExpressionAttributeNames: ExpressionAttributeNames,
            ExpressionAttributeValues: ExpressionAttributeValues,
        };

        const updatedUser = await dynamoClient.update(params).promise();
        res.status(200).json(updatedUser);
    }
}
