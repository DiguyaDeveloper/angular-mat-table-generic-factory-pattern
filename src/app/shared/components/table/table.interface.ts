import { MatTableDataSource } from "@angular/material/table";
import { BehaviorSubject } from "rxjs";
import { TableColumns } from "src/app/core/interfaces/table-columns.interface";

type PaginatorType = "FRONT" | "BACK";

enum PaginatorEnum {
  FRONT = "FRONT",
  BACK = "BACK",
}
export interface TableInterface<T> {
  columns: BehaviorSubject<TableColumns<T>[]>;
  dataSource: MatTableDataSource<T>;
  paginationType: PaginatorType;
  expandable: PaginatorType;

  setDataSource(value: T[]): void;
  getColumnsToDisplay(): string[];
}
