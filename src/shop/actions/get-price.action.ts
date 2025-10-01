import { gutiMotors } from "@/api/GutiMotosAPI";
import type { PriceResponse } from "../interfaces/Price.response";



export const getPrice = async (id: string,type:string): Promise<PriceResponse> => {
  try {
     const { data } = await gutiMotors.get<PriceResponse>(`/motorcycles/api/motorcycle-price/${id}/${type}`,{
      params:{
        product_type: 'motorcycle'
      }
     });
    return data;
  } catch (error) {
    console.log(error)
    throw error;
  }
}