import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertPopupComponent } from '../../shared/popup/alert-popup/alert-popup.component';



@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    constructor(private ngbModal: NgbModal) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        return next.handle(req).pipe(
            catchError(err => {
                const modalRef = this.ngbModal.open(AlertPopupComponent);
                modalRef.componentInstance.errorMessage = 'There is some issue with server connection, Check server connection.';
                return throwError('Something bad happened; please try again later.');
            })
        );
    }
}
