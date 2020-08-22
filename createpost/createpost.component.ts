import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BlogService } from '../blog.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css']
})
export class CreatepostComponent implements OnInit {
  PostForm : FormGroup;
  get title(){
    return this.PostForm.get('title')
  }
  get category(){
    return this.PostForm.get('category')
  }
  get content(){
    return this.PostForm.get('content')
  }
  get user(){
    return this.PostForm.get('user')
  }
  constructor(private router:Router, private route:ActivatedRoute, private bs:BlogService, private fb:FormBuilder, private sb:MatSnackBar) { }

  ngOnInit(): void {
    this.PostForm = this.fb.group({
      title : [''],
      category:[''],
      content:[''],
      user:['']

    })
  }
  postBlog(){
    //console.log(JSON.stringify(this.PostForm.value))
    var blogData = {
      "title":this.PostForm.value.title,
      "category":this.PostForm.value.category,
      "content":this.PostForm.value.content,
      "user":this.PostForm.value.user
    }
    this.bs.sendBlog(blogData).subscribe(()=>{
      this.sb.open('Blog Posted Successfully!')
    })
    setTimeout(()=>{
      this.sb.dismiss()
    }, 3000)
}
}
