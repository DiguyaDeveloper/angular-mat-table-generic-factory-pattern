import { ElementRef } from "@angular/core";

export interface TableColumnCellTemplate<T> {
  /**
   * Template to display in cell
   */
  templateRef: ElementRef;
  /**
   * Add action to click a template
   */
  action?: (value: T) => void;
}
