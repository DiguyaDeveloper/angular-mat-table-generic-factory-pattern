import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { TableColumns } from "src/app/core/interfaces/table-columns.interface";
import {
  InventoryProduct,
  TableService,
} from "src/app/core/services/list.service";
import { Table } from "src/app/shared/components/table/table.class";

@Component({
  selector: "app-example-table-offline",
  templateUrl: "./example-table-offline.component.html",
  styleUrls: ["./example-table-offline.component.scss"],
})
export class ExampleTableOfflineComponent implements OnInit {
  @ViewChild("image", { static: true }) image!: TemplateRef<HTMLElement>;

  constructor(private _tableService: TableService<InventoryProduct>) {}

  table: Table<InventoryProduct> = new Table<InventoryProduct>();
  columns: TableColumns<InventoryProduct>[];

  ngOnInit(): void {
    this.columns = this.getColumns();
  }

  getList(): void {
    this._tableService
      .getAll(0, 14, "number", "asc", "api/apps/ecommerce/inventory/products")
      .subscribe((response) => {
        this.table.setDataSourcePaginated(response);
      });
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
