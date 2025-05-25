import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { inject, PLATFORM_ID } from '@angular/core';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(req.url);

  const platform = inject(PLATFORM_ID);

  if (isPlatformBrowser(platform)) {
    const token = localStorage.getItem('token');
    if (token) {
      req = req.clone({
        setHeaders: {
          token: token,
        },
      });
    }
  }

  return next(req);
};

