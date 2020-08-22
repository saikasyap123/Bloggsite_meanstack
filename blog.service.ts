import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class BlogService {
  constructor(private http:HttpClient) { }
  getAllBlogs(){
    return this.http.get('http://localhost:3000/blog/all')
  }
  getByUser(user:string){
    return this.http.post('http://localhost:3000/blog/searchbyuser', {"user":user})
  }
  getByCat(cate:string){
    return this.http.post('http://localhost:3000/blog/searchbycategory', {"category":cate})
  }
  sendBlog(payload){
    return this.http.post('http://localhost:3000/blog/createblog', payload)
  }
  upvoteBlog(blogid,payload){
    return this.http.patch(`http://localhost:3000/blog/upvote/${blogid}`, payload)
  }

  registerUser(payload){
    return this.http.post('http://localhost:3000/user/newuser', payload)
  }

  loginUser(payload){
    return this.http.post('http://localhost:3000/user/userlogin', payload)
  }
}
