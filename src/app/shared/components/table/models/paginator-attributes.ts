export class PaginatorAttributes {
  pageSize: number = 10;
  pageIndex: number = 0;
  pageSizeOptions: number[] = [5, 10, 20, 100];
  showFirstLastButtons: boolean = true;
  length: number = 0;
}

export type PaginatorAttributesToSet = Omit<
  PaginatorAttributes,
  "pageSizeOptions" | "showFirstLastButtons"
>;
