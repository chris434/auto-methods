import { forEachObject } from "$lib/utitls/object/forEachObject"
import { typeofValue } from "$lib/utitls/typeof/typeof"

export function findJsonArrays(data:object ){
const arrays:[string,unknown[]][]=[]
function find(data:object,path:string){
    forEachObject(data,(key,value)=>{
        const currentPath=`${path}/${key}`
        if(Array.isArray(value)) arrays.push([currentPath,value])
         if(typeofValue(value)==='object')return find(value as object,currentPath)

    })
}
find(data,'')

return arrays
} 