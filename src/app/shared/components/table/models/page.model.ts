export class Page<T> {
  content: T[];
  pageable: Pageable;
}

interface Pageable {
  length: number;
  pageIndex: number;
  pageSize: number;
}

interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}
