import { DatePipe } from '@angular/common';
import { Component, inject, input, InputSignal, signal } from '@angular/core';
import { Comment, Post } from '../../../../core/interfaces/posts/all-posts';
import { CommentItemComponent } from '../comment-item/comment-item.component';
import { AddCommentComponent } from '../add-comment/add-comment.component';
import { CommentsService } from '../../../../core/services/comments/comments.service';

@Component({
  selector: 'app-recent-post',
  imports: [DatePipe, CommentItemComponent, AddCommentComponent],
  templateUrl: './recent-post.component.html',
  styleUrl: './recent-post.component.css',
})
export class RecentPostComponent {
  private readonly commentsService = inject(CommentsService)
  post: InputSignal<Post> = input.required();
  comment = signal<string>('');

  isCommentLoading = signal(false);

  expandedPosts: { [postId: string]: boolean } = {};

  showMoreComments(postId: string) {
    this.expandedPosts[postId] = true;
  }

  showLessComments(postId: string) {
    this.expandedPosts[postId] = false;
  }

  handleNewComment(postId: string, post: Post): void {
    this.isCommentLoading.set(true);
    this.commentsService.createComment({
      content: this.comment(),
      post: postId
    }).subscribe({
      next: (res) => {
        console.log(res);
        post.comments = res.comments as Comment[]
        this.isCommentLoading.set(false);
      }
    })
  }
}
