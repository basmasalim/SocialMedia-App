import { CanActivateFn } from '@angular/router';

export const logUserGuard: CanActivateFn = (route, state) => {
  return true;
};
