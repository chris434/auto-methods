import { deleteConditionController, updateConditionController } from "./controller"
import type { CondisionKeys, ConditionProps } from "../../types"
import type { mapCondition, mapStatement } from "../types"

export function conditionActionHandler(conditionProps:ConditionProps,mapCondition:mapCondition,mapStatement:mapStatement){
    const  updateCondition=(key:CondisionKeys, ObjectKey:string)=>{
      mapCondition(conditionProps,(condition)=>updateConditionController(condition,key,ObjectKey))
      }
      const deleteCondition=()=>{
        mapStatement(conditionProps,deleteConditionController)
        }
      return {updateCondition,deleteCondition}
  }

  