import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/do';
@Injectable()
export class TimimingInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authHeader = this.auth.getAuthorizationHeader();
        const authReq = req.clone({ headers: req.headers.set('Authorization', authHeader) });
        const startTime = Date.now();
        return next.handle(authReq).do(event => {
            if (event instanceof HttpResponse) {
                const elapsed = Date.now() - startTime;
                console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`);
            }
        });
    }
}
