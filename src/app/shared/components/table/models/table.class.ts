import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { BehaviorSubject } from "rxjs";
import { TableColumns } from "src/app/core/interfaces/table-columns.interface";
import { TableInterface } from "../table.interface";
import { Page } from "./page.model";
import {
  PaginatorAttributes,
  PaginatorAttributesToSet,
} from "./paginator-attributes";

export class Table<T> implements TableInterface<T> {
  columns: BehaviorSubject<TableColumns<T>[]>;
  dataSource: MatTableDataSource<T> = new MatTableDataSource<T>([]);
  paginatorAttributes: PaginatorAttributes = new PaginatorAttributes();

  constructor(columns: TableColumns<T>[]) {
    this.columns = new BehaviorSubject<TableColumns<T>[]>(columns);
  }

  setDataSourcePaginated(value: Partial<Page<T>>): void {
    this.dataSource = new MatTableDataSource(value.content || []);
    this.setPaginatorAttributes({
      length: value.totalElements || 0,
      pageIndex: value.number || 0,
      pageSize: value.size || 0,
    });
  }

  setDataSourceAllItemns(data: T[]): void {
    this.dataSource.data = data;
  }

  setPaginatorAttributes({
    length,
    pageIndex,
    pageSize,
  }: PaginatorAttributesToSet): void {
    this.paginatorAttributes.length = length;
    this.paginatorAttributes.pageIndex = pageIndex;
    this.paginatorAttributes.pageSize = pageSize;
  }

  getColumnsToDisplay(): (string | null)[] {
    return this.columns.value.map((column) => this.validate(column));
  }

  validate(column: TableColumns<T>): string | null {
    const { columnDef } = column.header;

    if (columnDef) {
      return columnDef;
    }
    return null;
  }
}
