import { Component } from '@angular/core';

import { DataCardListComponent } from 'components/common/data-card-list/data-card-list.component';

@Component({
  selector: 'app-home-page',
  imports: [
    DataCardListComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
