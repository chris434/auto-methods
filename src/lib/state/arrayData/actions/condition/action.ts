import { updateConditionController } from "./controller"
import type { CondisionKeys, ConditionProps } from "../../types"
import type { mapCondition } from "../types"

export function conditionActionHandler(conditionProps:ConditionProps,mapCondition:mapCondition){
    const  updateCondition=(key:CondisionKeys, ObjectKey:string)=>{
      mapCondition(conditionProps,(condition)=>updateConditionController(condition,key,ObjectKey))
      }
      return {updateCondition}
  }