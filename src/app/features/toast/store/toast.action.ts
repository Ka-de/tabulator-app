import { Toast } from "@app/features/toast/toast.model";
import { Action } from "@ngrx/store";

export enum ToastActionTypes{
    ADD_TOAST = '[TOAST] Add',
    REMOVE_TOAST = '[TOAST] Remove',
}

export class AddToast implements Action{
    readonly type = ToastActionTypes.ADD_TOAST;
    constructor(public payload: Toast){}
}

export class RemoveToast implements Action{
    readonly type = ToastActionTypes.REMOVE_TOAST;

    constructor(public payload: number){}
}

export type ToastActions = Action | AddToast | RemoveToast;