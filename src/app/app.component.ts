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
import { Table } from "./shared/components/table/table.class";

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

  tableOffline: Table<InventoryProduct> = new Table<InventoryProduct>();

  constructor(
    protected tableService: TableService<InventoryProduct>,
    private _tableService: TableService<InventoryProduct>
  ) {
    super(tableService, "api/apps/ecommerce/inventory/products");
  }

  ngOnInit(): void {
    this.columns = this.getColumns();
    this.getList();
  }

  getList(): void {
    this._tableService
      .getAll(0, 14, "number", "asc", "api/apps/ecommerce/inventory/products")
      .subscribe((response) => {
        this.tableOffline.setDataSourcePaginated(response);
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
    const dataSelection = this.tableOffline.dataSelection.selected;
    window.alert(JSON.stringify(dataSelection));
  }
  expanded(): void {
    const dataExpanded = this.tableOffline.dataExpanded;
    window.alert(JSON.stringify(dataExpanded));
  }
}
