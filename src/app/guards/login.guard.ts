import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = localStorage.getItem('login') === 'true';
  const role = localStorage.getItem('role');

  if (isLoggedIn) {
    // Si la ruta requiere un rol específico
    if (route.data?.['role'] && route.data['role'] !== role) {
      return false;
    }
    return true;
  }
  return false;
};
