import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, tap } from "rxjs";

export interface InventoryProduct {
  number: number;
  id: string;
  category?: string;
  name: string;
  description?: string;
  tags?: string[];
  sku?: string | null;
  barcode?: string | null;
  brand?: string | null;
  vendor: string | null;
  stock: number;
  reserved: number;
  cost: number;
  basePrice: number;
  taxPercent: number;
  price: number;
  weight: number;
  thumbnail: string;
  images: string[];
  active: boolean;
}

export interface InventoryPagination {
  length: number;
  size: number;
  page: number;
  lastPage: number;
  startIndex: number;
  endIndex: number;
}

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  private _products: BehaviorSubject<InventoryProduct[]> = new BehaviorSubject(
    null
  );

  private _pagination: BehaviorSubject<InventoryPagination> =
    new BehaviorSubject(null);

  constructor(private _httpClient: HttpClient) {}

  /**
   * Getter for products
   */
  get products$(): Observable<InventoryProduct[]> {
    return this._products.asObservable();
  }

  /**
   * Getter for pagination
   */
  get pagination$(): Observable<InventoryPagination> {
    return this._pagination.asObservable();
  }

  /**
   * Get products
   *
   *
   * @param page
   * @param size
   * @param sort
   * @param order
   * @param search
   */
  getProducts(
    page: number = 0,
    size: number = 10,
    sort: string = "name",
    order: "asc" | "desc" | "" = "asc",
    search: string = ""
  ): Observable<{
    pagination: InventoryPagination;
    products: InventoryProduct[];
  }> {
    debugger;
    return this._httpClient
      .get<{
        pagination: InventoryPagination;
        products: InventoryProduct[];
      }>("api/apps/ecommerce/inventory/products", {
        params: {
          page: "" + page,
          size: "" + size,
          sort,
          order,
          search,
        },
      })
      .pipe(
        tap((response) => {
          this._pagination.next(response.pagination);
          this._products.next(response.products);
        })
      );
  }
}
