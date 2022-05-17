import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { TableColumns } from "./core/interfaces/table-columns.interface";
import { TablePaginationAbstract } from "./core/models/table.abstract";
import { InventoryProduct, ListService } from "./core/services/list.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent
  extends TablePaginationAbstract<InventoryProduct>
  implements OnInit
{
  @ViewChild("image", { static: true }) image!: TemplateRef<HTMLElement>;

  constructor(protected _productsService: ListService<InventoryProduct>) {
    super(_productsService, "getAll");
  }

  ngOnInit(): void {
    super.columns = this.getColumns();
  }

  getColumns(): TableColumns<InventoryProduct>[] {
    return [
      {
        header: {
          columnDef: "number",
          displayName: "Index",
          style: { backgroundColor: "red" },
        },
        cell: {
          getValue: (row: InventoryProduct) => `${row.number}`,
          getStyle: (row: InventoryProduct) => {
            if (row.number === 1) {
              return { backgroundColor: "blue" };
            }
            return null;
          },
        },
      },
      {
        header: {
          columnDef: "id",
          displayName: "ID <br/> da solicitação",
        },
        cell: {
          getValue: (row: InventoryProduct) =>
            `${row.id?.toString().concat("00000000000")}`,
        },
      },
      {
        header: {
          columnDef: "category",
          displayName: "Categoria",
          disableSort: true,
        },
        cell: {
          getValue: (row: InventoryProduct) => String(row?.id),
        },
      },
      {
        header: {
          columnDef: "name",
          displayName: "Descrição",
        },
        cell: {
          getValue: (row: InventoryProduct) =>
            `${row.id?.toString().concat(" Description here")}`,
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
