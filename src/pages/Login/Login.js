import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import clsx from 'clsx';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="login-panel panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Please Sign In</h3>
                        </div>
                        <div className="panel-body">
                            <form role="form">
                                <fieldset>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="E-mail" />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="checkbox">
                                        <label>
                                            <input name="remember" type="checkbox" />
                                            Remember Me
                                        </label>
                                    </div>
                                    <a href="#" className="btn btn-lg btn-success btn-block">
                                        Login
                                    </a>
                                </fieldset>
                            </form>
                        </div>

                        <div className={clsx('panel-body', cx('center-login'))}>
                            <Link to="/register">Create account</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
