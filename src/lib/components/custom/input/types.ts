import type { onChange } from "$lib/types/events/types"
import type { ChangeEventHandler, FormEventHandler } from "svelte/elements"

export type Props={
    label:string 
    labelId?:string
    dataType?:'text'|'file'|'number'
    value:string
    errorMessage:string
    inputType:'input'|'textarea'
    accept?:string
    readonly?:boolean
    onchangeInput?:ChangeEventHandler<HTMLInputElement>
    onchangeText?:ChangeEventHandler<HTMLTextAreaElement>
    onremove?:()=>void
    
}