
import express from 'express'
const router=express.Router();

import EmployeeController from "../Controller/EmployeeController.js";

router.get('/',EmployeeController.getAllDoc)
router.post('/',EmployeeController.createDoc)
router.get('/:id',EmployeeController.getDocById)
router.put('/:id',EmployeeController.updateDocById)
router.delete('/:id',EmployeeController.deleteDocById)



export default router;


