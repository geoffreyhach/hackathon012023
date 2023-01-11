import dynamoClient from "../db";

export default async function handler(req, res) {
    const params = {
        TableName: "car",
    };
    const cars = await dynamoClient.scan(params).promise();
    res.status(200).json(cars);
}
