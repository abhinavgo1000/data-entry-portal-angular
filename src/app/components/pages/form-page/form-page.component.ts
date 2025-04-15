import { Component } from '@angular/core';

import { DataEntryFormComponent } from 'components/common/data-entry-form/data-entry-form.component';

@Component({
  selector: 'app-form-page',
  imports: [
    DataEntryFormComponent
  ],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.scss'
})
export class FormPageComponent {

}
