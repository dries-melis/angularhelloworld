import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';


@Injectable({
  providedIn: 'root'
})
export class GetPostService {
  endpoint = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private _http: HttpClient) { }
  getPosts()
  {
    return this._http.get<Post[]>(this.endpoint);
  }
}
