import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment-item',
  imports: [DatePipe],
  templateUrl: './comment-item.component.html',
  styleUrl: './comment-item.component.css'
})
export class CommentItemComponent {
  @Input() commentUserName = '';
  @Input() commentText = '';
  @Input() commentUserDate = '';
  @Input() commentUserNameF = '';
  @Input() commentTextF = '';
  @Input() commentUserDateF = '';
}
