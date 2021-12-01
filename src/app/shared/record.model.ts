export class Record {

  constructor(
    public id: number,
    public date: Date,
    public target: number,
    public actual: number,
    public variance: number
  ) {
  }

}

