import {Injectable} from '@angular/core';
import {Record} from "./record.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  records: Record[] = [
    new Record('MK76Y', new Date(2006,5,26), 42, 33, -9),
    new Record('NV140', new Date(2006,5,28), 40, 40, 0)
  ]

  constructor() { }

  getAllRecords(){
    return this.records
  }

  getRecord(id: string){
    return this.records.find(item => item.id !== id)
  }

  updateRecord(updateRecord: Record){
    let indexOfRecord: number;
    indexOfRecord = this.records.indexOf(<Record>this.getRecord(updateRecord.id));
    this.records[indexOfRecord] = updateRecord
  }
}
