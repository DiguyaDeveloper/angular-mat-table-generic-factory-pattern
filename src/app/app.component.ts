import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { take } from "rxjs";
import { TableColumns } from "./core/interfaces/table-columns.interface";
import {
  InventoryProduct,
  ProductsService,
} from "./core/services/products.service";
import { TableFilter } from "./shared/components/table/models/filter.model";
import { Table } from "./shared/components/table/models/table.class";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent implements OnInit {
  @ViewChild("image", { static: true }) image!: TemplateRef<HTMLElement>;

  tableInstance: Table<InventoryProduct> = new Table<InventoryProduct>();
  tableColumns: TableColumns<InventoryProduct>[];

  constructor(private _productsService: ProductsService) {}

  ngOnInit(): void {
    this.configureColumns();
    this.getProducts({
      page: this.tableInstance.filter.page,
      size: this.tableInstance.filter.size,
      sort: "index",
      order: "asc",
    });
    this.tableInstance.update.subscribe((filter) => {
      this.getProducts(filter);
    });
  }

  getProducts({ page, size, order, search, sort }: TableFilter): void {
    this._productsService
      .getProducts(page, size, sort, order, search)
      .pipe(take(1))
      .subscribe((response) => {
        this.tableInstance.setDataSourcePaginated(response);
      });
  }

  private configureColumns(): void {
    this.tableColumns = [
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
