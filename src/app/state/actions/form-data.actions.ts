import { createAction, props } from '@ngrx/store';

import { ChartFormData } from 'interfaces';


// Load Paginated Form Data
export const loadPaginatedFormData = createAction(
    '[Form Data] Load Paginated Form Data',
    props<{ page: number; pageSize: number }>()
);

export const loadPaginatedFormDataSuccess = createAction(
    '[Form Data] Load Paginated Form Data Success',
    props<{ data: ChartFormData[]; totalDocuments: number }>()
);

export const loadPaginatedFormDataFailure = createAction(
    '[Form Data] Load Paginated Form Data Failure',
    props<{ error: string }>()
);

// Fetch Chart Data by ID
export const fetchChartDataById = createAction(
    '[Form Data] Fetch Chart Data By ID',
    props<{ id: string }>()
);

export const fetchChartDataByIdSuccess = createAction(
    '[Form Data] Fetch Chart Data By ID Success',
    props<{ data: ChartFormData }>()
);

export const fetchChartDataByIdFailure = createAction(
    '[Form Data] Fetch Chart Data By ID Failure',
    props<{ error: string }>()
);
  
// Fetch All Chart Data
  export const fetchAllChartData = createAction('[Form Data] Fetch All Chart Data');

export const fetchAllChartDataSuccess = createAction(
    '[Form Data] Fetch All Chart Data Success',
    props<{ data: ChartFormData[] }>()
);

export const fetchAllChartDataFailure = createAction(
    '[Form Data] Fetch All Chart Data Failure',
    props<{ error: string }>()
);

// Add Form Data
export const addFormData = createAction(
    '[Form Data] Add Form Data',
    props<{ formData: ChartFormData }>()
);

export const addFormDataSuccess = createAction(
    '[Form Data] Add Form Data Success',
    props<{ formData: ChartFormData }>()
);

export const addFormDataFailure = createAction(
    '[Form Data] Add Form Data Failure',
    props<{ error: string }>()
);

// Update Form Data
export const updateFormData = createAction(
    '[Form Data] Update Form Data',
    props<{ formData: ChartFormData }>()
);

export const updateFormDataSuccess = createAction(
    '[Form Data] Update Form Data Success',
    props<{ formData: ChartFormData }>()
);

export const updateFormDataFailure = createAction(
    '[Form Data] Update Form Data Failure',
    props<{ error: string }>()
);

// Delete Form Data
export const deleteFormData = createAction(
    '[Form Data] Delete Form Data',
    props<{ id: string }>()
);

export const deleteFormDataSuccess = createAction(
    '[Form Data] Delete Form Data Success',
    props<{ id: string }>()
);

export const deleteFormDataFailure = createAction(
    '[Form Data] Delete Form Data Failure',
    props<{ error: string }>()
);
