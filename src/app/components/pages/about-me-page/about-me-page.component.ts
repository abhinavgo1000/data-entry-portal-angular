import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { AboutMeData } from 'interfaces';
import * as AboutMeActions from 'state/actions/about-me.actions';
import { selectAboutMeData } from 'state/selectors/about-me.selectors';

@Component({
  selector: 'app-about-me-page',
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule
  ],
  templateUrl: './about-me-page.component.html',
  styleUrl: './about-me-page.component.scss'
})
export class AboutMePageComponent implements OnInit {

  public aboutMeData: AboutMeData = { _id: '', message: '', link: '' };

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(AboutMeActions.fetchAboutMeData());
    this.store.select(selectAboutMeData).subscribe((data: AboutMeData) => {
      this.aboutMeData = data;
    });
    console.log('About me: ', this.aboutMeData.message);
  }

}
