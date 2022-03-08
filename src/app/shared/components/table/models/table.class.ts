import { MatTableDataSource } from "@angular/material/table";
import { BehaviorSubject } from "rxjs";
import { TableColumns } from "src/app/core/interfaces/table-columns.interface";
import { TableInterface } from "../table.interface";

export class Table<T> implements TableInterface<T> {
  columns: BehaviorSubject<TableColumns<T>[]>;
  dataSource: MatTableDataSource<T>;
  paginationType: any;
  expandable: any;

  constructor(columns: TableColumns<T>[]) {
    this.columns = new BehaviorSubject<TableColumns<T>[]>(columns);
    this.dataSource = new MatTableDataSource<T>([]);
  }

  setDataSource(value: T[]): void {
    this.dataSource = new MatTableDataSource(value);
  }

  getColumnsToDisplay(): string[] {
    return this.columns.value.map((column) => column.header.columnDef);
  }
}
