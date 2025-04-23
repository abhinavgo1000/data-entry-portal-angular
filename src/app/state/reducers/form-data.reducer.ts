import { createReducer, on } from '@ngrx/store';

import { initialFormDataState } from 'state/form-data.state';
import * as FormDataActions from 'state/actions/form-data.actions';

export const formDataReducer = createReducer(
    initialFormDataState,
    on(FormDataActions.loadPaginatedFormData, (state) => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(FormDataActions.loadPaginatedFormDataSuccess, (state, { data, totalDocuments }) => ({
        ...state,
        formData: data,
        totalDocuments,
        loading: false,
    })),
    on(FormDataActions.loadPaginatedFormDataFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
    })),

    // Fetch Chart Data by ID
    on(FormDataActions.fetchChartDataById, (state) => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(FormDataActions.fetchChartDataByIdSuccess, (state, { data }) => ({
        ...state,
        formData: [data], // Replace with the fetched data
        loading: false,
    })),
    on(FormDataActions.fetchChartDataByIdFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
    })),

    // Fetch All Chart Data
    on(FormDataActions.fetchAllChartData, (state) => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(FormDataActions.fetchAllChartDataSuccess, (state, { data }) => ({
        ...state,
        formData: data, // Replace with all fetched data
        loading: false,
    })),
    on(FormDataActions.fetchAllChartDataFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
    })),

    // Add Form Data
    on(FormDataActions.addFormDataSuccess, (state, { formData }) => ({
        ...state,
        formData: [...state.formData, formData],
    })),

  // Update Form Data
    on(FormDataActions.updateFormDataSuccess, (state, { formData }) => ({
        ...state,
        formData: state.formData.map((item) =>
            item._id === formData._id ? formData : item
        ),
    })),

  // Delete Form Data
    on(FormDataActions.deleteFormDataSuccess, (state, { id }) => ({
        ...state,
        formData: state.formData.filter((item) => item._id !== id),
    }))
);