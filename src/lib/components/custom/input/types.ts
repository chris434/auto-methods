import type { onChange } from "$lib/types/events/types"

export type Props={
    label:string 
    labelId?:string
    dataType?:'text'|'file'
    value:string
    inputType:'input'|'textarea'
    onchange:(e:onChange)=>void
}