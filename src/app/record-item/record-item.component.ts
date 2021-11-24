import {Component, Input} from '@angular/core';
import { Record} from "../shared/record.model";
import {DataService} from "../shared/data.service";

@Component({
  selector: 'app-record-item',
  templateUrl: './record-item.component.html',
  styleUrls: ['./record-item.component.scss']
})
export class RecordItemComponent{

  // @ts-ignore
  @Input() record: Record

  constructor(private dataService: DataService) { }

  onRecordUpdate(recordItem: Record) {
    this.dataService.updateRecord(recordItem)
      .subscribe(() => {
        this.dataService.getAllRecords()
      })
  }

}
