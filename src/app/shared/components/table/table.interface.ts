import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material/table";
import { BehaviorSubject } from "rxjs";
import { TableColumns } from "src/app/core/interfaces/table-columns.interface";
import { TableFilter } from "./models/filter.model";
import { Page } from "./models/page.model";
import { Table } from "./table.class";

export interface TableInterface<T> {
  tableInstance: Table<T>;
  columns: TableColumns<T>[];
  _filter: BehaviorSubject<TableFilter>;
  dataSource: MatTableDataSource<T>;
  dataSelection: SelectionModel<T>;
  setDataSourcePaginated(value: Page<T>): void;
  setFilters(filter: TableFilter): void;
  setDataExpanded(row: T): void;
  getDataExpanded(): T;
}
