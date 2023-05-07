import { makeAutoObservable } from 'mobx';
import ContactsApi from '../api/contacts-api';

export default class ChatStore {
    contacts: { id: string; name: string; }[] = [];

    constructor(private contactApi: ContactsApi) {
        makeAutoObservable(this);
    }

    async loadContactsForUser() {
        const contactsListResponse = await this.contactApi.getContactListForUser();
        this.contacts = contactsListResponse.contactList;
    }
}