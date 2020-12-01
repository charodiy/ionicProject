import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CommentService {

    constructor(private httpClient: HttpClient) {
    }

    getAllComments(): any {
        return this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/comments');
    }
}
