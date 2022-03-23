import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { Sort } from "@angular/material/sort";
import { Contracts } from "./core/interfaces/contract.interface";
import { TableColumns } from "./core/interfaces/table-columns.interface";
import { PokedexService } from "./core/services/pokedex.service";
import { Table } from "./shared/components/table/models/table.class";
import { TableInterface } from "./shared/components/table/table.interface";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit, TableInterface<Contracts> {
  @ViewChild("image") image: ElementRef;

  tableInstance: Table<Contracts> = new Table<Contracts>();
  columns: TableColumns<Contracts>[];

  constructor(private myService: PokedexService) {}

  selectEvent(event: Contracts[]): void {
    this.myService.get2().subscribe((response) => {
      this.tableInstance.setDataSourcePaginated(response);
    });
  }

  sortEvent(event: Sort): void {
    this.myService.get2().subscribe((response) => {
      this.tableInstance.setDataSourcePaginated(response);
    });
  }

  paginationEvent(event: PageEvent): void {
    this.myService.get2().subscribe((response) => {
      this.tableInstance.setDataSourcePaginated(response);
    });
  }

  ngOnInit(): void {
    this.myService.get().subscribe((response) => {
      this.tableInstance.setDataSourcePaginated(response);
    });
  }

  ngAfterViewInit(): void {
    this.columns = [
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
    ];
  }
}
