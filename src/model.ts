export class DataModel {
  public Settings: Settings;
  public Months: Month[];

  constructor() {
    this.Settings = new Settings();
    this.Settings.OutcomesList = [
      new Item('Baño', 'Jabon', '', 0, false),
      new Item('Baño', 'Shampoo', '', 0, false),
      new Item('Limpieza', 'Escoba', '', 0, false),
    ];
    this.Settings.IncomesList = [new Item('General', 'Salario', '', 0, true)];
    this.Months = new Array<Month>();
  }
}

export class Item {
  public Category: string;
  public Name: string;
  public Description: string;
  public Price: number;
  public IsRecurrent: boolean;

  constructor(
    category: string,
    name: string,
    description: string,
    price: number,
    isReccurrent: boolean
  ) {
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

  constructor() {
    this.IncomesList = new Array<Item>();
    this.OutcomesList = new Array<Item>();
  }
}

export class Month {
  public Month: number;
  public Year: number;
  public Operations: Operation[];

  constructor(month: number, year: number) {
    this.Month = month;
    this.Year = year;
    this.Operations = new Array<Operation>();
  }
}

export class Operation {
  public Date: Date;
  public Category: string;
  public Name: string;
  public Description: string;
  public Price: number;
  public Quantity: number;
  public isIncoming: boolean;

  constructor(
    item: Item,
    date: Date,
    price: number,
    quantity: number,
    isIncoming: boolean
  ) {
    this.Date = date;
    this.Category = item.Category;
    this.Name = item.Name;
    this.Description = item.Description;
    this.Price = price;
    this.Quantity = quantity;
    this.isIncoming = isIncoming;
  }
}
