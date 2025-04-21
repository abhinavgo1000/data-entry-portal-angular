import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as FormDataActions from '../actions/form-data.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { 
    ChartDataReadService, 
    FormDataEntryService, 
    ChartDataEditService,
    ChartDataDeleteService
 } from 'services';

@Injectable({
    providedIn: 'root', // Ensure the service is provided in the root injector
})
export class FormDataEffects {

    actions$ = inject(Actions);

    constructor(
        private chartDataReadService: ChartDataReadService,
        private formDataEntryService: FormDataEntryService,
        private chartDataEditService: ChartDataEditService,
        private chartDataDeleteService: ChartDataDeleteService
    ) { }

    loadPaginatedFormData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(FormDataActions.loadPaginatedFormData),
            mergeMap(({ page, pageSize }) => {
                return this.chartDataReadService.fetchChartData(page, pageSize).pipe(
                    map((response) => {
                        return FormDataActions.loadPaginatedFormDataSuccess({
                            data: response.data,
                            totalDocuments: response.totalDocuments,
                        })
                    }),
                    catchError((error) =>
                        of(FormDataActions.loadPaginatedFormDataFailure({ error: error.message }))
                    )
                )
            })
        )
    );

    // Effect for fetching chart data by ID
    fetchChartDataById$ = createEffect(() =>
        this.actions$.pipe(
            ofType(FormDataActions.fetchChartDataById),
            mergeMap(({ id }) =>
                this.chartDataReadService.fetchChartDataById(id).pipe(
                    map((data) => FormDataActions.fetchChartDataByIdSuccess({ data })),
                    catchError((error) =>
                        of(FormDataActions.fetchChartDataByIdFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    // Effect for fetching all chart data
    fetchAllChartData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(FormDataActions.fetchAllChartData),
            mergeMap(() =>
                this.chartDataReadService.fetchAllChartData().pipe(
                    map((data) => FormDataActions.fetchAllChartDataSuccess({ data })),
                    catchError((error) =>
                        of(FormDataActions.fetchAllChartDataFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    // Add Form Data
    addFormData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(FormDataActions.addFormData),
            mergeMap(({ formData }) =>
                this.formDataEntryService.submitFormData(formData).pipe(
                    map((newFormData) =>
                        FormDataActions.addFormDataSuccess({ formData: newFormData })
                    ),
                    catchError((error) =>
                        of(FormDataActions.addFormDataFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    // Update Form Data
    updateFormData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(FormDataActions.updateFormData),
            mergeMap(({ formData }) =>
                this.chartDataEditService.updateChartData(formData).pipe(
                    map((updatedFormData) =>
                        FormDataActions.updateFormDataSuccess({ formData: updatedFormData })
                    ),
                    catchError((error) =>
                        of(FormDataActions.updateFormDataFailure({ error: error.message }))
                    )
                )
            )
        )
    );

    // Delete Form Data
    deleteFormData$ = createEffect(() =>
        this.actions$.pipe(
            ofType(FormDataActions.deleteFormData),
            mergeMap(({ id }) =>
                this.chartDataDeleteService.deleteChartData(id).pipe(
                    map(() => FormDataActions.deleteFormDataSuccess({ id })),
                    catchError((error) =>
                        of(FormDataActions.deleteFormDataFailure({ error: error.message }))
                    )
                )
            )
        )
    );
}
