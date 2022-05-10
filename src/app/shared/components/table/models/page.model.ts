export class Page<T> {
  content: T[];
  pageable: Pageable;
  totalPages: number;
  totalElements: number;
  sort: Sort;
  numberOfElements: number;
}

interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
  paged: boolean;
}

interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
}
