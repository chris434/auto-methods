import type { Arrgs, Methods } from "../types"

export function updateArrgController(arrg:Arrgs,type:string){
  return {...arrg,type,statements:[...arrg.statements,{statementType:"if",conditions:[ {oparator:"",condisionValue:"",selectedObjectKey:'',logical:'',valueType:type!=='object'?type:''}]}]}
}
export function updateArrgOtherConroller(arrg:Arrgs,type:string){
    const preType=arrg.type
        const newTypes= preType!==type&&preType?arrg.types.map(thisType=>{
            if(thisType===type) return preType
            return thisType
        }):arrg.types.filter(thisType=>{
            return thisType!==type
        })
    return {...arrg,newTypes}   
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