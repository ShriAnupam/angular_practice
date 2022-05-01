import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../post.models';
import { PostsService } from '../posts.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
              // Inject Postssrvice here
  constructor(public postsService:PostsService) { }

  ngOnInit(): void {
  }
  newPost1:String = 'NO CONTENT';
  eteredContent:String = '';
  enterTitle:String = '';

  Addpost1(form:NgForm){
    //this.newPost1 = this.eteredContent;
    if(form.invalid){
      return;
    }
    this.postsService.addPost(form.value.title,form.value.content);
    form.resetForm();
  }
}
