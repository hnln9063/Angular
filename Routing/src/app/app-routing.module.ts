import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AcademicsComponent } from './academics/academics.component';
import { ProjectComponent } from './project/project.component';
import { ContactusComponent } from './contactus/contactus.component'; 

const routes: Routes = [
  {path:'home-component',component:HomeComponent},
  {path:'academics-component',component:AcademicsComponent},
  {path:'project-component', component:ProjectComponent},
  {path:'',redirectTo:'/home-component',pathMatch:'full'},
  {path: 'contactus-component', component:ContactusComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
