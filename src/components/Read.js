import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { removeUser, showUser } from '../features/userDetails';
import PopUP from './PopUP';
const Read = () => {
    const dispatch = useDispatch();
    const { user, loading, error, searchInfoData } = useSelector((state) => state.user);
    // console.log("btnClick=>",btnClick)
    const [id, setId] = useState();
    const [showPopUp, setShowPopUp] = useState(false);
    const [radioData, setRadioData] = useState();
    useEffect(() => {
        dispatch(showUser())
    }, [])

    const removeHandler = (id) => {
        dispatch(removeUser(id))
    }

    if (loading) {
        return (
            <div className='d-flex justify-content-center align-items-center my-5'>
                <div class="spinner-border text-center" role="status">
                </div>
            </div>
        )
    }
    return (
        <>
            <div className='d-flex  justify-content-center mt-5'>
                <div className="form-check mx-1">
                    <input
                        className="form-check-input"
                        type="radio"
                        id="flexCheckChecked"
                        name='gender'
                        value=""
                        checked={radioData === ''}
                        onChange={(e) => setRadioData(e.target.value)}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                    >
                        All
                    </label>
                </div>
                <div className="form-check mx-1">
                    <input
                        className="form-check-input"
                        type="radio"
                        id="flexCheckDefault"
                        name='gender'
                        value="Male"
                        checked={radioData === 'Male'}
                        onChange={(e) => setRadioData(e.target.value)}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                    >
                        Male
                    </label>
                </div>
                <div className="form-check mx-1">
                    <input
                        className="form-check-input"
                        type="radio"
                        id="flexCheckChecked"
                        name='gender'
                        value="Female"
                        checked={radioData === 'Female'}
                        onChange={(e) => setRadioData(e.target.value)}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                    >
                        Female
                    </label>
                </div>
            </div>
            <h2 className='text-center mt-5'>All Data</h2>
            {showPopUp && <PopUP id={id} user={user} setShowPopUp={setShowPopUp} />}
            {user &&
                (user
                    .filter((ele) => {
                    if (searchInfoData.length === 0) {
                        return ele;
                    } else {
                        return ele.name.toLowerCase().includes(searchInfoData.toLowerCase())
                    }
                })
                    .filter((ele) => {
                        if (radioData === 'Male') {
                            return ele.gender === radioData
                        } else if (radioData === "Female") {
                            return ele.gender === radioData
                        } else {
                            return ele
                        }
                    })
                    .map((items) => {
                        return (
                            <>
                                <div key={items.id} className="card mt-5 m-auto w-25" style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{items.name}</h5>
                                        <p className="card-text text-center">
                                            {items.email}
                                        </p>
                                        <p className='text-center'>{items.age}</p>
                                        <p className='text-center'>{items.gender}</p>
                                        <div className='d-flex justify-content-center'>
                                            <NavLink to="#" className="btn btn-success"
                                                onClick={() => {
                                                    return (
                                                        setId(items.id),
                                                        setShowPopUp(true)
                                                    )
                                                }}
                                            >
                                                View
                                            </NavLink>
                                            <NavLink style={{ marginLeft: "1rem" }} to={`/editdata/${items.id}`} className="btn btn-primary">
                                                Edit
                                            </NavLink>
                                            <NavLink style={{ marginLeft: "1rem" }} to="#" className="btn btn-danger"
                                                onClick={() => removeHandler(items.id)}
                                            >
                                                Remove
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>

                            </>
                        )
                    })
                )
            }

        </>
    )
}

export default Read
