import { Routes } from '@angular/router';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';

export const routes: Routes = [
    {
        path: 'home',
        title: 'Home',
        loadComponent: () => import('./components/pages/home-page/home-page.component')
            .then(m => m.HomePageComponent)
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'about-me',
        title: 'About Me',
        loadComponent: () => import('./components/pages/about-me-page/about-me-page.component')
            .then(m => m.AboutMePageComponent)
    },
    {
        path: 'form',
        title: 'Data Entry Form',
        loadComponent: () => import('./components/pages/form-page/form-page.component')
            .then(m => m.FormPageComponent)
    },
    {
        path: 'bar-chart',
        title: 'Bar Chart',
        loadComponent: () => import('./components/pages/bar-chart-page/bar-chart-page.component')
            .then(m => m.BarChartPageComponent)
    },
    {
        path: 'line-chart',
        title: 'Line Chart',
        loadComponent: () => import('./components/pages/line-chart-page/line-chart-page.component')
            .then(m => m.LineChartPageComponent)
    },
    {
        path: 'pie-chart',
        title: 'Pie Chart',
        loadComponent: () => import('./components/pages/pie-chart-page/pie-chart-page.component')
            .then(m => m.PieChartPageComponent)
    },
    {
        path: '**',
        component: NotFoundPageComponent
    }
];
