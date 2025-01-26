import type { DataCb,Options } from "./types";
export function map<T,R>( data:T,property:R[],key:string,targetIndex:number,cb:DataCb<R>,opts?:Options<R[]>){
const mappedData=property.map((value,i)=>{

if(targetIndex===i) return cb(value as R,i,false)
if(targetIndex !==i&&opts?.notEqaul) return cb(value as R,i,opts.notEqaul)
    return value
})
if(opts?.setCb){
    opts.setCb(mappedData)
} else{
    return {
        ...data,
        [key]:mappedData
    } as T
}
return data
}