import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { TableColumns } from "src/app/core/interfaces/table-columns.interface";
import { TablePaginationAbstract } from "src/app/core/models/table.abstract";
import {
  InventoryProduct,
  TableService,
} from "src/app/core/services/list.service";

@Component({
  selector: "app-example-table-online",
  templateUrl: "./example-table-online.component.html",
  styleUrls: ["./example-table-online.component.scss"],
})
export class ExampleTableOnlineComponent
  extends TablePaginationAbstract<InventoryProduct>
  implements OnInit
{
  @ViewChild("image", { static: true }) image!: TemplateRef<HTMLElement>;

  constructor(protected _tableService: TableService<InventoryProduct>) {
    super(_tableService, "api/apps/ecommerce/inventory/products");
  }

  ngOnInit(): void {
    this.columns = this.getColumns();
  }

  getColumns(): TableColumns<InventoryProduct>[] {
    return [
      {
        header: {
          columnDef: "number",
          displayName: "Valor",
          style: {
            backgroundColor: "red",
          },
        },
        cell: {
          getValue: (row: InventoryProduct) => `${row.number}`,
          getStyle: () => ({
            backgroundColor: "blue",
          }),
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
    const dataSelection = this.table.dataSelection.selected;
    window.alert(JSON.stringify(dataSelection));
  }
  expanded(): void {
    const dataExpanded = this.table.dataExpanded;
    window.alert(JSON.stringify(dataExpanded));
  }
}
