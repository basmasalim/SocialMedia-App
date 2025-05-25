import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { PostsEndpoint } from '../../enum/postsEndpoint.enum';
import { CreatePostsResponse } from '../../interfaces/posts/create-posts';
import { UserPostsResponse } from '../../interfaces/posts/user-posts';
import { SinglePostResponse } from '../../interfaces/posts/single-post';
import { AllPostsResponse } from '../../interfaces/posts/all-posts';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private readonly httpClient = inject(HttpClient);
  private readonly baseUrl: string = environment.baseUrl;

  // Create Posts
  createPost(postData: FormData): Observable<CreatePostsResponse> {
    return this.httpClient.post<CreatePostsResponse>(
      this.baseUrl + PostsEndpoint.POST_CREATE,
      postData
    );
  }

  getAllPosts(page: number = 1): Observable<AllPostsResponse> {
    return this.httpClient.get<AllPostsResponse>(
      this.baseUrl + PostsEndpoint.GET_ALL_POSTS + `?page=${page}&limit=5`
    );
  }

  getUserPosts(postId: string): Observable<UserPostsResponse> {
    return this.httpClient.get<UserPostsResponse>(
      this.baseUrl + PostsEndpoint.GET_USER_POSTS + postId + `/posts`
    );
  }

  getSinglePost(postId: string): Observable<SinglePostResponse> {
    return this.httpClient.get<SinglePostResponse>(
      this.baseUrl + PostsEndpoint.Get_Single_Post + postId
    );
  }

  updatePost() { }
  deletePost() { }
}
