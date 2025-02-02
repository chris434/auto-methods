import { filter } from "../helpers/filter/filter"

export function deleteController<T,R>(data:T,property:R[],targetIndex:number,key:string,opts?:{itemCb?:(item:R,i:number)=>void,afterCb?:(item:R[])=>R[]}){
    const filteredArry=filter(property,{
       cb:(arrg,index)=>opts?.itemCb&& opts.itemCb(arrg,index),
      arrgType:{targetIndex}
    })
    const cbData=opts?.afterCb?opts.afterCb(filteredArry ):filteredArry     
return {...data, [key]:cbData}
}