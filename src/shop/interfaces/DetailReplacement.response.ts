export interface DetailReplacementResponse {
  success: boolean;
  message: string;
  data: DataDetailReplacement;
}

export interface DataDetailReplacement {
  product_code: string;
  photos: Photo[];
}

export interface Photo {
  id: number;
  photo: string;
}
