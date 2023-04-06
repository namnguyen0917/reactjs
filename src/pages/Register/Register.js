import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import clsx from 'clsx';
import { useState } from 'react';

const cx = classNames.bind(styles);
const notify = () =>
    toast.success('🦄 Wow so easy!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
    });

function Register() {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const [messagers, setMessager] = useState([]);

    async function registerUser(credentials) {
        // return fetch('http://localhost:3000/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(credentials),
        // }).then((data) => data.json());
        console.log(credentials);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        setMessager([]);
        let _checkStatus = true;

        if (username.length < 6 || username.length > 24) {
            _checkStatus = false;
            setMessager((messager) => [...messager, 'At least 6 and no more than 24 characters']);
        }

        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!email.match(validRegex)) {
            _checkStatus = false;
            setMessager((messager) => [...messager, 'Email error']);
        }

        if (password !== repassword) {
            _checkStatus = false;
            setMessager((messager) => [...messager, 'Password is not match']);
        }

        if (_checkStatus) {
            const token = await registerUser({
                username,
                email,
                password,
            });
        }
    };

    return (
        <div className="container">
            <div>
                <button onClick={notify}>Notify!</button>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="login-panel panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Create account</h3>
                        </div>
                        <div className={clsx('alert-danger', messagers.length > 0 ? cx('error-message') : ' ')}>
                            {messagers.map((item, index) => (
                                <div className="alert-link" key={index}>
                                    {item}
                                </div>
                            ))}
                        </div>
                        <div className="panel-body">
                            <form role="form" onSubmit={handleSubmit}>
                                <fieldset>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            value={username}
                                            required
                                            className="form-control"
                                            placeholder="User name"
                                            onChange={(e) => setUserName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            value={email}
                                            required
                                            className="form-control"
                                            placeholder="E-mail"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input
                                            required
                                            className="form-control"
                                            placeholder="Password"
                                            type="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Re-Password</label>
                                        <input
                                            required
                                            className="form-control"
                                            placeholder="new-password"
                                            type="password"
                                            onChange={(e) => setRePassword(e.target.value)}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-lg btn-success btn-block">
                                        Register
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                        <div className={clsx('panel-body', 'center-login')}>
                            <Link to="/login">Log-in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
