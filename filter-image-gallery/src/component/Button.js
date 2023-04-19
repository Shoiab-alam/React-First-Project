const Buttons = ({ itemFilter, categoryItems}) => {

    return (<>

        <div className='container mt-5'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <div className='d-flex justify-content-between'>
                        {categoryItems.map((items,index) => {
                            return (
                                <button key={index}className='btn btn-outline-success' onClick={() => itemFilter(items)}>{items}</button>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Buttons