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
    // we send the orignal refernce var here which get manupilate
    return this.posts;
  }

  addPost(title:string,content:string){
    const post: Post={title:title, content:content};
    this.posts.push(post);
  }
}
