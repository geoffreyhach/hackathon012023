import dynamoClient from "../db";

export default async function handler(req, res) {
    const { pid } = req.query;
    const params = {
        TableName: "users",
        Key: {
            id: pid,
        },
    };

    const user = await dynamoClient.get(params).promise();

    res.status(200).json(user);
}
