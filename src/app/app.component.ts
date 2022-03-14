import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { Table } from "./shared/components/table/models/table.class";

type Contracts = {
  id: number;
  value: number;
  description: number;
};

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit {
  @ViewChild("image") image: ElementRef;

  tableInstance: Table<Contracts> = new Table<Contracts>([]);

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.tableInstance.setDataSourceAllItemns(mockData.content);
    }, 3000);
  }

  ngAfterViewInit(): void {
    this.tableInstance = new Table([
      {
        header: {
          columnDef: "id",
          displayName: "ID <br/> da solicitação",
        },
        cell: {
          getValue: (data: Contracts) =>
            `${data.id.toString().concat("00000000000")}`,
        },
      },
      {
        header: {
          columnDef: "value",
          displayName: "Valor",
          hasSorting: true,
        },
        cell: {
          getValue: (data: Contracts) => String(data.id + data.value),
        },
      },
      {
        header: {
          columnDef: "description",
          displayName: "Descrição",
          hasSorting: true,
        },
        cell: {
          getValue: (data: Contracts) =>
            `${data.id.toString().concat(" Description here")}`,
        },
      },
      {
        header: {
          columnDef: "template",
          displayName: "Descrição",
        },
        cell: {
          templateRef: this.image,
        },
      },
    ]);
  }
}

const mockData = {
  content: [
    {
      id: 1,
      description: 3,
      value: 44,
    },
    {
      id: 1,
      description: 3,
      value: 44,
    },
    {
      id: 1,
      description: 3,
      value: 44,
    },
    {
      id: 1,
      description: 3,
      value: 44,
    },
    {
      id: 2,
      description: 3,
      value: 44,
    },
    {
      id: 3,
      description: 3,
      value: 44,
    },
    {
      id: 4,
      description: 3,
      value: 44,
    },
    {
      id: 5,
      description: 3,
      value: 44,
    },
    {
      id: 6,
      description: 3,
      value: 44,
    },
    {
      id: 7,
      description: 3,
      value: 44,
    },
    {
      id: 8,
      description: 3,
      value: 44,
    },
    {
      id: 9,
      description: 3,
      value: 44,
    },
    {
      id: 10,
      description: 3,
      value: 44,
    },
  ],
  totalPages: 2,
  totalElements: 13,
  size: 10,
  number: 1,
  numberOfElements: 10,
};
