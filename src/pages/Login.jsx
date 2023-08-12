import React, { useState } from 'react'
import { useStateContext } from "../contexts/ContextProvider";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { login } = useStateContext();
    
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(email, password)
        const success = await login(email, password);
        if (success) {
            navigate("/dashboard");
        } else {
            setError('Tên đăng nhập hoặc mật khẩu không đúng');
        }
    };

    return (
        <>
            <div className="" style={{ backgroundColor: '#ECE9E9' }}>
                <div className="py-24">
                    <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                        <div className="md:w-8/12 lg:ml-6 lg:w-5/12" style={{ backgroundColor: "#fff", padding: '40px' }}>
                            <p style={{ fontSize: '36px', fontWeight: '700', color: '#332F64', marginBottom: '20px    ' }}>Sign In</p>
                            <form>
                                <div className="relative mb-6" style={{ display: 'flex', flexDirection: 'column' }}>
                                    <label
                                        htmlFor="exampleFormControlInput3"
                                        className='label-login'
                                    >
                                        Email*
                                    </label>
                                    <input
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        type="text"
                                        className='input-login'
                                        placeholder="Email address" />

                                </div>

                                <div className="relative mb-6" style={{ display: 'flex', flexDirection: 'column' }} >
                                    <label
                                        htmlFor="exampleFormControlInput3"
                                        className='label-login'
                                    >
                                        Password*
                                    </label>
                                    <input
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        type="password"
                                        name="password"
                                        className='input-login'
                                        autoComplete="on"
                                        placeholder="***" />


                                </div>

                                <div className="mb-6 flex items-center justify-between">
                                    <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                                        <input
                                            className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                            type="checkbox"
                                            value=""
                                        />
                                        <label
                                            className="inline-block pl-[0.15rem] hover:cursor-pointer"
                                            htmlFor="exampleCheck3"
                                            style={{ color: '#D9D9D9', fontSize: '16px', fontWeight: '400' }}>
                                            Remember me
                                        </label>
                                    </div>

                                    <a
                                        style={{ color: '#1A1363', fontWeight: '400', fontSize: '16px' }}
                                        href="#!"
                                        className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                                    >Forgot password?</a
                                    >
                                </div>

                                <button
                                    type="submit"
                                    className='btn-login'
                                    onClick={handleLogin}
                                >
                                    Sign in
                                </button>
                                {error && <div>{error}</div>}

                            </form>
                        </div>
                        <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
                            <img
                                src={"https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"}
                                className="w-full"
                                alt="Phone image"
                            />
                        </div>


                    </div>
                </div>
            </div>
        </>

    )
};

export default Login
