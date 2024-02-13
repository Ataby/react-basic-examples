import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";

//CREATE.THUNK : REDUX ILE BERABER APIDEN VERI CEKERKEN, CEKTIGIMIZ VERILERLE STATE'YI GUNCELLEMEK ISTIYORSAK ARAYA BIR UYGUNLASTIRICI ELEMENT GEREKIR. CRETE.THUNK BUNU YAPAR (YANI BIR MIDDLEWARE'DIR).

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
