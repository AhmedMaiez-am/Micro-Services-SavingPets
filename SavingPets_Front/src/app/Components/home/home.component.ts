import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { faThumbsUp, faThumbsDown, faTrash, faComment, faAngleUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ListBlog: any;
  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  faTrash = faTrash;
  faComment = faComment;
  faAngleUp = faAngleUp;
  nBlogs: any;

  constructor() { }

  ngOnInit(): void {
    AOS.init();
    // this.getAllBlogs();
  }

  // getAllBlogs() {
  //   this.blogservice.getAllBlog().subscribe(
  //     data => {
  //       this.ListBlog = data;
  //       this.nBlogs = this.ListBlog.length;
  //       return this.ListBlog;
  //     }
  //   )
  // }

  // setBlogId(id: any) {
  //   sessionStorage.setItem("IdBlog", id);
  // }

  // likeBlog(id: any) {
  //   this.blogservice.likeBlog(id).subscribe(
  //     data => {
  //       let hidelike = true;
  //       let hidedislike = false;
  //       return data;
  //     }
  //   )
  // }

  // dislikeBlog(id: any) {
  //   this.blogservice.disLikeBlog(id).subscribe(
  //     data => {
  //       let hidelike = false;
  //       let hidedislike = true;
  //       return data;
  //     }
  //   )
  // }

}
