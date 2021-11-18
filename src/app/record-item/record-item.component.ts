import {Component, Input} from '@angular/core';
import { Record} from "../shared/record.model";

@Component({
  selector: 'app-record-item',
  templateUrl: './record-item.component.html',
  styleUrls: ['./record-item.component.scss']
})
export class RecordItemComponent{

  // @ts-ignore
  @Input() record: Record

  constructor() { }

}
