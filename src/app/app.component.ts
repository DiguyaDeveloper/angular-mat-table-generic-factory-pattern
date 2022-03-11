import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
} from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { TableAbstract } from "./core/models/table.abstract";
import { ImageTemplateRefComponent } from "./shared/components/image-template-ref/image-template-ref.component";
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
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  tableInstance: Table<Contracts> = new Table<Contracts>([]);

  constructor() {}

  ngOnInit(): void {
    this.tableInstance.setPaginator(this.paginator);
    setTimeout(() => {
      this.tableInstance.setDataSourcePaginated(mockData);
    }, 1000);
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
        },
        cell: {
          getValue: (data: Contracts) => String(data.id + data.value),
        },
      },
      {
        header: {
          columnDef: "description",
          displayName: "Descrição",
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
