import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { MatSidenavModule, MatSidenav } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

import { PageHeaderComponent } from 'components/shell/page-header/page-header.component';
import { PageFooterComponent } from 'components/shell/page-footer/page-footer.component';
import { ScrollTopComponent } from 'components/scroll-top/scroll-top.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    PageHeaderComponent,
    PageFooterComponent,
    ScrollTopComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'data-entry-portal-angular';

  constructor(private router: Router) { }

  navigateToHome(sidenav: MatSidenav) {
    this.router.navigate(['/home']);
    sidenav.close();
  }

  navigateToAboutMe(sidenav: MatSidenav) {
    this.router.navigate(['/about-me']);
    sidenav.close();
  }

  navigateToForm(sidenav: MatSidenav) {
    this.router.navigate(['/form']);
    sidenav.close();
  }

  navigateToBarChart(sidenav: MatSidenav) {
    this.router.navigate(['/bar-chart']);
    sidenav.close();
  }

  navigateToLineChart(sidenav: MatSidenav) {
    this.router.navigate(['/line-chart']);
    sidenav.close();
  }

  navigateToPieChart(sidenav: MatSidenav) {
    this.router.navigate(['/pie-chart']);
    sidenav.close();
  }
}
