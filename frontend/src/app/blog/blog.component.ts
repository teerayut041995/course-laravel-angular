import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { NgForm } from '@angular/forms';
import { Subscribable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: any;
  public blogSub: Subscription;
  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit() {
    // this.blogService.getBlogs()
    //   .subscribe(response => {
    //     this.blogs = response;
    //     console.log(response);
    //   });
    this.blogService.getBlogs();
    this.blogSub = this.blogService.getBlogUpdate()
      .subscribe(res => {
        this.blogs = res;
        console.log(this.blogs);
      });
  }

  onAddBlog(form: NgForm) {
    this.blogService.addBlog(form.form.value.title, form.form.value.content);
    // console.log(form.form.value.title);
  }

  onDelete(id: string) {
    this.blogService.delete(id);
  }
  onEdit(id: string) {
    this.router.navigate(['blogs/' + id]);
  }
}
