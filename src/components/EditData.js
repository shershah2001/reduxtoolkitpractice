import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUser } from '../features/userDetails';
import { useNavigate, useParams } from 'react-router-dom';

const EditData = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { user, loading } = useSelector((state) => state.user)
    const { id } = useParams();
    const userfind = user.find((ele) => ele.id === id)
    const [findUsers, setFindUsers] = useState()
    useEffect(() => {
        setFindUsers(userfind)
    },[])
    const findUserData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFindUsers(({...findUsers, [name]:value}))
    }
    const submitHandler = (e) => {
        // console.log(users)
        e.preventDefault();
        dispatch(editUser(findUsers))
        // setUsers({
        //     name: '',
        //     email: '',
        //     age: '',
        // })
        navigate('/read');
    }
    return (
        <div>
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
                        onChange={findUserData}
                        id="name"
                        name='name'
                        value={findUsers && findUsers.name}
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
                        onChange={findUserData}
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        name="email"
                        value={findUsers && findUsers.email}
                        checked
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
                        onChange={findUserData}
                        id="age"
                        name='age'
                        value={findUsers && findUsers.age}
                    />
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        onChange={findUserData}
                        id="flexCheckDefault"
                        name='gender'
                        value="Male"
                        checked={findUsers && findUsers.gender === 'Male'}
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
                        onChange={findUserData}
                        id="flexCheckChecked"
                        name='gender'
                        value="Female"
                        checked={findUsers && findUsers.gender === 'Female'}
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
        </div>
    )
}

export default EditData;
