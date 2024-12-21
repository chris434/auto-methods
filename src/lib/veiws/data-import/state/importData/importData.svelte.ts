import type { Props } from "./types.ts"

const INT_DATA:Props={value:[],errorMessage:'',inputType:''}
class ImportData{
     data=$state<Props>(INT_DATA)
    setImportData=(value:Partial<Props>)=>{
        this.data={...INT_DATA,...value}
    }
}

export let importData=new ImportData()