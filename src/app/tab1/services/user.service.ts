import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private httpClient: HttpClient) {
    }

    getAllUsers() {
        return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users');
    }
}
