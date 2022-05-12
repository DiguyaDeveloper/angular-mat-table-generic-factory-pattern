import {
  AfterViewInit,
  Component,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import { pipe, take } from "rxjs";
import { TableColumns } from "./core/interfaces/table-columns.interface";
import {
  InventoryProduct,
  ProductsService,
} from "./core/services/products.service";
import { TableFilter } from "./shared/components/table/models/filter.model";
import { Page } from "./shared/components/table/models/page.model";
import { Table } from "./shared/components/table/models/table.class";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements AfterViewInit {
  @ViewChild("image") image: TemplateRef<HTMLElement>;

  tableInstance: Table<InventoryProduct> = new Table<InventoryProduct>();
  tableColumns: TableColumns<InventoryProduct>[];

  constructor(private _productsService: ProductsService) {}

  ngOnInit(): void {
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
        const data: Page<InventoryProduct> = {
          content: response.products,
          pageable: {
            pageSize: response.products.length,
            pageIndex: response.pagination.page,
            length: response.pagination.length,
          },
        };
        this.tableInstance.setDataSourcePaginated(data);
      });
  }

  ngAfterViewInit(): void {
    this.tableColumns = [
      {
        header: {
          columnDef: "number",
          displayName: "Index",
        },
        cell: {
          getValue: (data: InventoryProduct) => `${data.number}`,
        },
      },
      {
        header: {
          columnDef: "id",
          displayName: "ID <br/> da solicitação",
        },
        cell: {
          getValue: (data: InventoryProduct) =>
            `${data.id?.toString().concat("00000000000")}`,
        },
      },
      {
        header: {
          columnDef: "category",
          displayName: "Categoria",
          hasSorting: true,
        },
        cell: {
          getValue: (data: InventoryProduct) => String(data?.id),
        },
      },
      {
        header: {
          columnDef: "name",
          displayName: "Descrição",
          hasSorting: true,
        },
        cell: {
          getValue: (data: InventoryProduct) =>
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
