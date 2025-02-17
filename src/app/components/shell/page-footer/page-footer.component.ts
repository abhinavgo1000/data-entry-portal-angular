import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-page-footer',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
  templateUrl: './page-footer.component.html',
  styleUrl: './page-footer.component.scss'
})
export class PageFooterComponent {

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
