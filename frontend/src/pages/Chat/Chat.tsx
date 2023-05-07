import React, {FC, useEffect} from 'react';
import styles from './Chat.module.css';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { RootStoreContext } from '../../stores/root-context';
import {nanoid} from 'nanoid';

const ChatPage: FC = function() {
    const {authStore, contactStore} = React.useContext(RootStoreContext);

    useEffect(() => {
        (async () => {
            await contactStore.loadContactsForUser();
        })
    });

    return (
        <div className={styles.chatPage}>
            <section className={styles.content}>
                <aside className={styles.menu}>
                    <div className={styles.contacts}>
                        {contactStore.contacts.map((contact) => {
                            return <Link key={nanoid()} to={'contacts/1'}>{contact.name}</Link>
                        })}
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
