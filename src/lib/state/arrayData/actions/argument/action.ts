import type { ArrgProps, ArrgTypeof } from "../../types"
import type { MapArrgs, mapMethod } from "../types"
import { addStatementController, deleteArrgController, typeofController, updateArrgController, updateArrgOtherConroller } from "./controller"
      
export function arrgActionsHandler(arrgProps:ArrgProps,mapArrgument:MapArrgs,mapMethod:mapMethod){
    const {methodIndex}=arrgProps
   const updateArrg=(type:string)=>{
    mapArrgument(arrgProps,(arrg)=>updateArrgController(arrg,type),(arrg,_,targetArrg)=>updateArrgOtherConroller(arrg,type,targetArrg))
}
const setTypeOf=(value:ArrgTypeof)=>{
  mapArrgument(arrgProps,(arrg)=>typeofController(arrg,value))
 }
 const addStatement=(type:string)=>{
  mapArrgument(arrgProps,(arrg)=>addStatementController(arrg,type))
 }
   const deleteArrg=()=>{
        mapMethod({methodIndex},deleteArrgController)
    }
    return {updateArrg,addStatement,deleteArrg,setTypeOf}
}