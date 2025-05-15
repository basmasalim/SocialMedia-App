import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { logUserGuard } from './core/guards/log-user.guard';

export const routes: Routes = [
  // ?====================> Auth Layout<=================
  {
    path: '',
    loadComponent: () =>
      import('./core/layouts/auth-layout/auth-layout.component').then(
        (c) => c.AuthLayoutComponent // c = component
      ),
    canActivate: [logUserGuard],
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      {
        path: 'signin',
        loadComponent: () =>
          import('./auth/components/sign-in/sign-in.component').then(
            (c) => c.SignInComponent
          ),
      },
      {
        path: 'signup',
        loadComponent: () =>
          import('./auth/components/sign-up/sign-up.component').then(
            (c) => c.SignUpComponent
          ),
      },
    ],
  },
  // ?====================> Main Layout<=================
  {
    path: '',
    loadComponent: () =>
      import('./core/layouts/main-layout/main-layout.component').then(
        (c) => c.MainLayoutComponent
      ),
    canActivate: [authGuard],
    children: [
      {
        path: 'timeline',
        loadComponent: () =>
          import('./pages/main/timeline/timeline.component').then(
            (c) => c.TimelineComponent
          ),
      },
    ],
  },
  // ?====================> Wildcard Route<=================
  {
    path: '**',
    loadComponent: () =>
      import('./pages/main/not-found/not-found.component').then(
        (c) => c.NotFoundComponent
      ),
  },
];
