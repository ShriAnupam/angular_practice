import { Injectable } from '@angular/core';
import { Post } from './post.models';
@Injectable({
  providedIn: 'root'
  // by this we provide this services to root level
})
export class PostsService {
  constructor() { }

  // Main Copy of post array
  private posts:Post[]=[];

  getPosts(){
    // we send copy of the array to the caller
    // we use the spread operator of javascript ec6 here
    return [...this.posts];
  }

  addPost(title:string,content:string){
    const post: Post={title:title, content:content};
    this.posts.push(post);
  }
}
