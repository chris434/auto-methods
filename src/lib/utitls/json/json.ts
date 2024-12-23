export function isJson<T>(value:string){
try {
    return {value:JSON.parse(value)as T,errorMessage:''}
} catch  {
    return {errorMessage:'Invalid JSON',value:null}
}
}