export interface TableColumnCell<T> {
  /**
   * Value to display in cell
   */
  getValue: (value: T) => string;
  /**
   * Custom style to cell
   */
  getStyle?: (value?: T) => Partial<CSSStyleDeclaration>;
}
