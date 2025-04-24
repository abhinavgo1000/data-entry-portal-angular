import { createAction, props } from '@ngrx/store';

import { AboutMeData } from 'interfaces';

// Fetch About Me Data
export const fetchAboutMeData = createAction('[Form Data] Fetch About Me Data');

export const fetchAboutMeDataSuccess = createAction(
    '[Form Data] Fetch About Me Data Success',
    props<{ data: AboutMeData }>()
);

export const fetchAboutMeDataFailure = createAction(
    '[Form Data] Fetch About Me Data Failure',
    props<{ error: string }>()
);
