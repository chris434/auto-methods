import type { Arrgs, ArrgTypeof, Methods } from "../../types"
import { filter } from "../../helpers/filter/filter"
import{ deleteController } from "../../controllers/delete"

export function updateArrgController(arrg:Arrgs,type:string):Arrgs{
  return {...arrg,type,statements:[{statementType:"if",conditions:[ {oparator:"",conditionValue:"",selectedObjectKey:'',logical:'',valueType:type!=='object'?type:''}]}]}
}
export function typeofController(arrg:Arrgs, typeofValue:ArrgTypeof):Arrgs{
return {...arrg,typeof:typeofValue}
}

export function addStatementController(arrg:Arrgs,type:string):Arrgs{
return {...arrg,statements:[...arrg.statements,{statementType:"if",conditions:[ {oparator:"",conditionValue:"",selectedObjectKey:'',logical:'',valueType:type!=='object'?type:''}]}]}
}


export function updateArrgOtherConroller(arrg:Arrgs,type:string,targetArrg:Arrgs|undefined):Arrgs{
    const targetType=targetArrg?.type
   
        const types=targetType!==type&&targetArrg?.type?arrg.types.map(thisType=>{
            if(thisType===type&&targetType) return targetType
            return thisType
        }):filter(arrg.types,{arrgType:{targetValue:type}})
    return {...arrg,types}   
}
export function deleteArrgController(method:Methods,arrgIndex:number):Methods{
let type=''
return deleteController(method, method.arrgs,arrgIndex,'arrgs',{
itemCb:(arrg,index)=> type=index===arrgIndex?arrg.type:type,
afterCb:(filteredArrgs)=>filteredArrgs.map(arrg=>{
    return {...arrg,types:[...arrg.types,type]}
})
 })
}