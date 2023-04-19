import React, { useState } from "react";



const Contact = () => {
    const [show, setShow] = useState(false) 
    const [input,setInput] = useState({
        fullname:'',
        phone: '',
        email: '',
        msg: ''
    })
    
    const inputList = (event) => {
        const {name,value} = event.target
        setInput((preValue) => {
            return {
                ...preValue,
                [name] :value
            }
        })
        setShow(true)
    }
    const formSubmit = (event) => {
        event.preventDefault()
        alert(`Your Name is ${input.fullname}. Your Mobile Number is ${input.phone} and your email is ${input.email} and this is your message ${input.msg}`)
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact US {input.fullname} {input.phone} {input.email} {input.msg}</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label className="form-label">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name='fullname'
                                    value={input.fullname}
                                    onChange={inputList}
                                    placeholder="Enter Your Name"
                                    autoComplete="off"
                                />

                                <label className="form-label">
                                    Phone
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    name='phone'
                                    value={input.phone}
                                    onChange={inputList}
                                    placeholder="Enter Your Mobile Number"
                                    autoComplete="off"
                                />

                                <label className="form-label">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name='email'
                                    value={input.email}
                                    onChange={inputList}
                                    placeholder="Enter Your Email"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">
                                    Example Textarea
                                </label>
                                <textarea className="form-control" value={input.msg} name='msg' onChange={inputList} rows="3"></textarea>
                            </div>
                            <div class="col-12">
                               {show && <button className="btn btn-outline-primary" type="submit">Submit form</button>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;