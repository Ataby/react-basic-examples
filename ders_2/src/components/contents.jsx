//JSX, STILLERI FARKLI SEKILLERDE YAPILABILIR.
// HARICI CSS SAYFASI, INLINE STILLENDIRME, LOCAL VEYA GLOBAL DEGISKENLER ILE

//STILLENDIRME ICIN PROPERTY-VALUE(OBJECT) YAPISI KULLANILIR.
//camelCase ISIMLENDIRME KULLANILIR. ORN: className
//HARICI KUTUPPHANELER KULLANILABILIR (MATERIAL UI, STYLED COMPONENT, SASS, BOOTSTRAP VB. )

//DAHILI RESIM ICIN IMPORT GEREKIR.
import img2 from "../../src/code.jpg"

function Content() {

    const imgSize ={
        width:"500px",
        height:"auto",
        borderRadius:"10px",
        margin:".5rem"
    }; //HATA VERIYOR.

  return (
    <div>
      <h3 style={{backgroundColor:"orange"}}>Today is 26.12.2023 1:47pm </h3>

      <p style={{color:"red", fontWeight:"bold"}}>React is a JS library that is used to design user interface.</p>

      <img src="https://www.freecodecamp.org/news/content/images/size/w2000/2022/03/photo-1619410283995-43d9134e7656.jpeg" alt="img1" style={{width:"50rem"}}  />

      <img style={imgSize} src={img2} alt="img2" />
    </div>
  );
}

export default Content;
