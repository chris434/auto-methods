import { addNewArrgConroller, replaceMethodController } from "./controller"
import type { MethodProps } from "../../types"
import type { mapMethod } from "../types"

export function methodActions(methodProps:MethodProps,singleTypes:string[],mapMethod:mapMethod){
   const replaceMethod=(name:string)=>{
    mapMethod(methodProps,(method)=>replaceMethodController(name,method))
    }
    const addNewArrg =()=>{
        mapMethod(methodProps,(method)=>addNewArrgConroller(method,singleTypes))
}
return {replaceMethod,addNewArrg}
}