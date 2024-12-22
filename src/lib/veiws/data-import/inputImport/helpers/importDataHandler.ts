import { arrayData } from "$lib/state/arrayData/arrayData.svelte";
import type { ObjectKey } from "$lib/types/object/object";
import { forEachObject } from "$lib/utitls/object/forEachObject";
import { typeofValue } from "$lib/utitls/typeof/typeof";
import { importData } from "../../state/importData/importData.svelte";
import type { ObjectType, Types } from "$lib/state/arrayData/types";

const {setInputValue}=arrayData
export function importDataHandler(selectedValue: string){
const selecedArray= importData.data.value.find(([key])=> key===selectedValue)
if(selecedArray ){
    const types:Types={singleTypes:[],objectTypes:{}}
    const root = selecedArray[1].map(value=>value={value, type:typeofValue(value)})
    let keyCount:ObjectKey<number>={}
    let objectCount=0
   
     rootObjectLoop((key)=>{
        types.objectTypes={...types.objectTypes,[key]:{types:[],keyInAll:false}}
        keyCount={...keyCount,[key]:0}
    },()=>{
        objectCount++ 
    },(value)=>{
        types.singleTypes.push(typeofValue(value)) 
    })
   
     rootObjectLoop((key,value)=>{
        types.objectTypes[key].types.push(typeofValue(value))
        keyCount[key]++
     })
   
forEachObject<ObjectType[string]>(types.objectTypes,(key,value)=>{
    const uniqueTypes=Array.from(new Set(value.types)) 
    types.objectTypes[key]={ keyInAll:keyCount[key]===objectCount,types:uniqueTypes}
})

    const arrayData={data:root,types}
    console.log(arrayData)
    setInputValue(arrayData)

    function rootObjectLoop(cb:(key:string,value:any)=>void, beforeCb?:()=>void,afterCb?:(value:unknown)=>void){
        for(let {type,value} of root){
            if(type==='object'){
                beforeCb?.()
                forEachObject(value as Object,(key,value)=>{
                    cb(key,value)
                })
                continue
            }
            afterCb?.(value)
        }
    }
}
}

