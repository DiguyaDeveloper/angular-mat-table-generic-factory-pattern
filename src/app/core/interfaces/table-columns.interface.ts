import { TableColumnCellTemplate } from "./table-columns-cell-template.interface";
import { TableColumnCell } from "./table-columns-cell.interface";
import { TableColumnHeader } from "./table-columns-header.interface";

export interface TableColumns<T> {
  header: TableColumnHeader;
  cell: TableColumnCell<T> | TableColumnCellTemplate<T>;
}
