import dynamoClient from "../db";

export default async function handler(req, res) {
    const { pid } = req.query;

    if (req.method === "GET") {
        const params = {
            TableName: "booking",
            Key: {
                pk: pid,
                sk: pid,
            },
        };
        const booking = await dynamoClient.get(params).promise();

        res.status(200).json(booking);
    }
}
