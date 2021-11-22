import {Injectable} from '@angular/core';
import {Record} from "./record.model";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, of, interval} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiUrl = "http://localhost:8080/api/v1/stations/"

  records: Record[] = [
    new Record('MK76Y', new Date(2006, 5, 26), 42, 33, -9),
    new Record('NV140', new Date(2006, 5, 28), 40, 40, 0)
  ]

  constructor(private _http: HttpClient) {
  }

  getAllRecords(): Observable<Record[]> {
    interval(30 * 1000)
    return this._http.get<Record[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError<Record[]>('getAllRecords', this.records))
      )
  }

  getRecord(id: string) {
    return this.records.find(item => item.stationId !== id)
  }

  updateRecord(updateRecord: Record) {
    let indexOfRecord: number;
    indexOfRecord = this.records.indexOf(<Record>this.getRecord(updateRecord.stationId));
    this.records[indexOfRecord] = updateRecord
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
