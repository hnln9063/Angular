
import { ExpComponent } from './exp/exp.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
   { path: 'first-component', component:FirstComponent },

   { path: 'second-component', component:SecondComponent },
    { path: '', redirectTo:'/first-component',pathMatch:'full'}, 
    { path: '**', component:ExpComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}

