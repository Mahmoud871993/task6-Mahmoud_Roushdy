import { ProductDetailsComponent } from './components/core/product-details/product-details.component';
import { ProductComponent } from './components/core/product/product.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/core/home/home.component';
import { ContactsComponent } from './components/core/contacts/contacts.component';
import { NotfoundComponent } from './components/core/notfound/notfound.component';
import { StudentComponent } from './components/core/student/student.component';
import { ProductFormComponent } from './components/core/product-form/product-form.component';
import { StudentDetailsComponent } from './components/core/student-details/student-details.component';
import { StudentFormComponent } from './components/core/student-form/student-form.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', redirectTo:''},
  {path:'contacts', component:ContactsComponent},
  {path:'product', component:ProductComponent},
  {path:'product/details/:id', component:ProductDetailsComponent},
  {path:'product/edit/:id', component:ProductFormComponent},
  {path:'product/new', component:ProductFormComponent},
  {path:'student', component:StudentComponent},
  {path:'student/details/:id', component:StudentDetailsComponent},
  {path:'student/edit/:id',component:StudentFormComponent},
  {path:'student/new',component:StudentFormComponent},
  {path:'**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
