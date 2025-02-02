import type { opts } from "./types";

export function filter<T>(data:T[],opts:opts<T>){
return data.filter((item,index)=>{
        opts?.cb&&(opts.cb(item,index));
        if('targetIndex' in opts.arrgType)return index!==opts.arrgType.targetIndex
        if('targetValue' in opts.arrgType)return item!==opts.arrgType.targetValue
        })
}
