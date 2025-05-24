import { Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../../../core/services/posts/posts.service';

@Component({
  selector: 'app-timeline',
  imports: [],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent implements OnInit {
  private readonly postsService = inject(PostsService);

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postsService.getAllPosts().subscribe({
      next: (posts) => {
        console.log(posts)
      },
    })
  }
}


// basma1111@gmail.com
// Beso!123
