import { Router } from '@angular/router';
import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = localStorage.getItem('login') === 'true';
  const role = localStorage.getItem('role');
  const router = new Router();

  if (isLoggedIn) {
    if (route.data?.['role'] && route.data['role'] !== role) {
      router.navigate(['/access-denied']); // O redirige donde necesites
      return false;
    }
    return true;
  }

  return false; // No está autenticado
};

