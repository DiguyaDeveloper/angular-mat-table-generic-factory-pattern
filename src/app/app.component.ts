import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { TableColumns } from "./core/interfaces/table-columns.interface";
import { TableAbstract } from "./core/models/table.abstract";
import { InventoryProduct, ListService } from "./core/services/list.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent
  extends TableAbstract<InventoryProduct>
  implements OnInit
{
  @ViewChild("image", { static: true }) image!: TemplateRef<HTMLElement>;

  constructor(protected _productsService: ListService<InventoryProduct>) {
    super(_productsService, "getAll", "api/apps/ecommerce/inventory/products");
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
        },
        cell: {
          getValue: (row: InventoryProduct) => `${row.number}`,
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
          hasSorting: true,
        },
        cell: {
          getValue: (row: InventoryProduct) => String(row?.id),
        },
      },
      {
        header: {
          columnDef: "name",
          displayName: "Descrição",
          hasSorting: true,
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
