import { Params, RouterStateSnapshot } from "@angular/router";
import * as fromRouter from "@ngrx/router-store";

export interface RouterStateUrl {
    url: string;
    queryParams: Params;
    params: Params;
}

export class CustomSerializer implements fromRouter.RouterStateSerializer<RouterStateUrl>{
    serialize(routerState: RouterStateSnapshot): RouterStateUrl {
        let { url, root: state } = routerState;
        let { queryParams } = state;


        while (state.firstChild) {
            state = state.firstChild
        };

        let { params } = state;
        return { url, queryParams, params } as RouterStateUrl;
    }
}