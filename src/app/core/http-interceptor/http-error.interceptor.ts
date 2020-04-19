import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AlertPopupComponent } from '../../shared/popup/alert-popup/alert-popup.component';
import { ToastrService } from 'ngx-toastr';



@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

    httpErrMsg: string;

    constructor(
        private ngbModal: NgbModal,
        private toastr: ToastrService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        return next.handle(req)
            .pipe(
                retry(1),
                catchError(err => {
                    if (err.error instanceof ErrorEvent) {
                        // client-side error
                        this.httpErrMsg = `Error: ${err.error.message}`;
                    } else {
                        // server-side error
                        this.httpErrMsg = `There is some issue with server connection, Check server connection.`;
                    }

                    /** Either use boostrap model or Toast message */

                    // const modalRef = this.ngbModal.open(AlertPopupComponent);
                    // modalRef.componentInstance.errorMessage = this.httpErrMsg;


                    this.toastr.error(this.httpErrMsg); // show toast error message

                    return throwError(err);
                })
            );
    }
}
