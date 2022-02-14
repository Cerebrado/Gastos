export class DataModel {
  public Settings: Settings;
  public Periods: Period[];

  constructor() {
    this.Settings = new Settings();
    this.Settings.OutcomesList = [
      new Item('Baño', 'Jabon', '', 0, false),
      new Item('Baño', 'Shampoo', '', 0, false),
      new Item('Limpieza', 'Escoba', '', 0, false),
    ];
    this.Settings.IncomesList = [new Item('General', 'Salario', '', 0, true)];
    this.Periods = new Array<Period>();
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
  public Quantity: number;
  public Category: string;
  public Name: string;
  public Description: string;
  public Price: number;
  public IsRecurrent: boolean;
  public isIncoming: boolean;
}
