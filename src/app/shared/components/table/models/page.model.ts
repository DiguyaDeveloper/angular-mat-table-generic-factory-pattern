export class Page<T> {
  content: T[];
  pageable: Pageable;
  sort: Sort;
}

interface Pageable {
  totalPages: number;
  pageNumber: number;
  pageSize: number;
  numberOfElements: number;
}

interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}
