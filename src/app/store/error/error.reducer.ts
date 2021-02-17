import { AddError, ErrorActions, ErrorActionTypes } from '@app/store/error/error.action'

export interface ErrorState {
    errors: any;
}

const initialState: ErrorState = {
    errors: null
}

export function errorReducer(state = initialState, action: ErrorActions): ErrorState {
    switch (action.type) {
        case ErrorActionTypes.ADD_ERROR:
            return { ...state, errors: (action as AddError).payload }
        case ErrorActionTypes.REMOVE_ERROR:
            return { ...state, errors: null }
        default:
            return state;
    }
}