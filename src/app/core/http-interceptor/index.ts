import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './http-error.interceptor';

export const httpInterceptorProvider = [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
];
