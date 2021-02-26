import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
import { DataService } from './data.service';
import { GetPostService } from './get-post.service';
import { Post } from './post.model';
import { User } from './user.model';

@Component(
  {
    selector: 'courses', // <courses>
    template: `
      <h2>{{ title }}</h2>
      <ul>
        <li *ngFor="let user of users">
          {{ user.email }}
          {{ user.id }}
        </li>
      </ul>
      <h2>{{ title }}</h2>
      <ul>
        <li *ngFor="let post of posts">
          {{ post.title }}
          {{ post.id }}
        </li>
      </ul>
      `
  }
)
export class CoursesComponent {
  title = "list of users";
  users: User[];
  posts: Post[];

  constructor(private dataService: DataService, private postService: GetPostService) {
   
  }

  ngOnInit() {
    return this.dataService.getUsers()
      .subscribe(data => this.users = data), this.postService.getPosts().subscribe(data => this.posts = data);
  }
}