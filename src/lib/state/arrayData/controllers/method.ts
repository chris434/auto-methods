import type { Methods } from "../types"

   export function replaceMethodController(name:string,method:Methods){
    return {...method,name}
    }
  export function addNewArrgConroller(method:Methods,index:number,singleTypes:string[]):Methods{
            const lastArrg=method.arrgs[method.arrgs.length-1]
            const types= !method.arrgs.length?singleTypes:lastArrg.types.filter(type=>{
             return type !==lastArrg.type
            })
             return {...method,arrgs:[...method.arrgs,{typeof:'type and value',type:'',types,statements:[]}]}
    }
