import dynamoClient from "../db";
import { v4 as uuidv4 } from "uuid";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const params = {
            TableName: "car",
        };
        const cars = await dynamoClient.scan(params).promise();
        res.status(200).json(cars);
    }
    if (req.method === "POST") {
        req.body.id = String(uuidv4());

        const params = {
            TableName: "car",
            Item: req.body,
        };
        const car = await dynamoClient.put(params).promise();
        res.status(200).json(car);
    }
}
