import {
  AfterViewInit,
  Component,
  ElementRef,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { Contracts } from "./core/interfaces/contract.interface";
import { TableColumns } from "./core/interfaces/table-columns.interface";
import { PokedexService } from "./core/services/pokedex.service";
import { Table } from "./shared/components/table/models/table.class";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit {
  @ViewChild("image") image: TemplateRef<HTMLElement>;

  tableInstance: Table<Contracts> = new Table<Contracts>();
  tableColumns: TableColumns<Contracts>[];

  constructor(private myService: PokedexService) {}

  ngOnInit(): void {
    this.myService.get().subscribe((response) => {
      this.tableInstance.setDataSourcePaginated(response);
    });
  }

  ngAfterViewInit(): void {
    this.tableColumns = [
      {
        header: {
          columnDef: "id",
          displayName: "ID <br/> da solicitação",
        },
        cell: {
          getValue: (data: Contracts) =>
            `${data.id?.toString().concat("00000000000")}`,
        },
      },
      {
        header: {
          columnDef: "value",
          displayName: "Valor",
          hasSorting: true,
        },
        cell: {
          getValue: (data: Contracts) => String(data?.id + data?.value),
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
            `${data.id?.toString().concat(" Description here")}`,
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
