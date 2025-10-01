import { create } from "zustand";


type ProductStore={
    idProduct:string,
    setProduct:(id:string)=>void
    idslug:string,
    setIdSlug:(id:string)=>void

}

export const useProductStore = create<ProductStore>()((set) => ({
    idProduct: "",
    idslug:"",
    setProduct: (id: string) => set({ idProduct: id }),
    setIdSlug: (id: string) => set({ idslug: id }),
  }));