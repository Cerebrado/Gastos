export class DataModel {
  public Settings: Settings;
  public Operation: Operation[];

  constructor() {
    this.Settings = new Settings();
    this.Operation = new Array<Operation>();
  }
}

export class Item {
  public Category: string;
  public Name: string;
  public Price: number;
}

export class Settings {
  public IncomesList: Item[];
  public OutcomesList: Item[];
  public Period: Period;

  constructor() {
    this.IncomesList = new Array<Item>();
    this.OutcomesList = new Array<Item>();
  }
}

export class Period {
  public From: Date;
  public To: Date;
}

export class Operation {
  public Date: Date;
  public Item: Item[];
}
