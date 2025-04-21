import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FormDataState } from 'state/form-data.state';

export const selectFormDataState = createFeatureSelector<FormDataState>('formData');

export const selectPaginatedFormData = createSelector(
    selectFormDataState,
    (state: FormDataState) => state.formData
);

export const selectAllChartData = createSelector(
    selectFormDataState,
    (state: FormDataState) => state.formData
);

export const selectChartDataById = (id: string) =>
    createSelector(selectFormDataState, (state: FormDataState) =>
        state.formData.find((item) => item._id === id)
    );

export const selectTotalDocuments = createSelector(
  selectFormDataState,
  (state: FormDataState) => state.totalDocuments
);

export const selectLoading = createSelector(
  selectFormDataState,
  (state: FormDataState) => state.loading
);
