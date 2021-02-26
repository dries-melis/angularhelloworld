import { Component } from '@angular/core';
import { CoursesService } from '../courses.service';
import { DataService } from '../data.service';
import { GetPostService } from '../get-post.service';
import { Image } from '../image.model';
import { ImagesService } from '../images.service';
import { Post } from '../post.model';
import { User } from '../user.model';

@Component(
  {
    selector: 'course', // <courses>
   
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
  }
)
export class CourseComponent {
  title1 = "list of users";
  title2 = "list of posts";
 
  
  users: User[];
  posts: Post[];
 

  constructor(private dataService: DataService, private postService: GetPostService, private imageService: ImagesService) {
   
  }

  ngOnInit() {
    return this.dataService.getUsers()
      .subscribe(data => this.users = data), this.postService.getPosts().subscribe(data => this.posts = data);
  }
}