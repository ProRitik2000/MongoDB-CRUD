import mongoose from "mongoose";
//Defining schema

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true
    },
    Salary: {
        type: mongoose.Decimal128,
        required: true,
        Validation: (value) => value >= 1000.00
    }
})
const EmployeeModel = mongoose.model("Employee", EmployeeSchema);
export default EmployeeModel;