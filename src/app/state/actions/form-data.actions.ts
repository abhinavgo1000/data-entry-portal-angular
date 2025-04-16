import { createAction, props } from '@ngrx/store';

import { ChartFormData } from 'interfaces';

export const loadFormData = createAction('[Form Data] Load Form Data');
export const loadFormDataSuccess = createAction(
    '[Form Data] Load Form Data Success',
    props<{ formData: ChartFormData[] }>()
);
export const loadFormDataFailure = createAction(
    '[Form Data] Load Form Data Failure',
    props<{ error: string }>()
);

export const addFormData = createAction(
    '[Form Data] Add Form Data',
    props<{ formData: ChartFormData }>()
);
export const updateFormData = createAction(
    '[Form Data] Update Form Data',
    props<{ formData: ChartFormData }>()
);
export const deleteFormData = createAction(
    '[Form Data] Delete Form Data',
    props<{ id: string }>()
);
