import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { TableColumns } from "./core/interfaces/table-columns.interface";
import { TablePaginationAbstract } from "./core/models/table.abstract";
import { InventoryProduct, TableService } from "./core/services/list.service";

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

  constructor(protected _tableService: TableService<InventoryProduct>) {
    super(_tableService, "api/apps/ecommerce/inventory/products");
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
          displayName: "Id",
        },
        cell: {
          getValue: (row: InventoryProduct) => `${row.id}`,
        },
      },
      {
        header: {
          columnDef: "category",
          displayName: "Index",
        },
        cell: {
          getValue: (row: InventoryProduct) => `${row.category}`,
        },
      },
      {
        header: {
          columnDef: "name",
          displayName: "Name",
        },
        cell: {
          getValue: (row: InventoryProduct) => `${row.name}`,
        },
      },
      {
        header: {
          columnDef: "icon",
          displayName: "Icon",
        },
        cell: {
          templateRef: this.image,
        },
      },
    ];
  }

  selection(): void {
    debugger;
    const table = super.table;
    console.log("selection", super.table);
  }
  expanded(): void {
    console.log();
  }
}
