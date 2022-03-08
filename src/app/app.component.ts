import { Component } from "@angular/core";
import { TableAbstract } from "./shared/components/table-custom/table/table.abstract";
import { Table } from "./shared/components/table-custom/table/tables/table.class";

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
export class AppComponent extends TableAbstract<Contracts> {
  constructor() {
    super([
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
    ]);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.table.setDataSource([
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
          id: 1,
          description: 3,
          value: 44,
        },
      ]);
    }, 1000);
  }
}
