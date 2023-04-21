import mongoose from "mongoose";

mongoose.connect("mongodb+srv://andineto77:123@cluster0.7nvxjp3.mongodb.net/alura-node ");

let db = mongoose.connection;

export default db;