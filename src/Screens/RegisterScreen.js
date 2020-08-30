import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../actions/userActions';
import './RegisterScreen.css';

function RegisterScreen(props) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const userRegister = useSelector(state => state.userRegister);
    const { loading, userInfo, error } = userRegister;

    const dispatch = useDispatch();

    useEffect(() => {
        if (userInfo) {
            props.history.push('/signin');
        }
        return () => {
            //cleanup
        }
    }, [userInfo])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(register(name, email, password));
    }

    return (
        <div className="form">
            <form onSubmit={submitHandler}>
                <ul className="form-container">
                    <li>
                        <h2>Create Account</h2>
                    </li>
                    <li>
                        {loading && <div>Loading...</div>}
                        {error && <div>{error}</div>}
                    </li>
                    <li>
                        <label htmlFor="name">Name</label>
                        <input type="name" id="name" name="name" onChange={(e) => setName(e.target.value)}></input>
                    </li>
                    <li>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)}></input>
                    </li>
                    <li>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                    </li>
                    <li>
                        <label htmlFor="rePassword">Confirm Password</label>
                        <input type="password" name="rePassword" id="rePassword" onChange={(e) => setRePassword(e.target.value)} />
                    </li>
                    <li>
                        <button type="submit" className="button primary">Register</button>
                    </li>
                    <li>Already have an account?</li>
                    <li>
                        <Link to='/signin' className="full-width">Sign-In</Link>
                    </li>
                </ul>
            </form>
        </div>
    )
}

export default RegisterScreen;
