import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogpageComponent } from './blogpage/blogpage.component';
import { SearchpageComponent } from './searchpage/searchpage.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { DetailComponent } from './detail/detail.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path:'', redirectTo:'/register', pathMatch:'full'},
  { path:'register', component:RegisterComponent},
  { path:'login', component:LoginComponent},
  { path:'blogs', component:BlogpageComponent},
  { path:'search', component:SearchpageComponent},
  { path:'create', component:CreatepostComponent},
  { path:'detail/:blog', component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [BlogpageComponent, SearchpageComponent, CreatepostComponent, DetailComponent, RegisterComponent, LoginComponent]