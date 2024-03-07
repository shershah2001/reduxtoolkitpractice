import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetails';
import { useNavigate } from 'react-router-dom';
const Create = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [users, setUsers] = useState({
        name: '',
        email: '',
        age: '',
    })
    const getUserData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUsers(({ ...users, [name]: value }))
    }
    const submitHandler = (e) => {
        console.log(users)
        e.preventDefault();
        dispatch(createUser(users))
        // setUsers({
        //     name: '',
        //     email: '',
        //     age: '',
        // })
       navigate('/read');
    }
    return (
        <>
            <form className='w-50 mx-auto' >
                <div className="mb-3">
                    <label
                        htmlFor="name"
                        className="form-label"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={getUserData}
                        id="name"
                        name='name'
                        value={users.name}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="exampleInputEmail1"
                        className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        onChange={getUserData}
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        value={users.email}
                    />
                </div>
                <div className="mb-3">
                    <label
                        htmlFor="age"
                        className="form-label"
                    >
                        Age
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={getUserData}
                        id="age"
                        name='age'
                        value={users.age}
                    />
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        onChange={getUserData}
                        id="flexCheckDefault"
                        name='gender'
                        value="Male"
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                    >
                        Male
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        onChange={getUserData}
                        id="flexCheckChecked"
                        name='gender'
                        value="Female"
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckChecked"
                    >
                        Female
                    </label>
                </div><br />
                <button type="submit" className="btn btn-primary" onClick={submitHandler}>Submit</button>
            </form>
        </>
    )
}

export default Create
