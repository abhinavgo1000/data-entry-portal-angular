import { createReducer, on } from '@ngrx/store';

import { initialFormDataState } from 'state/form-data.state';
import * as FormDataActions from 'state/actions/form-data.actions';

export const formDataReducer = createReducer(
    initialFormDataState,
    on(FormDataActions.loadFormData, (state) => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(FormDataActions.loadFormDataSuccess, (state, { formData }) => ({
        ...state,
        formData,
        loading: false,
    })),
    on(FormDataActions.loadFormDataFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
    })),
    on(FormDataActions.addFormData, (state, { formData }) => ({
        ...state,
        formData: [...state.formData, formData],
    })),
    on(FormDataActions.updateFormData, (state, { formData }) => ({
        ...state,
        formData: state.formData.map((item) =>
        item._id === formData._id ? formData : item
        ),
    })),
    on(FormDataActions.deleteFormData, (state, { id }) => ({
        ...state,
        formData: state.formData.filter((item) => item._id !== id),
    }))
);