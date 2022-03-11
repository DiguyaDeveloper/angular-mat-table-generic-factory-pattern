import { MatTableDataSource } from "@angular/material/table";
import { BehaviorSubject } from "rxjs";
import { TableColumns } from "src/app/core/interfaces/table-columns.interface";
import { Page } from "./models/page.model";
import { PaginatorAttributesToSet } from "./models/paginator-attributes";

export interface TableInterface<T> {
  columns: BehaviorSubject<TableColumns<T>[]>;
  dataSource: MatTableDataSource<T>;

  setDataSourcePaginated(
    value: Page<T>,
    paginator: PaginatorAttributesToSet
  ): void;
  setDataSourceAllItemns(value: T[]): void;
  getColumnsToDisplay(): (string | null)[];
}
