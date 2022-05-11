import { MatTableDataSource } from "@angular/material/table";
import { Page } from "./page.model";
import {
  PaginatorAttributes,
  PaginatorAttributesToSet,
} from "./paginator-attributes";

export class Table<T> {
  dataSource: MatTableDataSource<T> = new MatTableDataSource<T>([]);
  paginatorAttributes: PaginatorAttributes = new PaginatorAttributes();

  constructor() {}

  setDataSourcePaginated(value: Partial<Page<T>>): void {
    this.dataSource = new MatTableDataSource(value.content || []);
    this.setPaginatorAttributes({
      length: value.totalElements || 0,
      pageIndex: value.pageable?.pageNumber || 0,
      pageSize: value.pageable?.pageSize || 0,
    });
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
}
