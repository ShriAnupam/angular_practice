import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  newPost:String = 'NO CONTENT';

  Addpost(postInput:HTMLTextAreaElement){
    console.log(postInput);
    console.dir(postInput);
    this.newPost = postInput.value;

  }
  newPost1:String = 'NO CONTENT';
  eteredVal:String = '';

  Addpost1(){
    this.newPost1 = this.eteredVal;

  }
}
