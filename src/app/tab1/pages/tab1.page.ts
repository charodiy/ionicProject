import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
    users: any[];

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        return this.userService.getAllUsers().subscribe(value => this.users = value);
    }

}
