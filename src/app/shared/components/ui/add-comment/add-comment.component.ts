import { Component, EventEmitter, Input, OnInit, Output, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-comment',
  imports: [FormsModule],
  templateUrl: './add-comment.component.html',
  styleUrl: './add-comment.component.css',
})
export class AddCommentComponent implements OnInit {
  @Output() onSubmitComment = new EventEmitter<void>();
  @Input() comment!: WritableSignal<string>;

  commentTextValue: string = '';

  ngOnInit() {
    this.commentTextValue = this.comment();
  }

  submitComment() {
    this.comment.set(this.commentTextValue);
    this.commentTextValue = '';
    this.onSubmitComment.emit();
  }
}
