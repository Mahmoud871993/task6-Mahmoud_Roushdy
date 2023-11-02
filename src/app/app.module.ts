import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { AsideComponent } from './components/shared/aside/aside.component';
import { HomeComponent } from './components/core/home/home.component';
import { ProductComponent } from './components/core/product/product.component';
import { ContactsComponent } from './components/core/contacts/contacts.component';
import { NotfoundComponent } from './components/core/notfound/notfound.component';
import { ProductDetailsComponent } from './components/core/product-details/product-details.component';
import { ProductFormComponent } from './components/core/product-form/product-form.component';
import { StudentComponent } from './components/core/student/student.component';
import { StudentDetailsComponent } from './components/core/student-details/student-details.component';
import { StudentFormComponent } from './components/core/student-form/student-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './components/core/reactiveform/reactiveform.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AsideComponent,
    HomeComponent,
    ProductComponent,
    ContactsComponent,
    NotfoundComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    StudentComponent,
    StudentDetailsComponent,
    StudentFormComponent,
    ReactiveformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
