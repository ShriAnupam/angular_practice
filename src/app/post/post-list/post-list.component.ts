import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../post.models';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts:Post[] = [];
  private postSub:Subscription;


  // Here we define the Dependency Injection of postService to this Component Construcor
  // And also use public keyword so ypscript add a property to this class directly without definig it like argument = this.property
  // Example this.postsService(property)= postsService(argument)
  constructor(public postsService:PostsService) { }

  ngOnInit(): void {
     this.postsService.getPosts();
      // subscribe use argument function
      // first function executed whenever new data is emitted
      // second argument function is called whenever error is emitted
      // third argument function is called whenever observable is completed and no more valued to be excpected
      // posts comes from addPost services when this.postUpdated.next([...this.posts]) emits data
    this.postSub = this.postsService.getPotUpdateListner().subscribe((posts:Post[])=>{
      // this subscribtion is not down even if the component is down means the data is still get emited here even we are not on the component
      this.posts = posts;
      // so project bigger and the component is not part of active dom then we need to unscribe this subscription for memory leakage to be not impact
    });
  }

  panelOpenState = false;

  // posts = [
  //   {title:'First Post', content:'This is the content of First Post'},
  //   {title:'Second Post', content:'This is the content of Second Post'},
  //   {title:'Third Post', content:'This is the content of Third Post'},
  // ]
  ngOnDestroy(){
    // So here we use angular lifecycle to unsubscribe the property from getting more data by subscribe and it be remove by this we can prevent memory leak
    this.postSub.unsubscribe();
  }

}
