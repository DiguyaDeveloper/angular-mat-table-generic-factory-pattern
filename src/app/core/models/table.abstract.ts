import { TableColumns } from "src/app/core/interfaces/table-columns.interface";
import { Table } from "../../shared/components/table/models/table.class";

export abstract class TableAbstract<T> {
  tableInstance: Table<T>;

  constructor(columns: TableColumns<T>[]) {
    this.tableInstance = new Table<T>();
  }
}
