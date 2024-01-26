import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    user:null
}

const authSlice = createSlice({
    //CREATE.SLICE AVANTAJI: 'TYPE, REDUCER, ACTION DISPATCH' LERI AYRI AYRI TANIMLAMAYA GEREK YOK. CREATE.SLICE ILE BUNLARI TEK BIR YERDEN YAPABILIYORUZ. KENDI OTOMATIK ACTION.TYPE ISIMLERI OLUSTURACAK  
    name:"auth",
    initialState:initialState,
    reducers:{
        //'reducers': ACTION TYPE'LARI ALIR VE BUNA GORE STATE'LERI DEGISTIRIR.
        setuser:(state,action)=> {
            state.user = action.payload
        },
        clearuser:(state )=>{
            state.user = null;
        }
    
    }
})

export const {setuser,clearuser} = authSlice.actions ;
export default authSlice.reducer;
// REDUCER VE REDUCER'IN METOTLARI AYRI AYRI GONDERILIR.