import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { searchData } from '../features/userDetails';

const Wrapper = styled.section`
 a{
    text-decoration:none;
    padding:0 1rem;
    color:navblue;
 }
`

const Navbar = () => {
    const dispatch = useDispatch()
    const [searchinfo, setSearchInfo] = useState("")
    const searchHandler = (e) => {
        const search = e.target.value;
        setSearchInfo(search)
    }
    const searchSubmitHandler = (e) =>{
       e.preventDefault();
       dispatch(searchData(searchinfo))
    }
    return (
        <>
            <Wrapper>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="#">Navbar</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link active" aria-current="page">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/read" className="nav-link" >All Post</NavLink>
                                </li>
                            </ul>
                            <form className="d-flex" role="search" onSubmit={searchSubmitHandler}>
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" 
                                onChange={searchHandler} />
                                <button className="btn btn-outline-success" type="submit" >Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </Wrapper>
        </>
    )
}

export default Navbar
