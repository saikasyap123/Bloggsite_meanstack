import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BlogService } from '../blog.service';
import { MatSnackBar} from '@angular/material/snack-bar';
import { FormGroup, FormControl, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm:FormGroup;
  constructor(private router:Router, private route:ActivatedRoute, private bs:BlogService, private sb:MatSnackBar, private fb:FormBuilder) { }
  get username(){
    return this.RegisterForm.get('username')
  }
  get email(){
    return this.RegisterForm.get('email')
  }
  ngOnInit(): void {
    this.RegisterForm = this.fb.group({
      username:[''],
      email:['']
    })
  }

  register(){
    let userData = {
      "username":this.RegisterForm.value.username,
      "email":this.RegisterForm.value.email
    }
    this.bs.registerUser(userData).subscribe((res)=>{
      if (res['message']=="User Added Successfully!"){
        this.sb.open('Registered Successfully!')

        setTimeout(()=>{
          this.sb.dismiss()
          this.router.navigate(['/login'])
        }, 2000)
        
      }
      

    })
  }

}
