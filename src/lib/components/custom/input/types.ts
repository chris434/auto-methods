import type { onChange } from "$lib/types/events/types"
import type { ChangeEventHandler, FormEventHandler } from "svelte/elements"

export type Props={
    label:string 
    labelId?:string
    dataType?:'text'|'file'
    value:string
    errorMessage:string
    inputType:'input'|'textarea'
    accept?:string
    onchangeInput?:ChangeEventHandler<HTMLInputElement>
    onchangeText?:ChangeEventHandler<HTMLTextAreaElement>
    onremove?:()=>void
    
}