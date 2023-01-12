import dynamoClient from "../db";
import { v4 as uuidv4 } from "uuid";

export default async function handler(req, res) {
    if (req.method === "GET") {
        const params = {
            TableName: "users",
        };

        const result = await dynamoClient.scan(params).promise();
        const users = result.Items.filter((user) => user.type === "USER");
        res.status(200).json(users);
    }
    if (req.method === "POST") {
        req.body.id = String(uuidv4());

        const params = {
            TableName: "users",
            Item: req.body,
        };

        const user = await dynamoClient.put(params).promise();
        res.status(200).json(user);
    }
}
