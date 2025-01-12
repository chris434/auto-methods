import { arrayData } from "$lib/state/arrayData/arrayData.svelte";
import type { CondisionKeys } from "$lib/state/arrayData/types";

const {updateCondition}=arrayData
export function conditionHelper(methodIndex:number,arrgIndex:number,statementIndex:number,conditionIndex:number){
    function updateConditionHandler(value:string,key:CondisionKeys){
        switch (key) {
           case 'logical':
               updateCondition('logical',value,methodIndex,arrgIndex,statementIndex,conditionIndex)
               break;
               case 'selectedObjectKey':
               updateCondition('selectedObjectKey',value,methodIndex,arrgIndex,statementIndex,conditionIndex)
               break;
               case 'valueType':
               updateCondition('valueType',value,methodIndex,arrgIndex,statementIndex,conditionIndex)
               break;
               case 'oparator':
               updateCondition('oparator',value,methodIndex,arrgIndex,statementIndex,conditionIndex)
               break;
               case 'condisionValue':
               updateCondition('condisionValue',value,methodIndex,arrgIndex,statementIndex,conditionIndex)
               break;
        
           default:
               break;
        }
       }
       return {updateConditionHandler}
}