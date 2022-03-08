export interface TableColumns<T> {
  header: TableColumnHeader;
  cell: TableColumnCell<T>;
}

export interface TableColumnHeader {
  displayName: string;
  /**
   * Definition of column data *required to material table
   */
  columnDef: string;
  /**
   * Define if column has sortable
   */
  sortable?: boolean;
  /**
   * Custom style to header
   */
  style?: Partial<CSSStyleDeclaration>;
}

export interface TableColumnCell<T> {
  /**
   * Value to display in cell
   */
  getValue: (value: T) => string;
  /**
   * Custom style to cell
   */
  style?: Partial<CSSStyleDeclaration>;
}
