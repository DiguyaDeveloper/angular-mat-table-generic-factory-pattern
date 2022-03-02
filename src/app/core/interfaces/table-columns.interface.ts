import { TemplateRef } from "@angular/core";

export interface TableColumns<T> {
  columnDef: string;
  header: string;
  cell: (value: T) => string;
  sortable?: boolean;
  style?: Partial<CSSStyleDeclaration>;
}
