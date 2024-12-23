import type { InputType } from "$lib/state/arrayData/types"

export type Props={
    value:[string,unknown[]][]
    errorMessage:string
    inputType:InputType
}
export type ToggleProps='show'|'edit'|'none'