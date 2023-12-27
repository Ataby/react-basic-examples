import ButonStyle from "./Buton.module.css";
//JS VEYA JSX DOSYASI HARICINDEKILERIN UZANTILARI EKLENMELI

const Buton = ({ tus }) => {
  console.log(tus);
  return (
    <div className={ButonStyle.title}>
      <button className={ButonStyle["btn-blue"]}>{tus} </button>
    </div>
  );
};

export default Buton;
