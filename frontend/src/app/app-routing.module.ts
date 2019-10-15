import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { ProductsComponent } from './products/products.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';


const routes: Routes = [
  {path: 'blogs', component: BlogComponent},
  {path: 'blogs/:id', component: EditBlogComponent},
  {path: 'products', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
