import React, {FC} from 'react';
import styles from './Login.module.css';
import {RootStoreContext} from '../../stores/root-context';
import {useNavigate, useLocation} from 'react-router-dom';
import {observer} from 'mobx-react-lite';

const LoginPage: FC = function() {
    const {authStore} = React.useContext(RootStoreContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    return (
        <div className={styles.loginPage}>
            <section className={styles.loginForm}>
                <label htmlFor="nickname">Enter your email or nickname:</label>
                <input className={styles.nicknameInput} id="nickname" name="nickname" type="text" />
                <label htmlFor="password">Enter your password</label>
                <input className={styles.passwordInput} id="password" name="password" type="password" />
                <button onClick={() => {
                    authStore.login(() => navigate(from, { replace: true }))
                }}>Submit</button>
            </section>
        </div>
    );
}

export default observer(LoginPage);
