import { arrayData } from "$lib/state/arrayData/arrayData.svelte";
import type { CondisionKeys, ConditionProps } from "$lib/state/arrayData/types";

const {conditionActions}=arrayData
export function conditionHelper(indexs:ConditionProps){
    const {updateCondition}=conditionActions(indexs)
    function updateConditionHandler(value:string,key:CondisionKeys){
        switch (key) {
           case 'logical':
               updateCondition('logical',value)
               break;
               case 'selectedObjectKey':
               updateCondition('selectedObjectKey',value)
               break;
               case 'valueType':
               updateCondition('valueType',value)
               break;
               case 'oparator':
               updateCondition('oparator',value)
               break;
               case 'conditionValue':
               updateCondition('conditionValue',value)
               break;
        
           default:
               break;
        }
       }
       return {updateConditionHandler}
}