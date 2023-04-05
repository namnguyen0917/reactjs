import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import clsx from 'clsx';

const cx = classNames.bind(styles);

function Register() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <div className="login-panel panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Create account</h3>
                        </div>
                        <div className="panel-body">
                            <form role="form">
                                <fieldset>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input className="form-control" placeholder="User name" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control" placeholder="E-mail" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <label>Re-Password</label>
                                        <input className="form-control" placeholder="Re-password" />
                                    </div>
                                    <a href="#" className="btn btn-lg btn-success btn-block">
                                        Register
                                    </a>
                                </fieldset>
                            </form>
                        </div>
                        <div className={clsx('panel-body', cx('center-login'))}>
                            <Link to="/login">Log-in</Link>to{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
