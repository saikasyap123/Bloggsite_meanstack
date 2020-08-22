import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BlogService } from '../blog.service';
import { BlogModel } from '../../../../backend/models/blogModel';
import { MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.css']
})
export class BlogpageComponent implements OnInit {
  blogs : BlogModel[];
  constructor(private router:Router, private route:ActivatedRoute, private bs:BlogService, private sb:MatSnackBar) { }

  ngOnInit(): void {
    this.bs.getAllBlogs().subscribe((blogs:BlogModel[])=>{
      this.blogs = blogs
    })

  }
  createpost(){
    this.router.navigate(['/create'])
  }
  searchpost(){
    this.router.navigate(['/search'])
  }
  goDetail(blog:BlogModel){
    this.router.navigate(['/detail', blog])
  }
  upvote(blog:BlogModel){
    let count = blog.upvote
    count = count + 1
    this.bs.upvoteBlog(blog._id, {"upvote":count}).subscribe(()=>{
      this.sb.open('Blog Upvoted')
    
    location.reload()
    })

    
  }
  
}
