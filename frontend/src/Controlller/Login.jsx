import React, { useState } from 'react';
import Navbar from './Navbar';

const Login = ({login,setLogin}) => {
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userType, setUserType] = useState('customer'); 
    const [error, setError] = useState('');

    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        
        if (!email || !password) {
            setError('Please fill in both fields');
            return;
        }

        
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        
        setError('');
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('User Type:', userType);
        const postData={
            "userId":email,
            "password":password
        }
        console.log(postData);
       setLogin(true)
        //submit form
        
    };

    return (
        <>
            <dialog id="my_modal_1" className="modal text-black">
                <div className="modal-box">
                    <form onSubmit={handleSubmit}>
                        <div className="flex gap-5 flex-col items-center justify-center">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Enter Your Email"
                                    className="input input-bordered w-full max-w-xs"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <input
                                    type="password"
                                    placeholder="Enter Your Password"
                                    className="input input-bordered w-full max-w-xs"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div className='flex gap-9'>
                                <div className='flex items-center justify-center gap-5'>
                                    <div>Customer</div>
                                    <div>
                                        <input
                                            type="radio"
                                            name="userType"
                                            className="radio radio-success"
                                            checked={userType === 'customer'}
                                            onChange={() => setUserType('customer')}
                                        />
                                    </div>
                                </div>
                                <div className='flex items-center justify-center gap-5'>
                                    <div>
                                        Studio Owner
                                    </div>
                                    <div>
                                        <input
                                            type="radio"
                                            name="userType"
                                            className="radio radio-warning"
                                            checked={userType === 'studioOwner'}
                                            onChange={() => setUserType('studioOwner')}
                                        />
                                    </div>
                                </div>
                            </div>
                            {error && <div className="text-red-500">{error}</div>}
                            <div>
                                <button type="submit" className="btn btn-outline btn-accent" >Login</button>
                            </div>
                            <div >
                                <a href=''>Forgot Password ?</a><br /><a href='/signup'>Create Account ?</a>
                            </div>
                        </div>
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn btn-outline btn-accent">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default Login;
