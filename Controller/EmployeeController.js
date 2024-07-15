import { error } from "console";
import EmployeeModel from "../Model/Employee.js";
import { response } from "express";
class EmployeeController {

    //CREATE 
    static createDoc = async (req, res) => {
        try {
            const { name, age, Salary } = req.body
            const doc = new EmployeeModel({
                name: name,
                age: age,
                Salary: Salary
            })

            const result = await doc.save()

            res.status(201).send(result)
            console.log(error);
        } catch (error) {
            console.log(error);
        }
    }

    //RETRIEVE all 
    static getAllDoc = async (req, res) => {
        try {
            const result = await EmployeeModel.find()
            res.send(result)
        } catch (error) {
            console.log(error);
        }
    }


    //GET/Retrieve the data using ID
    static getDocById = async (req, res) => {
        try {
            const result = await EmployeeModel.findById(req.params.id)
            res.send(result)
        } catch (error) {
            console.log(error);
        }
    }


    //PUT/UPDATE document 
    static updateDocById = async (request, response, next) => {
        try {
            const { name, age, Salary } = request.body;
            const result = await EmployeeModel.findByIdAndUpdate(request.params.id, request.body);
            response.send(result)
        } catch (error) {
            console.log(error);
        }
    }


    //DELETE by ID
    static deleteDocById = async (req, res) => {
        try {
            const result = await EmployeeModel.findByIdAndDelete(req.params.id)
            res.status(204).send(result);
        } catch (error) {
            console.log(error)
        }
    }

}
export default EmployeeController;