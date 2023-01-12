import dynamoClient from "../db";

export default async function handler(req, res) {
    const { pid } = req.query;
    const params = {
        TableName: "car",
        Key: {
            id: pid,
        },
    };

    const car = await dynamoClient.get(params).promise();

    res.status(200).json(car);
}
