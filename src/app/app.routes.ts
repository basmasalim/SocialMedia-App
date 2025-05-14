import { Routes } from '@angular/router';

export const routes: Routes = [
  // ?====================> Auth Layout<=================
  {
    path: '',
    loadComponent: () =>
      import('./core/layouts/auth-layout/auth-layout.component').then(
        (m) => m.AuthLayoutComponent
      ),
    canActivate: [() => {
      return true
    }],
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      {
        path: 'signin',
        loadComponent: () =>
          import('./auth/components/sign-in/sign-in.component').then(
            (m) => m.SignInComponent
          ),
      },
      {
        path: 'signup',
        loadComponent: () =>
          import('./auth/components/sign-up/sign-up.component').then(
            (m) => m.SignUpComponent
          ),
      },
    ],
  },
  // ?====================> Main Layout<=================
  {
    path: '',
    loadComponent: () =>
      import('./core/layouts/main-layout/main-layout.component').then(
        (m) => m.MainLayoutComponent
      ), children: [
        {
          path: 'timeline',
          loadComponent: () => import('./pages/main/timeline/timeline.component').then(
            (m) => m.TimelineComponent)
        },
      ]
  },
  // ?====================> Wildcard Route<=================
  {
    path: '**',
    loadComponent: () =>
      import('./pages/main/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
  },
];
