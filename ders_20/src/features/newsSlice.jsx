import { createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
    newsList :[],
    loading:false,
    error:false

    //NORMALDE API BIZE ARRAY(JSON FORMATINDA) DONDURDUGU ICIN INITIAL STATE'I BOS ARRAY OLARAK VERIYORUZ.
}

export const getNews = createAsyncThunk(
  "getNews", // ACTION TYPE 
  async()=> {
    const API_KEY = "1b37851c03ec4fe7b013e985e0d7cc3a";
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

    try {
      const {data} = await axios(url);
      return data.articles;
    } catch (error) {
      
    }
})

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    //YAPMAK ISTEDIGIMIZ ACTION'LARI BURADAN VERIYORUZ.
    clearList: (state)=> { 
        state.newsList =[]
    }
  },
  extraReducers:(builder)=> {
    builder
      .addCase(getNews.pending, (state)=> {
        state.loading = true;
        //GETNEWS FONKSIYONU ISTEK ASAMASINDA IKEN
      })
      .addCase(getNews.fulfilled, (state,action)=> {
        state.loading=false;
        state.newsList= action.payload;
        //GETNEWS FONKSIYONU VERI BASARILI SEKILDE ALDIGINDA
      })
      .addCase(getNews.rejected,(state)=> {
        state.loading=false;
        state.newsList=[];
        state.error=true;
      })
  }

//HOCANIN NOTU : => 
// State'lerin API gibi async kaynaklardan gelen verilere gore guncellenmesi gerekebilir.
//? Ancak boyle bir durumda async islem tamamlandiktan sonra state guncellenmelidir.
//? Gonderilen api istegi ile dogrudan state guncellememelidir.
//? Islemin tamamlanmasi ile gelen veriye gore state'in guncellenemsini saglamak
//? adina bir arabirim kullanilmaktadir.
//? Bu arabirim middleware denilir.Redux-Toolkit, default olarak Thunk kullanmaktadir.
//! Thunk'ın amaci reducers'a islenmis sonuclari gondermeden once gecikmeli asenkron ismlerinin yurutulmesini saglamaktir.
});

export const {clearList} = newsSlice.actions

export default newsSlice.reducer