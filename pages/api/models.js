import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
        trim: true,
    },
    model: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: false,
        trim: true,
    },
    licensePlate: {
        type: String,
        required: false,
        trim: true,
    },
    image: {
        type: String,
        required: false,
        trim: true,
    },
    priceperday: {
        type: Number,
        required: false,
        trim: true,
    },
    passengers: {
        type: Number,
        required: false,
        trim: true,
    },
    doors: {
        type: Number,
        required: false,
        trim: true,
    },
    km: {
        type: Number,
        required: false,
        trim: true,
    },
    consumption: {
        type: Number,
        required: false,
        trim: true,
    },
    transmission: {
        type: String,
        required: false,
        trim: true,
    },
    geoloc: {
        type: Array,
    },
});

mongoose.models = {};

export const Car = mongoose.model("cars", carSchema);
