import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormDataState } from 'state/form-data.state';

// Feature selector for the form data state
export const selectFormDataState = createFeatureSelector<FormDataState>('formData');

// Selector to get the list of form data
export const selectFormData = createSelector(
    selectFormDataState,
    (state: FormDataState) => state.formData
);

// Selector to get the loading state
export const selectLoading = createSelector(
    selectFormDataState,
    (state: FormDataState) => state.loading
);

// Selector to get the error state
export const selectError = createSelector(
    selectFormDataState,
    (state: FormDataState) => state.error
);
