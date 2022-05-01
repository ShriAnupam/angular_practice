import { Injectable } from '@angular/core';
// it could be say like as Event Emitter but is broader than what angular Event Emiiter Worked as
// Subbject worked as Event Emitter but also as a Observable tooby Subscription
import { Subject } from 'rxjs';
import { Post } from './post.models';
@Injectable({
  providedIn: 'root'
  // by this we provide this services to root level
})
export class PostsService {
  constructor() { }

  // Main post array
  private posts:Post[]=[];
  // Worked like as Event Emiiter and we put generic Data type as post payload
  private postUpdated = new Subject<Post[]>()

  getPosts(){
    // we send the orignal refernce var here which get manupilate
    return [...this.posts];
  }
// we created this method for listening the postUpdated property
// because it updates as per add post so it goint to emit new data in this.posts
  getPotUpdateListner(){
    // returns a object that we listen but wehere we cant emitt
    // by this method we provide it as a refernce of new posts data
    return this.postUpdated.asObservable();
  }

  addPost(title:string,content:string){
    const post: Post={title:title, content:content};
    // After adding to main array of posts
    this.posts.push(post);
    // this Subject next method Emitts the new add post and send the new value to the postlist
    // this emitts the new copy of the post after the update
    // here we update the posts property and send an new copy
    this.postUpdated.next([...this.posts])
  }
}
