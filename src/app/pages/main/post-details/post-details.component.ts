import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../../core/services/posts/posts.service';
import { SinglePost } from '../../../core/interfaces/posts/single-post';
import { RecentPostComponent } from "../../../shared/components/ui/recent-post/recent-post.component";
import { DatePipe } from '@angular/common';
import { LoaderSectionSkeletonComponent } from "../../../core/components/loader-section-skeleton/loader-section-skeleton.component";

@Component({
  selector: 'app-post-details',
  imports: [DatePipe, LoaderSectionSkeletonComponent],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.css'
})
export class PostDetailsComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private postsService = inject(PostsService);

  currentPost!: SinglePost

  ngOnInit(): void {
    this.getCurrentId();
  }

  getCurrentId(): void {
    this.route.paramMap.subscribe({
      next: params => {
        // const id = params.get('id');
        this.getCurrentPost(params.get('id')!)
      }
    });
  }

  getCurrentPost(id: string): void {
    this.postsService.getSinglePost(id).subscribe({
      next: res => {
        this.currentPost = res
        console.log(res);

      }
    })
  }
}
