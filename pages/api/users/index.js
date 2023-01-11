import dynamoClient from "../db";
import { v4 as uuidv4 } from "uuid";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const params = {
            TableName: "user",
        };
        const users = await dynamoClient.scan(params).promise();
        res.status(200).json(users);
    }
    if (req.method === "POST") {
        req.body.id = String(uuidv4());
        console.log(req.body);
        const params = {
            TableName: "user",
            Item: req.body,
        };
        const user = await dynamoClient.put(params).promise();
        res.status(200).json(user);
    }
}
