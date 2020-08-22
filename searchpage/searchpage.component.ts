import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogModel } from '../../../../backend/models/blogModel';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
  blogs : BlogModel[];
  constructor(private router:Router, private route:ActivatedRoute, private bs:BlogService, private sb:MatSnackBar) { }

  ngOnInit(): void {
  }
  onAuthor(author){
    this.bs.getByUser(author).subscribe((blogs:BlogModel[])=>{
      this.blogs = blogs
      if (blogs.length==0){
        document.getElementById('lengthline').innerHTML =  ' No Results Found'
        }
        else {
      document.getElementById('lengthline').innerHTML = String(blogs.length) + ' search results in 0.0018s'
      if (blogs.length==0){
      document.getElementById('lengthline').innerHTML =  ' No Results Found'
      }
    }

    })
  }
  onCategory(cate){
    this.bs.getByCat(cate).subscribe((blogs:BlogModel[])=>{
      this.blogs = blogs
       if (blogs.length==0){
        document.getElementById('lengthline').innerHTML =  ' No Results Found'
        }
        else {
      document.getElementById('lengthline').innerHTML = String(blogs.length) + ' search results in 0.0018s'
      if (blogs.length==0){
      document.getElementById('lengthline').innerHTML =  ' No Results Found'
      }
    }
    })
  }
  upvote(blog:BlogModel){
    let count = blog.upvote
    count = count + 1
    this.bs.upvoteBlog(blog._id, {"upvote":count}).subscribe(()=>{
      this.sb.open('Blog Upvoted')
    setTimeout(()=>{
      this.sb.dismiss()
    }, 3000)
    })
}
}
