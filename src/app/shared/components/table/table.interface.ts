import { PageEvent } from "@angular/material/paginator";
import { Sort } from "@angular/material/sort";
import { TableColumns } from "src/app/core/interfaces/table-columns.interface";
import { Table } from "./models/table.class";

export interface TableInterface<T> {
  tableInstance: Table<T>;
  columns: TableColumns<T>[];
  paginationEvent(event: PageEvent): void;
  sortEvent(event: Sort): void;
  selectEvent(event: T[]): void;
}
