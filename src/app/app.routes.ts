import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: 
            () => import('./components/home-page/home-page.component').then(m => m.HomePageComponent)
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'about-us',
        loadComponent: 
            () => import('./components/about-us-page/about-us-page.component').then(m => m.AboutUsPageComponent)
    },
    {
        path: 'data-entry',
        loadComponent: 
            () => import('./components/form-page/form-page.component').then(m => m.FormPageComponent)
    },
    {
        path: 'data-chart',
        loadComponent: 
            () => import('./components/data-chart-page/data-chart-page.component').then(m => m.DataChartPageComponent)
    },
    {
        path: 'success',
        loadComponent: 
            () => import('./components/confirmation-page/confirmation-page.component').then(m => m.ConfirmationPageComponent)
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];
