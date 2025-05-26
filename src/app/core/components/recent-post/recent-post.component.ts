import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recent-post',
  imports: [DatePipe],
  templateUrl: './recent-post.component.html',
  styleUrl: './recent-post.component.css'
})
export class RecentPostComponent {
  @Input() userImg = '';
  @Input() userName = '';
  @Input() postDate = '';
  @Input() postText = '';
  @Input() postImg = '';
  @Input() postImgAlt = '';
}
