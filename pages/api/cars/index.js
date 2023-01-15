import connectDB from "../db";
import { Car } from "../models";

async function handler(req, res) {
    if (req.method === "GET") {
        //Todo
        const cars = await Car.find();

        try {
            res.status(200).json(cars);
        } catch {
            res.status(500).send(error);
        }
    }
    if (req.method === "POST") {
        const { model, brand } = req.body;

        const car = new Car({
            model,
            brand,
        });
        const newCar = await car.save();

        res.status(200).json(newCar);
    }
}

export default connectDB(handler);
