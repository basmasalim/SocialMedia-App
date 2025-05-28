import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { CommentEndpoint } from '../../enum/commentEndpoint';
import { Observable } from 'rxjs';
import { CreateComments } from '../../interfaces/comments/create-comments';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private readonly httpClient = inject(HttpClient);
  private readonly baseUrl: string = environment.baseUrl;
  constructor() { }

  createComment(comment: {}): Observable<CreateComments> {
    return this.httpClient.post<CreateComments>(this.baseUrl + CommentEndpoint.CREATE_COMMENT, comment);
  }
}
