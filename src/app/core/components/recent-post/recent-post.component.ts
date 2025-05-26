import { DatePipe } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';
import { CommentItemComponent } from "../comment-item/comment-item.component";
import { AllPosts, Post } from '../../interfaces/posts/all-posts';
import { AddCommentComponent } from "../add-comment/add-comment.component";

@Component({
  selector: 'app-recent-post',
  imports: [DatePipe, CommentItemComponent, AddCommentComponent],
  templateUrl: './recent-post.component.html',
  styleUrl: './recent-post.component.css',
})
export class RecentPostComponent {
  post: InputSignal<Post> = input.required();
  expandedPosts: { [postId: string]: boolean } = {};
  commentText: string = '';


  showMoreComments(postId: string) {
    this.expandedPosts[postId] = true;
  }

  showLessComments(postId: string) {
    this.expandedPosts[postId] = false;
  }

  handleNewComment(postId: string, comment: string) {
    console.log('New comment for post:', postId);
    console.log('Comment content:', comment);
  }

}
