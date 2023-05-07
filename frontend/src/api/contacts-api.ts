import { toContactList } from './adapaters/contacts';
import ApiService from './services/api-service';

export default class ContactsApi {
    constructor(private backend: ApiService) {}

    async getContactListForUser() {
        const response = await this.backend.get('/api/contacts');


        return toContactList(response.body);
    }
}