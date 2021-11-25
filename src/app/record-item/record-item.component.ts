import {Component, Input} from '@angular/core';
import { Record} from "../shared/record.model";
import {DataService} from "../shared/data.service";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import {EditRecordDialogComponent} from "../dialog/edit-record-dialog/edit-record-dialog.component";

@Component({
  selector: 'app-record-item',
  templateUrl: './record-item.component.html',
  styleUrls: ['./record-item.component.scss']
})
export class RecordItemComponent{

  // @ts-ignore
  @Input() record: Record

  constructor(private dataService: DataService,
              private dialog: MatDialog) { }

  onEdit(record: Record) {
    const dialogConfig = new MatDialogConfig()

    dialogConfig.data = record
    this.dialog.open(EditRecordDialogComponent, dialogConfig)
  }

}
