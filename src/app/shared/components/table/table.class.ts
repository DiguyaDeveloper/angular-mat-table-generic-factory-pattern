import { SelectionModel } from "@angular/cdk/collections";
import { MatTableDataSource } from "@angular/material/table";
import { BehaviorSubject } from "rxjs";
import { TableConfigurations } from "src/app/core/interfaces/table-configurations.interface";
import { Page } from "src/app/core/models/page.model";
import { TableFilters } from "./models/table-filters.model";
import { TablePage } from "./models/table-page.model";
import { TableSort } from "./models/table-sort.model";

export class Table<T> {
  dataSource: MatTableDataSource<T> = new MatTableDataSource<T>([]);
  dataSelection = new SelectionModel<T>(true, []);
  isLoading: boolean;
  configurations: Partial<TableConfigurations>;

  dataExpanded = new BehaviorSubject<T>(null);
  currentSort = new BehaviorSubject<TableSort>(new TableSort({}));
  currentPage = new BehaviorSubject<TablePage>(new TablePage({}));
  currentFilters = new BehaviorSubject<TableFilters>(new TableFilters());

  setDataSourcePaginated(value: Page<T>): void {
    this.dataSource.data = value.content || [];
    this.currentPage.value.page = value.pageable.pageNumber;
    this.currentPage.value.size = value.pageable.pageSize;
    this.currentPage.value.totalElements = value.totalElements;
  }

  setSort(sort: TableSort): void {
    this.currentSort.next({ ...this.currentSort.value, ...sort });
  }

  setPage(page: TablePage): void {
    this.currentPage.next({ ...this.currentPage.value, ...page });
  }

  setFilters<F>(filters: TableFilters<Partial<F>>): void {
    this.currentFilters.next({ ...this.currentFilters.value, ...filters });
  }

  setConfigurations(configurations: Partial<TableConfigurations>): void {
    this.configurations = configurations;
  }
}
