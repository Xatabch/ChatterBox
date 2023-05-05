import { makeAutoObservable } from 'mobx';

export default class AuthStore {
    isAuthenticated: boolean = false;
    token: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    login(onSuccess: () => void) {
        this.isAuthenticated = true;
        onSuccess();
    }

    logout() {
        this.isAuthenticated = false;
        this.token = null;
        localStorage.removeItem('authToken');
    }

    checkAuth() {
        const token = localStorage.getItem('authToken');
        if (token) {
            this.isAuthenticated = true;
            this.token = token;
        }
    }
}