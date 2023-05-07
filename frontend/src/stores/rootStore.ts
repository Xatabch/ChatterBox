import AuthStore from './authStore';
import ContactStore from './contactStore';
import RootApi from 'src/api/root-api';

export default class RootStore {
    authStore: AuthStore;
    contactStore: ContactStore;

    constructor(private backend: RootApi) {
        this.authStore = new AuthStore();
        this.contactStore = new ContactStore(backend.contactApi);
    }
}