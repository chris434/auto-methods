import type { Props, ToggleProps } from "./types.ts"

const INT_DATA:Props={value:[],errorMessage:'',inputType:''}
class ImportData{
     data=$state<Props>(INT_DATA)
     toggle=$state<{value:ToggleProps}>({value:'show'})
    setImportData=(value:Partial<Props>)=>{
        this.data={...INT_DATA,...value}
    }
    setToggle=(value:ToggleProps)=>{
     this.toggle.value=value
    }

    resetImportData=()=>{
        this.toggle.value='none'
        this.data=INT_DATA
    }
}

export let importData=new ImportData()