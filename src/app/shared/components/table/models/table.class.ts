import { Injector } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { BehaviorSubject, Observable } from "rxjs";
import { Page } from "./page.model";
import { PaginatorAttributes } from "./paginator-attributes";

export class Table<T> {
  dataSource: MatTableDataSource<T> = new MatTableDataSource<T>([]);
  pagination: PaginatorAttributes = new PaginatorAttributes();

  private _update: BehaviorSubject<PaginatorAttributes> = new BehaviorSubject(
    new PaginatorAttributes()
  );

  get update(): Observable<PaginatorAttributes> {
    return this._update.asObservable();
  }

  setDataSourcePaginated(value: Page<T>): void {
    this.dataSource = new MatTableDataSource(value.content || []);
    this.setPaginatorAttributes({
      length: value.pageable?.numberOfElements,
      pageIndex: value.pageable.pageNumber,
      pageSize: value.pageable?.pageSize,
    });
  }

  setPaginatorAttributes({ length, pageIndex, pageSize }: PageEvent): void {
    this.pagination.length = length;
    this.pagination.pageIndex = pageIndex;
    this.pagination.pageSize = pageSize;
  }
}
