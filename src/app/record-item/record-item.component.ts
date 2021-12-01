import {Component, Input, OnInit} from '@angular/core';
import { Record} from "../shared/record.model";

@Component({
  selector: 'app-record-item',
  templateUrl: './record-item.component.html',
  styleUrls: ['./record-item.component.scss']
})
export class RecordItemComponent implements OnInit{

  // @ts-ignore
  @Input() record: Record
  public variance: String | undefined

  constructor() { }

  ngOnInit(): void {
    this.showDeviation()
  }

  // Todo: Check if this is executed when new data appears
  showDeviation() {
    if (this.record.actual <= 0.9 * this.record.target) {
      console.log("Now critical!")
      this.variance = "critical"
    } else if (this.record.actual >= 0.05 * this.record.target + this.record.target) {
      console.log("Now positive!")
      this.variance = "positive"
    } else {
      this.variance = "not critical"
    }
  }

}
