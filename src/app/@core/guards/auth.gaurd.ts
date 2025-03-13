import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NbAuthService } from '@nebular/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {ToastService} from '../utils/toast.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: NbAuthService, private router: Router, private toastService: ToastService) {}

  canActivate(): Observable<boolean> {
    return this.authService.isAuthenticated().pipe(
      map((authenticated: boolean) => {
        if (!authenticated) {
          this.router.navigate(['/auth/login']).then(r => this.toastService.showToast('warning', 'User not found', 'You need login to access this page'));
          return false;
        }
        return true;
      }),
    );
  }
}
