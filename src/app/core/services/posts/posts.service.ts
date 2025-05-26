import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { PostsEndpoint } from '../../enum/postsEndpoint.enum';
import { CreatePosts } from '../../interfaces/posts/create-posts';
import { AllPosts } from '../../interfaces/posts/all-posts';
import { UserPosts } from '../../interfaces/posts/user-posts';
import { SinglePost } from '../../interfaces/posts/single-post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly httpClient = inject(HttpClient);
  private readonly baseUrl: string = environment.baseUrl;

  // Create Posts
  createPost(postData: FormData): Observable<CreatePosts> {
    return this.httpClient.post<CreatePosts>(
      this.baseUrl + PostsEndpoint.POST_CREATE,
      postData
    );
  }

  getAllPosts(page: number = 1): Observable<AllPosts> {
    return this.httpClient.get<AllPosts>(
      this.baseUrl + PostsEndpoint.GET_ALL_POSTS + `?page=${page}&limit=5`
    );
  }

  getUserPosts(postId: string): Observable<UserPosts> {
    return this.httpClient.get<UserPosts>(
      this.baseUrl + PostsEndpoint.GET_USER_POSTS + postId + `/posts`
    );
  }

  getSinglePost(postId: string): Observable<SinglePost> {
    return this.httpClient.get<SinglePost>(
      this.baseUrl + PostsEndpoint.Get_Single_Post + postId
    );
  }

  updatePost() { }
  deletePost() { }
}
