import {Component, OnInit} from '@angular/core';
import { Record} from "../shared/record.model";
import {DataService} from "../shared/data.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
  providers: [DatePipe]
})
export class RecordsComponent implements OnInit{

  records: Record[] | undefined

  // inject DataService
  constructor(private datePipe: DatePipe, private dataService: DataService) { }

  ngOnInit(): void {
    this.records = this.dataService.getAllRecords()

  }

}
