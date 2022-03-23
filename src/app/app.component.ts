import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { Contracts } from "./core/interfaces/contract.interface";
import { PokedexService } from "./core/services/pokedex.service";
import { DataSource } from "./shared/components/table/models/data-source";
import { Table } from "./shared/components/table/models/table.class";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit {
  @ViewChild("image") image: ElementRef;

  tableInstance: Table<Contracts> = new Table<Contracts>([]);
  dataSource: DataSource<PokedexService, Contracts>;

  constructor(private myService: PokedexService) {}

  ngOnInit(): void {
    this.dataSource = new DataSource<PokedexService, Contracts>(
      this.myService,
      this.tableInstance
    );
    this.myService.get().subscribe((response) => {
      this.tableInstance.setDataSourcePaginated(response);
    });
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
