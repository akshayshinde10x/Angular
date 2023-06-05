import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChildFn, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard {
    constructor(private auth: AuthService, private router: Router){}
    
    canActivate(route:ActivatedRouteSnapshot, state: RouterStateSnapshot){
        
        return this.auth.isAuthenticated()
            .then(
                (authenticated: boolean)=>{
                    console.log(authenticated);
                    if(authenticated){
                        return true;
                    } else {
                       return false;
                    }
                }
            )
    }

    canActivateChild(route:ActivatedRouteSnapshot, state:RouterStateSnapshot ){
        return this.canActivate(route, state)
    }
}