import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-edit-record-dialog',
  templateUrl: './edit-record-dialog.component.html',
  styleUrls: ['./edit-record-dialog.component.scss']
})
export class EditRecordDialogComponent implements OnInit {

  // @ts-ignore
  public recordForm: FormGroup

  constructor(private formBuilder: FormBuilder,
  private dialogRef: MatDialogRef<EditRecordDialogComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.recordForm = this.formBuilder.group({
      stationId: [this.data.stationId],
      date: [formatDate(this.data.date, 'dd/MM/yyyy', 'en-US')],
      target: [this.data.target],
      actual: [this.data.actual],
      variance: [this.data.variance],
    })
  }

  onCancelClick(): void {
    this.dialogRef.close()
  }

  onSubmit() {
    // Todo: Update data using dataservice
    // Todo: Close dialog
    // Todo: Get data using dataservice
  }


}
