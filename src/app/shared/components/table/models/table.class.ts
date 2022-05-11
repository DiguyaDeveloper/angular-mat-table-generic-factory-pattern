import { PageEvent } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { BehaviorSubject, Observable } from "rxjs";
import { Page } from "./page.model";
import { PaginatorAttributes } from "./paginator-attributes";

export class Table<T> {
  dataSource: MatTableDataSource<T> = new MatTableDataSource<T>([]);

  private _pagination: BehaviorSubject<PaginatorAttributes> =
    new BehaviorSubject(new PaginatorAttributes());

  constructor() {}

  get pagination(): Observable<PaginatorAttributes> {
    return this._pagination.asObservable();
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
    const { value: previousValue } = this._pagination;

    this._pagination.next({
      ...previousValue,
      length,
      pageIndex,
      pageSize,
    });
  }
}
