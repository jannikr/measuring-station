import {Component, OnInit} from '@angular/core';
import {Record} from "../shared/record.model";
import {DataService} from "../shared/data.service";

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
})
export class RecordsComponent implements OnInit {

  // @ts-ignore
  records: Observable<Record[]> | Record[]

  // inject DataService
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    return this.dataService.getAllRecords()
      .subscribe(data => this.records = data);
  }

}
