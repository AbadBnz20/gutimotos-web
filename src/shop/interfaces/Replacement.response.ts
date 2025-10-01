export interface ReplacementResponse {
  next_cursor: string | null;
  previous_cursor: string | null;
  data: Replacement[];
}

export interface Replacement {
  id: number;
  product: string;
  photo: string;
  product_code: string;
  brand_name:string | null;
  measure_name: string;
  product_description: string;
  calculated_price: number;
  created: Date;
}
