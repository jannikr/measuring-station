import { TestBed } from '@angular/core/testing';

import { RecordsComponent } from './records.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('RecordsComponent', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [RecordsComponent]
  }));

  it('should be created', () => {
    const service: RecordsComponent = TestBed.get(RecordsComponent);
    expect(service).toBeTruthy();
  });
});
