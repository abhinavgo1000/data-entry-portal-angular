import { Component, inject } from '@angular/core';
import { 
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent, 
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

export interface DialogData {
  title: string; 
  message: string; 
  confirmText: string; 
  cancelText: string;
}

@Component({
  selector: 'app-data-alert-dialog',
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButtonModule
  ],
  templateUrl: './data-alert-dialog.component.html',
  styleUrl: './data-alert-dialog.component.scss'
})
export class DataAlertDialogComponent {

  readonly dialogRef = inject(MatDialogRef<DataAlertDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);

  onConfirm(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
