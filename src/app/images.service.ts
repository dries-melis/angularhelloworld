import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Image } from './image.model';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  endPoint = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private _http: HttpClient) { }

  getImages() {
    return this._http.get<Image[]>(this.endPoint);
  }
}
