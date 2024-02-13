export type Product={
    id: number;
    name:string;
    onlineStock:number;
    price: number;
    originalPrice:number;
    deliveryType: string;
    brandId:number;
    brand:{
        id:number;
        nameKr: string;
        nameEn: string;
    }
}