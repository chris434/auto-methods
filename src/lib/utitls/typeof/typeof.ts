export function typeofValue(value:unknown){
  return  Array.isArray(value) ?'array' :typeof value
}