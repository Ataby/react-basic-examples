export const addTodo = function(payload){
    return {type:"ADD", payload:payload}
    //BU OBJE SADECE IKI PARAMETRE ALIR. BUNUN DISINDA BASKA PARAMETRE ALMIYOR. 'TYPE' KULLANMAK ZORUNLU, 'PAYLOAD' KULLANMAK ZORUNLU DEGIL.
}
export const clear = function( ){
    return {type:"CLEAR"  }
}
export const deleteItem = function( ){
    return {type:"DELETE"   }
}
export const toggle = function( ){
    return {type:"TOGGLE"   }
}
 