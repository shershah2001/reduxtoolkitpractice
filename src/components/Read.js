import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { showUser } from '../features/userDetails';
import PopUP from './PopUP';
const Read = () => {
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector((state) => state.user);
    const [id, setId] = useState();
    const [showPopUp, setShowPopUp] = useState(false);

    useEffect(() => {
        dispatch(showUser())
    }, [])
    if (loading) {
        return <div class="spinner-border d-flex justify-content-center " role="status">
            <span class="visually-hidden ">Loading...</span>
        </div>
    }
    return (
        <>
            <h2 className='text-center mt-5'>All Data</h2>
            {showPopUp && <PopUP id={id} user={user} setShowPopUp={setShowPopUp} />}
            {user &&
                (user.map((items) => {
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
                                        <NavLink style={{ marginLeft: "1rem" }} to="#" className="btn btn-primary">Edit</NavLink>
                                        <NavLink style={{ marginLeft: "1rem" }} to="#" className="btn btn-danger">Remove</NavLink>
                                    </div>
                                </div>
                            </div>

                        </>
                    )
                }))
            }

        </>
    )
}

export default Read
