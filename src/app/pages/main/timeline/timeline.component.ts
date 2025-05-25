import { Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../../../core/services/posts/posts.service';
import { AllPostsResponse } from './../../../core/interfaces/posts/all-posts';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-timeline',
  imports: [DatePipe],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent implements OnInit {
  private readonly postsService = inject(PostsService);

  allPosts!: AllPostsResponse;

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postsService.getAllPosts().subscribe({
      next: (res) => {
        console.log(res);
        this.allPosts = res;
      },
    })
  }
}


// basma1111@gmail.com
// Beso!123
