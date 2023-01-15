import connectDB from "../db";
import { Car } from "../models";

// async function handler(req, res) {
//     const { pid } = req.query;
//     console.log(pid);
//     if (req.method === "GET") {
//         Todo
//         const car = await Car.findById(pid);

//         try {
//             res.status(200).json(car);
//         } catch {
//             res.status(500).send(error);
//         }
//     }
//     if (req.method === "POST") {
//         const { model, brand } = req.body;

//         const car = new Car({
//             model,
//             brand,
//         });
//         const newCar = await car.save();

//         res.status(200).json(newCar);
//     }
// }

// export default connectDB(handler);

async function handler(req, res) {
    const { pid } = req.query;

    if (req.method === "GET") {
        const car = await Car.findById(pid);

        try {
            res.status(200).send(car);
        } catch {
            res.status(500).send("error");
        }
    }
}

export default connectDB(handler);
