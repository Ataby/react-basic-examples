import React from 'react'

const Card = ({ data }) => {
    return (
        <div style={{display:"flex",flexWrap:"wrap"}}>
            {
                data?.map(item => {
                    return (
                        <div key={item.id} style={{border:"2px solid orange",justifyContent:"center",padding:"1rem"}}>
                            <div className="card"  >
                                <img src={item.user} style={{ border:"2px solid blue", maxWidth:"400px" }}className="card-img-top" alt="..." />
                                <div className="card-body" style={{border:"2px solid green"}}>
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">
                                        {item.email}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Card