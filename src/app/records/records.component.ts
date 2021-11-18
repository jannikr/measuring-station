import {Component, OnInit} from '@angular/core';
import { Record} from "../shared/record.model";
import {DataService} from "../shared/data.service";

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.scss'],
})
export class RecordsComponent implements OnInit{

  // @ts-ignore
  records: Record[]

  // inject DataService
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.records = this.dataService.getAllRecords()

  }

}
