import { Table } from "svelte-radix"
import type { Arrgs, ArrgTypeof, Methods } from "../types"

export function updateArrgController(arrg:Arrgs,type:string){
if(arrg.type) return {...arrg,type}
  return {...arrg,type,statements:[...arrg.statements,{statementType:"if",conditions:[ {oparator:"",condisionValue:"",selectedObjectKey:'',logical:'',valueType:type!=='object'?type:''}]}]}
}
export function typeofController(arrg:Arrgs, typeofValue:ArrgTypeof):Arrgs{
return {...arrg,typeof:typeofValue}
}


export function updateArrgOtherConroller(arrg:Arrgs,type:string,targetArrg:Arrgs|undefined):Arrgs{
    const targetType=targetArrg?.type
   
        const types=targetType!==type&&targetArrg?.type?arrg.types.map(thisType=>{
            if(thisType===type&&targetType) return targetType
            return thisType
        }):arrg.types.filter(thisType=>{
            return thisType!==type
        })
    return {...arrg,types}   
}
export function deleteArrgController(method:Methods,arrgIndex:number){
let type=''
const filteredArrgs=method.arrgs.filter((arrg,index)=>{
    type=index===arrgIndex?arrg.type:type
        return index!==arrgIndex
    })
    const mappedArrgs=filteredArrgs.map(arrg=>{
        return {...arrg,types:[...arrg.types,type]}
    })
            
return {...method, arrgs:mappedArrgs}
}