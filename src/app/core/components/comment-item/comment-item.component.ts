import { DatePipe } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';
import { Comment } from '../../interfaces/posts/all-posts';

@Component({
  selector: 'app-comment-item',
  imports: [DatePipe],
  templateUrl: './comment-item.component.html',
  styleUrl: './comment-item.component.css'
})
export class CommentItemComponent {
  comment: InputSignal<Comment> = input.required({});
}
