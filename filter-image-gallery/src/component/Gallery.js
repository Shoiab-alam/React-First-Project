import React from 'react'
import '../App.css';
import { Button } from '@material-ui/core';


const Gallery = (props) => {
    // const unique = new Set(Sdata.map((data)=>{
    //     return data.category;
    // }))
    // console.log(unique)
    return (<>

<div className="shell">
  <div className="container">
    <div className="row">
        {props.items.map((item)=>{
            const {id,name,image,Price,description} = item
            return(
                <div className="col-md-6 col-lg-4 col-xl-3 col-sm-6 col-10 mx-auto" key={id}>
                <div className="wsk-cp-product">
                  <div className="wsk-cp-img">
                    <img src={image} alt={name} className="img-responsive" />
                  </div>
                  <div className="wsk-cp-text">
                    <div className="category">
                      <span>{name}</span>
                    </div>
                    <div className="description-prod">
                      <p>{description}</p>
                    </div>
                    <div className="card-footer">
                      <div className="wcf-left text-danger"><span className="price">{Price}</span></div>
                      <div className="wcf-right">
                      <Button variant="contained" color='primary'>Open Now</Button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        })}
    </div>
  </div>
</div>
</>
    )
}

export default Gallery;