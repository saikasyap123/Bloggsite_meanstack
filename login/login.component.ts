import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BlogService } from '../blog.service';
import { MatSnackBar} from '@angular/material/snack-bar';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm:FormGroup;
  constructor(private router:Router, private route:ActivatedRoute, private bs:BlogService, private sb:MatSnackBar, private fb:FormBuilder) { }
  get username(){
    return this.LoginForm.get('username')
  }

  get email(){
    return this.LoginForm.get('email')
  }
  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      username:[''],
      email:['']
    })
  }

  Login(){
    let userData = {
      "username":this.LoginForm.value.username,
      "email":this.LoginForm.value.email
    }
    this.bs.loginUser(userData).subscribe((res)=>{
      if (res['message']=='Login Successfull!'){
        this.sb.open('Login Successful!')
        setTimeout(()=>{
          this.sb.dismiss()
          this.router.navigate(['/blogs'])
        }, 2000)
      }
      else {
        this.sb.open('Invalid Credentials!')
        setTimeout(()=>{
          this.sb.dismiss()
        }, 2000)
      }
    })
  }

}
