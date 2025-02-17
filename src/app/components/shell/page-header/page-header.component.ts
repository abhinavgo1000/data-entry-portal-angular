import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-page-header',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule
  ],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {

  constructor(private router: Router) { }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToBarChart() {
    this.router.navigate(['/bar-chart']);
  }

  navigateToLineChart() {
    this.router.navigate(['/line-chart']);
  }

  navigateToPieChart() {
    this.router.navigate(['/pie-chart']);
  }
}
