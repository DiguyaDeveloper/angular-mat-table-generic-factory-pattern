import { ElementRef } from "@angular/core";
interface TableColumnHeader {
  displayName: string;
  /**
   * Definition of column data *required to material table
   */
  columnDef: string;
  /**
   * Define if column has sortable
   */
  hasSorting?: boolean;
  /**
   * Custom style to header
   */
  style?: Partial<CSSStyleDeclaration>;
}

interface TableColumnCell<T> {
  /**
   * Value to display in cell
   */
  getValue: (value: T) => string;
  /**
   * Custom style to cell
   */
  getStyle?: (value?: T) => Partial<CSSStyleDeclaration>;
}

interface TableColumnCellTemplate<T> {
  /**
   * Template to display in cell
   */
  templateRef: ElementRef;
  /**
   * Add action to click a template
   */
  action?: (value: T) => void;
}

export interface TableColumns<T = object> {
  header: TableColumnHeader;
  cell: TableColumnCell<T> | TableColumnCellTemplate<T>;
}
