import type { StatementProps } from "../../types"
import type { MapArrgs, mapStatement } from "../types"
import { addConditionController, deleteStatementController } from "./controller"

export function satementActionHandler(statementProps:StatementProps,mapStatement:mapStatement,mapArrgument:MapArrgs){
    const addCondition=()=>{
    mapStatement(statementProps,(statement)=>addConditionController(statement,statementProps.type))
    }
    const deleteStatement=()=>{
        mapArrgument(statementProps,deleteStatementController)
    }
       return {addCondition,deleteStatement}
}