import { createReducer, on } from '@ngrx/store';

import { initialAboutMeState } from 'state/about-me.state';
import * as AboutMeActions from 'state/actions/about-me.actions';

export const aboutMeReducer = createReducer(
    initialAboutMeState,

    // Fetch About Me Data
    on(AboutMeActions.fetchAboutMeData, (state) => ({
        ...state,
        loading: true,
        error: null,
    })),
    on(AboutMeActions.fetchAboutMeDataSuccess, (state, { data }) => ({
        ...state,
        aboutMeData: data,
        loading: false,
    })),
    on(AboutMeActions.fetchAboutMeDataFailure, (state, { error }) => ({
        ...state,
        loading: false,
        error,
    }))
);