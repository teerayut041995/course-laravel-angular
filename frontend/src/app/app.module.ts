import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { ProductsComponent } from './products/products.component';
import { from } from 'rxjs';
import { EditBlogComponent } from './edit-blog/edit-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    ProductsComponent,
    EditBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
