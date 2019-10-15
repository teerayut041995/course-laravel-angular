import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
const BACKEND_URL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private blogUpdate = new BehaviorSubject('');
  private blogs: any;
  constructor(private http: HttpClient) { }

  getBlog(id: string) {
    return this.http.get<{data: any}>(BACKEND_URL + '/blogs/' + id);
  }

  getBlogs() {
    this.http.get<{data: any}>(BACKEND_URL + '/blogs')
      .subscribe(res => {
        this.blogs = res;
        this.blogUpdate.next(this.blogs);
      });
  }

  getBlogUpdate() {
    return this.blogUpdate.asObservable();
  }

  addBlog(title: string, content: string) {
    const data = {
      title: title,
      content: content
    };
    this.http.post<{data: any}>(BACKEND_URL + '/blogs', data)
      .subscribe(res => {
        this.blogs.push(res);
        this.blogUpdate.next(this.blogs);
        console.log(res.data);
      }, error => {
        console.log(error);
      });
  }

  delete(id: string) {
    this.http.delete<{data: any}>(BACKEND_URL + '/blogs/' + id)
      .subscribe(() => {
        const updateBlog = this.blogs.filter(blog => blog.id !== id);
        this.blogs = updateBlog;
        this.blogUpdate.next(this.blogs);
      });
  }

  update(title: string, content: string, id: string) {
    const data = {
      title: title,
      content: content
    };
    this.http.patch<{data: any}>(BACKEND_URL + '/blogs/' + id, data)
      .subscribe(res => {
        const updateBlog = this.blogs;
        const oldBlogIndex = updateBlog.findIndex(blog => blog.id === id);
        const blog = res;
        updateBlog[oldBlogIndex] = blog;
        this.blogs = updateBlog;
        this.blogUpdate.next(this.blogs);
      });
  }

}
