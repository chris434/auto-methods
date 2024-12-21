export function convertToJs(value:string,errorMessage:string){
try {
    return {value:eval(`new Object(${value})`),errorMessage:''}
} catch {
    return {value:null,errorMessage,}
}
}