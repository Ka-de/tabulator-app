import { Toast } from "@app/features/toast/toast.model";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ToastState } from "./toast.reducer";

export const selectToastState = createFeatureSelector<ToastState>('toast');

export const selectLastToasts = createSelector(
    selectToastState,
    (toastState: ToastState) => {
        const { toasts }: { toasts: Toast[] } = toastState;
        const lastToasts = Object.values(toasts).slice(0, 5);
        return lastToasts;
    }
);