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
    this.getProducts(
      this.tableInstance.pagination.pageIndex,
      this.tableInstance.pagination.pageSize,
      "name",
      "asc"
    );
  }

  getProducts(
    page: number = 0,
    size: number = 10,
    sort: string = "name",
    order: "asc" | "desc" | "" = "asc",
    search: string = ""
  ): void {
    this._productsService
      .getProducts(page, size, sort, order, search)
      .pipe(take(1))
      .subscribe((response) => {
        const data: Page<InventoryProduct> = {
          content: response.products,
          pageable: {
            pageNumber: response.pagination.page,
            pageSize: response.products.length,
            totalPages: response.pagination.length,
            numberOfElements: response.pagination.size,
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
