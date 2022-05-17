import { Sort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { BehaviorSubject, Observable } from "rxjs";
import { TableFilter } from "./filter.model";
import { Page } from "./page.model";

export class Table<T> {
  dataSource: MatTableDataSource<T> = new MatTableDataSource<T>([]);
  filter: TableFilter = new TableFilter({});

  private _update: BehaviorSubject<TableFilter> = new BehaviorSubject(
    new TableFilter({})
  );

  get update(): Observable<TableFilter> {
    return this._update.asObservable();
  }

  setDataSourcePaginated(value: Page<T>): void {
    this.dataSource = new MatTableDataSource(value.content || []);
    this.filter.page = value.pageable?.pageIndex;
    this.filter.length = value.pageable?.length;
  }

  setDataSource(filter: TableFilter): void {
    this.filter = { ...this.filter, ...filter };
    this._update.next(this.filter);
  }
}
