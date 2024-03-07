import React from 'react'
import '../assessts/PopUp.css'
const PopUP = ({ id, user,setShowPopUp }) => {
    const findPopUp = user.filter((item) => item.id === id);
    // const findPopUpOfarr = Object.entries(findPopUp)
    // console.log(findPopUp)
    const hidePopUp = () =>{
        setShowPopUp(false)
    }
    return (
        <>
            <div className='main_Pop_div'>
                <div className='sec_main_Pop_div'>
                    <button className='btn btn-primary mb-3 w-25' onClick={hidePopUp}>close</button>
                    {findPopUp.map((ele) => {
                        return (
                            <>
                                {/* <div className='mt-4 popUp_loop_div d-flex justify-content-center flex-column'> */}
                                    <h3 className=' text-bold'>{ele.name}</h3>
                                    <h3 className=' text-bold'>{ele.email}</h3>
                                    <h4 className='text-par-bold'>{ele.gender}</h4>
                                    <h4 className='text-par-bold'>{ele.age}</h4>
                                {/* </div> */}
                            </>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default PopUP
