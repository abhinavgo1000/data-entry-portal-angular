import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PageHeaderComponent } from './components/shell/page-header/page-header.component';
import { PageFooterComponent } from './components/shell/page-footer/page-footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    PageHeaderComponent,
    PageFooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'data-entry-portal-angular';
}
