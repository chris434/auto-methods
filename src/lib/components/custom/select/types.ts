import type { FormEventHandler } from "svelte/elements"

export type Props<T>={
    label:string 
    labelId?:string
    value:string
    valueFallback:string
    name:string
    errorMessage?:string,
    data:readonly T[]
    selectItem?:(value:T)=>string
    onchange?:(value:T)=>void
}