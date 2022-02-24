import { TemplateRef } from '@angular/core';

export interface TableColumns {
  columnDef: string;
  header: string;
  sortable?: boolean;
  style?: Partial<CSSStyleDeclaration>;
}
