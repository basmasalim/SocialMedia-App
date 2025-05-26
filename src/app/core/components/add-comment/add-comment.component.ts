import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-comment',
  imports: [FormsModule],
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.css',
})
export class AddCommentComponent {
  @Input() commentText: string = '';
  @Output() onSubmitComment = new EventEmitter<any>();

  submitComment() {
    this.onSubmitComment.emit(this.commentText);
  }


}
