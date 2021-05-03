import { routerReducer, RouterReducerState } from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";
import { errorReducer, ErrorState } from "./error/error.reducer";
import { toastReducer, ToastState } from "../features/toast/store/toast.reducer";
import { RouterStateUrl } from "./router/router.reducer";
import { tableReducer, TableState } from "@app/features/tables/tables-store/tables.reducer";
import { TablesEffects } from "@app/features/tables/tables-store/tables.effects";

export interface AppState {
    error: ErrorState,
    toast: ToastState,
    router: RouterReducerState<RouterStateUrl>,
    tables: TableState,
}

export const reducers: ActionReducerMap<AppState> = {
    error: errorReducer,
    router: routerReducer,
    toast: toastReducer,
    tables: tableReducer
}

export const effects = [
    TablesEffects
]