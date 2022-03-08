import { MatTableDataSource } from "@angular/material/table";
import { BehaviorSubject } from "rxjs";
import { TableColumns } from "src/app/core/interfaces/table-columns.interface";
import { PaginatorType } from "src/app/core/types/paginator.type";

export interface TableInterface<T> {
  columns: BehaviorSubject<TableColumns<T>[]>;
  dataSource: MatTableDataSource<T>;
  paginationType: PaginatorType;

  setDataSource(value: T[]): void;
  getColumnsToDisplay(): string[];
}
