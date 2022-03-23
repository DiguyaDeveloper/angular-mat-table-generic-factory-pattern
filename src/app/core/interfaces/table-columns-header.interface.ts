export interface TableColumnHeader {
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
