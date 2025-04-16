import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as FormDataActions from '../actions/form-data.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { ChartDataReadService } from 'services';

@Injectable()
export class FormDataEffects {
    constructor(
        private actions$: Actions,
        private chartDataReadService: ChartDataReadService) {}

    loadFormData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(FormDataActions.loadFormData),
            mergeMap(() =>
                this.chartDataReadService.fetchChartData().pipe(
                    map((formData) =>
                        FormDataActions.loadFormDataSuccess({ formData })
                    ),
                    catchError((error) =>
                        of(FormDataActions.loadFormDataFailure({ error: error.message }))
                    )
                )
            )
        )
    );
}
