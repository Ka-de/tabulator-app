import { Toast } from '@app/features/toast/toast.model';
import { AddToast, ToastActions, ToastActionTypes, RemoveToast } from '@app/features/toast/store/toast.action'

export interface ToastState {
    toasts: Toast[];
}

const initialState: ToastState = {
    toasts: []
}

export function toastReducer(state = initialState, action: ToastActions): ToastState {
    switch (action.type) {
        case ToastActionTypes.ADD_TOAST:
            return { ...state, toasts: [...state.toasts, (action as AddToast).payload] }
        case ToastActionTypes.REMOVE_TOAST:
            return { ...state, toasts: state.toasts.filter((s, i) => i !== (action as RemoveToast).payload) }
        default:
            return state;
    }
}