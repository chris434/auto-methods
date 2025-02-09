export function typeofValue(value:unknown){
  return  Array.isArray(value) ?'array' :value===null?'null':typeof value
}