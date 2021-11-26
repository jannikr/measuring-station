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
  records: Observable<Record[]>
  interval = 5

  // inject DataService
  constructor(private dataService: DataService) {
  }



  ngOnInit() {
    this.refreshData();
    this.interval = setInterval(() => {
      this.refreshData();
    }, 5000);
    // Subject that gets notified if record is updated
    this.dataService.updateNotificationSubject.subscribe(d => {
      this.dataService.getAllRecords().subscribe(data => {
        console.log("Update data in record component: " + d)
        this.records = data;
      })
    })
  }


  refreshData(){
  this.dataService.getAllRecords()
    .subscribe(data => {
      this.records = data;
    });
  }

}
