import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return(
        <div className="col-md-4 col-10 mx-auto">
        <div class="card">
        <img src={props.imgsrc} class="img-fluid" alt="Software Images" />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.text}</p>
                <NavLink to="/" class="btn btn-outline-primary">Get started</NavLink>
            </div>
    </div>
    </div>
    )
}
export default Card;