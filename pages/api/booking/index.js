import dynamoClient from "../db";
import { v4 as uuidv4 } from "uuid";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const params = {
            TableName: "booking",
        };
        const booking = await dynamoClient.scan(params).promise();
        res.status(200).json(booking);
    }
    if (req.method === "POST") {
        req.body.pk = String(uuidv4());
        req.body.sk = req.body.pk;

        const params = {
            TableName: "booking",
            Item: req.body,
        };
        const booking = await dynamoClient.put(params).promise();
        res.status(200).json(booking);
    }
}
