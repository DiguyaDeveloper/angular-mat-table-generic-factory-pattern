import { ComponentType } from "@angular/cdk/portal";
import {
  ComponentFactory,
  ComponentRef,
  ElementRef,
  TemplateRef,
} from "@angular/core";

export interface TableColumns<T> {
  header: TableColumnHeader;
  cell: TableColumnCell<T> | TableColumnCellTemplate<T>;
}

export class TableColumnHeader {
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

  alwaysDisplayed?: true;
}

export class TableColumnCell<T> {
  /**
   * Value to display in cell
   */
  getValue: (value: T) => string;
  /**
   * Custom style to cell
   */
  style?: Partial<CSSStyleDeclaration>;
}

export class TableColumnCellTemplate<T> {
  /**
   * Template to display in cell
   */
  templateRef: ElementRef;
  action?: (value: T) => void;
}
