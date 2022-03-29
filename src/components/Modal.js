import './Modal.css'

function Modal({hidden, handleModal, jsonDB}) {

    console.log(jsonDB)

    const handleClose = (value) => {
        handleModal(value)
    }

    return (
        <>
            <section>
                <div id="top-right-modal" data-modal-placement="top-right" tabIndex="-1" className={`${hidden} fixed overflow-y-auto overflow-x-hidden fixed top-10 right-10  z-50 h-modal`}>
                    <div className="sm:w-96 h-full ">
                        <div className=" bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                                <h3 className="skeleton-text text-xl font-medium text-gray-900 dark:text-white">
                                    {jsonDB.properties.NAME}
                                </h3>
                                <button onClick={() => handleClose('hidden')} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="top-right-modal">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>

                            <div className="flex p-5">
                                <div className="w-60 h-72">
                                    <img  className="skeleton w-full h-full" src={`${jsonDB.properties.IMG}`}/>
                                </div>
                                <div className="skeleton-text flex w-28 dark:text-white flex-col mt-3 ml-5">
                                    <h1>Day: {jsonDB.properties.DAY} </h1>

                                    <h1 className="skeleton-text mt-3">Street: <br/>{jsonDB.properties.ADDRESS}</h1>
                                </div>
                            </div>
                         
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )
}

export default Modal