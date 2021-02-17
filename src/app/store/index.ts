import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";
import { errorReducer, ErrorState } from "./error/error.reducer";
import { toastReducer, ToastState } from "../features/toast/store/toast.reducer";
import { RouterStateUrl } from "./router/router.reducer";

export interface AppState {
    error: ErrorState,
    toast: ToastState,
    router: RouterReducerState<RouterStateUrl>,
}

export const reducers: ActionReducerMap<AppState> = {
    error: errorReducer,
    router: routerReducer,
    toast: toastReducer
}

export const effects = [

]