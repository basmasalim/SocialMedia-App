import { DatePipe } from '@angular/common';
import { Component, input, InputSignal, signal } from '@angular/core';
import { Post } from '../../../../core/interfaces/posts/all-posts';
import { CommentItemComponent } from '../comment-item/comment-item.component';
import { AddCommentComponent } from '../add-comment/add-comment.component';

@Component({
  selector: 'app-recent-post',
  imports: [DatePipe, CommentItemComponent, AddCommentComponent],
  templateUrl: './recent-post.component.html',
  styleUrl: './recent-post.component.css',
})
export class RecentPostComponent {
  post: InputSignal<Post> = input.required();
  comment = signal<string>('');

  expandedPosts: { [postId: string]: boolean } = {};

  showMoreComments(postId: string) {
    this.expandedPosts[postId] = true;
  }

  showLessComments(postId: string) {
    this.expandedPosts[postId] = false;
  }

  handleNewComment(postId: string) {
    console.log('New comment for post:', postId);
    console.log('Comment content:', this.comment());
  }

}
