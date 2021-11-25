import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {formatDate} from "@angular/common";
import {DataService} from "../../shared/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-record-dialog',
  templateUrl: './edit-record-dialog.component.html',
  styleUrls: ['./edit-record-dialog.component.scss']
})
export class EditRecordDialogComponent implements OnInit {

  // @ts-ignore
  public recordForm: FormGroup

  constructor(private formBuilder: FormBuilder,
              private dataService: DataService,
              private router: Router,
              private dialogRef: MatDialogRef<EditRecordDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.recordForm = this.formBuilder.group({
      id: [this.data.id],
      date: [formatDate(this.data.date, 'yyyy-MM-dd', 'en-US')],
      target: [this.data.target],
      actual: [this.data.actual],
      variance: [this.data.variance],
    })
  }

  onCancelClick(): void {
    this.dialogRef.close()
  }

  onSubmit() {
    let id = this.recordForm.value.id
    this.dataService.updateRecord(id, this.recordForm.value)
      .subscribe(() => {
        this.dialogRef.close()
        this.dataService.sendNotification(this.recordForm.value);
      },error => {
        console.log("Record update is not available for local data")
        console.log(error)
      })
  }

}
