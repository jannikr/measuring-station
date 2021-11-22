export class Record {

  constructor(
    public stationId: string,
    public date: Date,
    public target: number,
    public actual: number,
    public variance: number
  ) {
  }

}

