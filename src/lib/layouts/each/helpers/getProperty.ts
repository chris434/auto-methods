import type { ActionKeys, GetReturnType, Methods} from "$lib/state/arrayData/types";

export function getProperty<T extends ActionKeys>(data:GetReturnType<T>|{methods:Methods[]}){
    console.log(data)
    let property:unknown[]=[]
        switch (true) {
            case 'methods' in data:
                property=data.methods
                break;
            case 'arrgs' in data:
                property=data.arrgs
                break;
            case 'statements' in data:
                property=data.statements
                break;
            case 'conditions' in data:
                property=data.conditions
                break;
        
            default:
                break;
        }
        return property 
}