const Person=function(props){
    const {name,tlf, img}=props;
    return (
        
        <div style={{textAlign:"center"}}>
            <h2> merhaba!</h2>
            <p>{tlf}</p>
            <img style={{width:"500px"}} src={img} alt="img"/>
        </div>

        
    );
}
//JSX ICINDE CSS VERIRKEN ILK PARANTEZ JS'NIN PARANTEZI, IKINCI PARANTEZ OBJE'NIN PARANTEZI
export default Person;