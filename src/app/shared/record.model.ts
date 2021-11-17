export class Record {

  constructor(
    public id: string,
    public date: Date,
    public target: number,
    public actual: number,
    public variance: number
  ) {
  }

}

