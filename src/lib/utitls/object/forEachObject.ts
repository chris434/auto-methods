export function forEachObject<T=unknown>(obj:object,cb:(key:string,value:T)=>void){
    Object.entries(obj).forEach(([key,value])=>{
        cb(key,value)
        })
}