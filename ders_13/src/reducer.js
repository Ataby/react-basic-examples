export const initialState = {
    loading:false,
    catImage:"",
    error:""
}

export const reducer =function(state,action){
    switch (action.type) {
        case "start": 
            return {...state, loading:true}
            // return {state.loading:true}
        case "success":
            return { ...state, error:"",catImage:action.payload, loading:false  }
        case "fail":
            return {...state,error:action.payload, catImage:""}
 
        default:
            break;
    }
}