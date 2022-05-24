import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material/table";
import { BehaviorSubject, Observable } from "rxjs";
import { TableColumns } from "src/app/core/interfaces/table-columns.interface";
import { TableFilter } from "./models/filter.model";
import { Page } from "./models/page.model";

export class Table<T> {
  tableInstance: Table<T>;
  columns: TableColumns<T>[];
  dataSource: MatTableDataSource<T> = new MatTableDataSource<T>([]);
  dataSelection = new SelectionModel<T>(true, []);

  private _filter: BehaviorSubject<TableFilter> = new BehaviorSubject(
    new TableFilter({})
  );
  private _dataExpanded: T;

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
    this._dataExpanded = row;
  }

  getDataExpanded(): T {
    return this._dataExpanded;
  }
}
