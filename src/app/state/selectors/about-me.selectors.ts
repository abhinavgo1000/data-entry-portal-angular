import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AboutMeState } from 'state/about-me.state';

export const selectAboutMeState = createFeatureSelector<AboutMeState>('aboutMe');

export const selectAboutMeData = createSelector(
    selectAboutMeState,
    (state: AboutMeState) => state.aboutMeData
);

export const selectLoading = createSelector(
    selectAboutMeState,
    (state: AboutMeState) => state.loading
);

export const selectError = createSelector(
    selectAboutMeState,
    (state: AboutMeState) => state.error
);
