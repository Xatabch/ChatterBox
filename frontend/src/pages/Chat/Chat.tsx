import React, {FC} from 'react';
import styles from './Chat.module.css';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

const ChatPage: FC = function() {
    return (
        <div className={styles.chatPage}>
            <section className={styles.content}>
                <aside className={styles.menu}>
                    <div className={styles.contacts}>
                        <Link to={'contacts/1'}>Name of first contact</Link>
                        <Link to={'contacts/2'}>Name of second contact</Link>
                    </div>
                </aside>
                <div className={styles.chat}>
                    <div className={styles.messages}></div>
                    <div className={styles.sendOptions}>
                        <input className={styles.input}></input>
                        <button>Send</button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default observer(ChatPage);
