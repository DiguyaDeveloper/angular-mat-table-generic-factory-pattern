import { TableColumns } from "src/app/core/interfaces/table-columns.interface";
import { Table } from "./tables/table.class";

export abstract class TableAbstract<T> {
  table: Table<T>;

  constructor(columns: TableColumns<T>[]) {
    this.table = new Table<T>(columns);
  }
}
