export class Record {

  constructor(
    public stationId: number,
    public date: Date,
    public target: number,
    public actual: number,
    public variance: number
  ) {
  }

}

