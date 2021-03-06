import {Component, Input, OnInit} from '@angular/core';
import { Record} from "../shared/record.model";
import {DataService} from "../shared/data.service";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import {EditRecordDialogComponent} from "../dialog/edit-record-dialog/edit-record-dialog.component";
import {formatDate} from "@angular/common";

@Component({
  selector: 'app-record-item',
  templateUrl: './record-item.component.html',
  styleUrls: ['./record-item.component.scss']
})
export class RecordItemComponent implements OnInit{

  // @ts-ignore
  @Input() record: Record
  public variance: String | undefined
  public isNew: boolean = false

  constructor(private dataService: DataService,
              private dialog: MatDialog) { }

  onEdit(record: Record) {
    const dialogConfig = new MatDialogConfig()

    dialogConfig.data = record
    this.dialog.open(EditRecordDialogComponent, dialogConfig)
  }

  ngOnInit(): void {
    //DRY Pattern
    this.variance = this.dataService.showDeviation(this.record.actual, this.record.target)

    this.isTheSameDate()
  }

  isTheSameDate() {
    let newDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');
    this.isNew = newDate == this.record.date.toString();
  }

}
