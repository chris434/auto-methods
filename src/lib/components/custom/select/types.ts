import type { FormEventHandler } from "svelte/elements"

export type Props<T>={
    label:string 
    labelId?:string
    value:string
    errorMessage:string,
    data:T[]
    selectItem:(value:T)=>string
    onchange:FormEventHandler<HTMLButtonElement>
}