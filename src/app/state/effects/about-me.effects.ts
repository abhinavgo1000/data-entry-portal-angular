import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AboutMeActions from '../actions/about-me.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { FetchAboutMeService } from 'services';

@Injectable({
    providedIn: 'root', // Ensure the service is provided in the root injector
})
export class AboutMeEffects {
    actions$ = inject(Actions);

    constructor(
        private fetchAboutMeService: FetchAboutMeService
    ) { }

    // Effect for fetching about me data
    fetchAboutMeData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(AboutMeActions.fetchAboutMeData),
            mergeMap(() =>
                this.fetchAboutMeService.fetchAboutMeData().pipe(
                    map((data) => AboutMeActions.fetchAboutMeDataSuccess({ data })),
                    catchError((error) =>
                        of(AboutMeActions.fetchAboutMeDataFailure({ error: error.message }))
                    )
                )
            )
        )
    );
}