import { Component, inject, OnInit } from '@angular/core';
import { PostsService } from '../../../core/services/posts/posts.service';
import { AllPostsResponse } from './../../../core/interfaces/posts/all-posts';
import { LoaderSectionSkeletonComponent } from "../../../core/components/loader-section-skeleton/loader-section-skeleton.component";
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { RecentPostComponent } from "../../../core/components/recent-post/recent-post.component";

@Component({
  selector: 'app-timeline',
  imports: [LoaderSectionSkeletonComponent, InfiniteScrollDirective, RecentPostComponent],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css',
})
export class TimelineComponent implements OnInit {
  private readonly postsService = inject(PostsService);

  allPosts!: AllPostsResponse;
  counter: number = 1;
  isLoading: boolean = false;

  ngOnInit(): void {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postsService.getAllPosts().subscribe({
      next: (res) => {
        console.log(res);
        this.allPosts = res;
      },
    });
  }

  onScroll() {
    this.isLoading = true;
    this.counter++;
    this.postsService.getAllPosts(this.counter).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.allPosts.posts.push(...res.posts);
      },
    });
  }
}


// basma1111@gmail.com
// Beso!123
