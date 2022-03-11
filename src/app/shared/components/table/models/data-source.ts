import { MatTableDataSource } from "@angular/material/table";

interface Filters {
  columns: { [field: string]: string };
  global: string;
}

export class DataSource<T> extends MatTableDataSource<T> {
  filters: Filters = { columns: {}, global: "" };

  constructor(data: T[]) {
    super(data);
  }

  filterColumn(filterValue: string, col: string): void {
    this.filters.columns[col] = filterValue.trim().toLocaleLowerCase();
    this.filter = JSON.stringify(this.filters);
  }

  filterGlobal(filterValue: string): void {
    this.filters.global = filterValue.trim().toLocaleLowerCase();
    this.filter = JSON.stringify(this.filters);
  }
}
