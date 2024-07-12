import VehicleType from "../api/entities/VehicleType.entity";
import { AppDataSource } from "../db/config";
import { VEHICLE_TYPE_CATEGORIES } from "../utils/constants";

const newVehicleTypes = [
    {category: VEHICLE_TYPE_CATEGORIES.COACH_BUS, type: "57 Passenger", seats: 57},
    {category: VEHICLE_TYPE_CATEGORIES.COACH_BUS, type: "56 Passenger", seats: 56},
    {category: VEHICLE_TYPE_CATEGORIES.COACH_BUS, type: "55 Passenger", seats: 55},
    {category: VEHICLE_TYPE_CATEGORIES.COACH_BUS, type: "54 Passenger", seats: 54},
    {category: VEHICLE_TYPE_CATEGORIES.COACH_BUS, type: "49 Passenger", seats: 49},
    {category: VEHICLE_TYPE_CATEGORIES.MINI_BUS, type: "40 Passenger", seats: 40},
    {category: VEHICLE_TYPE_CATEGORIES.MINI_BUS, type: "38 Passenger", seats: 38},
    {category: VEHICLE_TYPE_CATEGORIES.MINI_BUS, type: "35 Passenger", seats: 35},
    {category: VEHICLE_TYPE_CATEGORIES.MINI_BUS, type: "32 Passenger", seats: 32},
    {category: VEHICLE_TYPE_CATEGORIES.MINI_BUS, type: "31 Passenger", seats: 31},
    {category: VEHICLE_TYPE_CATEGORIES.MINI_BUS, type: "30 Passenger", seats: 30},
    {category: VEHICLE_TYPE_CATEGORIES.MINI_BUS, type: "28 Passenger", seats: 28},
    {category: VEHICLE_TYPE_CATEGORIES.MINI_BUS, type: "27 Passenger", seats: 27},
    {category: VEHICLE_TYPE_CATEGORIES.MINI_BUS, type: "24 Passenger", seats: 24},
    {category: VEHICLE_TYPE_CATEGORIES.SPRINTER, type: "14 Passenger", seats: 14},
    {category: VEHICLE_TYPE_CATEGORIES.SPRINTER, type: "13 Passenger", seats: 13},
    {category: VEHICLE_TYPE_CATEGORIES.SPRINTER, type: "12 Passenger", seats: 12},
    {category: VEHICLE_TYPE_CATEGORIES.SPRINTER, type: "10 Passenger", seats: 10},
    {category: VEHICLE_TYPE_CATEGORIES.VAN, type: "14 Passenger", seats: 14},
    {category: VEHICLE_TYPE_CATEGORIES.VAN, type: "13 Passenger", seats: 13},
    {category: VEHICLE_TYPE_CATEGORIES.VAN, type: "12 Passenger", seats: 12},
    {category: VEHICLE_TYPE_CATEGORIES.VAN, type: "10 Passenger", seats: 10},
    {category: VEHICLE_TYPE_CATEGORIES.SCHOOL_BUS, type: "52 Passenger", seats: 52},
    {category: VEHICLE_TYPE_CATEGORIES.SCHOOL_BUS, type: "44 Passenger", seats: 44},
    {category: VEHICLE_TYPE_CATEGORIES.PARTY_BUS, type: "40 Passenger", seats: 40},
    {category: VEHICLE_TYPE_CATEGORIES.PARTY_BUS, type: "30 Passenger", seats: 30},
    {category: VEHICLE_TYPE_CATEGORIES.PARTY_BUS, type: "28 Passenger", seats: 28},
    {category: VEHICLE_TYPE_CATEGORIES.PARTY_BUS, type: "24 Passenger", seats: 24},
    {category: VEHICLE_TYPE_CATEGORIES.PARTY_BUS, type: "20 Passenger", seats: 20},
    {category: VEHICLE_TYPE_CATEGORIES.LIMOUSINE, type: "10 Passenger", seats: 10},
    {category: VEHICLE_TYPE_CATEGORIES.LIMOUSINE, type: "8 Passenger", seats: 8},
    {category: VEHICLE_TYPE_CATEGORIES.SLEEPER, type: "12 Bunk", seats: 12},
    {category: VEHICLE_TYPE_CATEGORIES.SLEEPER, type: "6 Bunk", seats: 6},
    {category: null, type: "Star Coach", seats: 49},
];

AppDataSource.initialize()
    .then(async () => {
        
        await AppDataSource.createQueryBuilder()
            .insert()
            .into(VehicleType)
            .values(newVehicleTypes)
            .execute();
        console.log(">> NEW VEHICLES ADDED SUCCESSFULLY");
    })
    .catch((err) => {
        console.log(">> ERROR OCCURRED WHILE SEED NEW VEHICLES TYPE: ", err);
    });
