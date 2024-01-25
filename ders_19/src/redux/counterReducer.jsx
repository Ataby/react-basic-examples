//REDUCER HOOK'U 'INITIAL STATE' VE 'REDUCER STATES' OLMAK UZERE 2 PARAMETRE ALIYOR.

  const initialState={
    counter:0,
    
}

const counterReducer =function( state=initialState,action){
// const reducer =function(state=initialState,{type,payload}){
//BU SEKILDE DE YAZILABILIR.

    //REDUCER BIR OBJECT DONDURMEK ZORUNDADIR.
    switch ( action.type) {
        case "INCREMENT":
            return{ counter : state.counter+1};

        case "DECREMENT":            
            return{ counter  : state.counter-1};

        case "RESET":
                // console.log(counter)
            return{ counter  : 0};
            // return {counter: initialState};
        default:
            return  state;
            //break;
        //BIR SEY DONDURMEK ZORUNDA OLDUGU ICIN 'break' YAZAMAYIZ.
    }

}
export default counterReducer;