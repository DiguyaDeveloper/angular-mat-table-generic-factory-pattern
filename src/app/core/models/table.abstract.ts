import {
  catchError,
  combineLatest,
  map,
  Observable,
  of,
  switchMap,
  take,
} from "rxjs";
import { TablePage } from "src/app/shared/components/table/models/table-page.model";
import { TableSort } from "src/app/shared/components/table/models/table-sort.model";
import { Table } from "src/app/shared/components/table/table.class";
import { TableColumns } from "../interfaces/table-columns.interface";
import { TableService } from "../services/list.service";
import { Page } from "./page.model";
import { TableFilters } from "./table-filters.model";

export abstract class TablePaginationAbstract<T> {
  table: Table<T> = new Table<T>();
  columns: TableColumns<T>[];

  constructor(protected service: TableService<T>, private pathUrl: string) {
    combineLatest([
      this.table.currentPage,
      this.table.currentSort,
      this.table.currentFilters,
    ])
      .pipe(
        switchMap(([currentSort, currentPage, currentFilters]) => {
          this.table.isLoading = true;
          return this.getAll({
            ...currentSort,
            ...currentPage,
            ...currentFilters,
          });
        }),
        map((data) => {
          this.table.setDataSourcePaginated(data);
          this.table.isLoading = false;
          return data;
        }),
        catchError(() => {
          this.table.isLoading = false;
          return of([]);
        })
      )
      .subscribe();
  }

  abstract getColumns(): TableColumns<T>[];

  getAll({
    page,
    size,
    order,
    sort,
  }: TableSort & TablePage & TableFilters): Observable<Page<T>> {
    return this.service
      .getAll(page, size, sort, order, this.pathUrl)
      .pipe(take(1));
  }
}
