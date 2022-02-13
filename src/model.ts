export class Model {
  public Settings: Settings;
  public Operation: Operation[];
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
}

export class Period {
  public From: Date;
  public To: Date;
}

export class Operation {
  public Date: Date;
  public Item: Item[];
}
