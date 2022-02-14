export class DataModel {
  public Settings: Settings;
  public Operation: Operation[];

  constructor() {
    this.Settings = new Settings();
    this.Settings.OutcomesList = [
      new Item('Baño', 'Jabon', '', 0, false),
      new Item('Baño', 'Shampoo','', 0, false),
      new Item('Limpieza', 'Escoba', '', 0, false),
    ];
    this.Settings.IncomesList = [new Item('General', 'Salary','', 0, true)];

    this.Operation = new Array<Operation>();
  }
}

export class Item {
  public Category: string;
  public Name: string;
  public Description: string;
  public Price: number;
  public IsRecurrent: boolean;


  constructor(category: string, name: string, description:string,price: number, isReccurrent: boolean) {
    this.Category = category;
    this.Name = name;
    this.Description = description;
    this.Price = price;
    this.IsRecurrent = isReccurrent;
  }
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
  public Item: Item;
  public Quantity: number;
}
