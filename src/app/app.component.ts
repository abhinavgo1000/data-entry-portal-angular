import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        MatCardModule,
        PageHeaderComponent,
        PageFooterComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'data-entry-portal-angular';
}
