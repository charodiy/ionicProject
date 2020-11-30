import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

    posts: any[];

    constructor(private postService: PostService) {
    }

    ngOnInit() {
        return this.postService.getAllPosts().subscribe(value => this.posts = value);
    }

}
