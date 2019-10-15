import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.scss']
})
export class EditBlogComponent implements OnInit {
  public blog: any;
  constructor(private route: ActivatedRoute, private blogService: BlogService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      console.log(paramMap.get('id'));
      this.blogService.getBlog(paramMap.get('id'))
      .subscribe(res => {
        console.log(res);
        this.blog = res;
      });
    });
  }

  onUpdate(form: NgForm) {
    this.blogService.update(form.form.value.title, form.form.value.content, this.blog.id);
  }
}
