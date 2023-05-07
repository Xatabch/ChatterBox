import ApiService from './services/api-service';
import ContactsApi from './contacts-api';

export default class RootApi {
    contactApi: ContactsApi;

    constructor(private apiService: ApiService) {
        this.contactApi = new ContactsApi(apiService);
    }
}