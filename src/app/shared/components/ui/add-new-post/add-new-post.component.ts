import { Component, EventEmitter, Input, Output, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-new-post',
  imports: [FormsModule],
  templateUrl: './add-new-post.component.html',
  styleUrl: './add-new-post.component.css'
})
export class AddNewPostComponent {
  @Output() onSubmitPost = new EventEmitter<{ content: string; file: File | null }>();

  postContent: string = '';
  postFile: File | null = null;

  onFileSelect(event: any): void {
    this.postFile = event.target.files[0];
  }

  submitPost(): void {
    this.onSubmitPost.emit({
      content: this.postContent,
      file: this.postFile,
    });
  }

}
