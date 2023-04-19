import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
    return (
        <>
            <section id='header'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto ">
                            <div className="row">
                            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center home">
                                <h1>{props.name} <strong className="text-primary">Web Team</strong></h1>
                                <h2 className="my-3 fs-6">
                                    We are the team of Talented Developer Making Websites!
                                </h2>
                                <div className="mt-3">
                                    <NavLink to={props.visit} className="btn-get-started">{props.btnName}</NavLink>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 order-1 order-lg-2 header-mg img-1">
                                <img src={props.imgsrc} className="img-fluid w-full" alt='Software Images' />
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Common;