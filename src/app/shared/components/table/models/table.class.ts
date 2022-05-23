import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material/table";
import { BehaviorSubject, Observable } from "rxjs";
import { TableFilter } from "./filter.model";
import { Page } from "./page.model";

export class Table<T> {
  private _filter: BehaviorSubject<TableFilter> = new BehaviorSubject(
    new TableFilter({})
  );
  private dataExpanded: T;

  dataSource: MatTableDataSource<T> = new MatTableDataSource<T>([]);
  dataSelection = new SelectionModel<T>(true, []);

  get filter(): Observable<TableFilter> {
    return this._filter.asObservable();
  }

  setDataSourcePaginated(value: Page<T>): void {
    this.dataSource = new MatTableDataSource(value.content || []);
    this._filter.value.page = value.pageable?.pageIndex;
    this._filter.value.length = value.pageable?.length;
  }

  setFilters(filter: TableFilter): void {
    this._filter.next(filter);
  }

  setDataExpanded(row: T): void {
    this.dataExpanded = row;
  }

  getDataExpanded(): T {
    return this.dataExpanded;
  }
}
