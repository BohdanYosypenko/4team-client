export class sportLookup{
    id!: number | null;
    sportTypeFID!:number;
    lookupCategoryFID!:number;
    timeStart!:Date | null;
    timeEnd!:Date | null;
    latitude!:number;
    longitude!:number;
    priceStart!:number | null;
    priceEnd!:number | null;
    ageStart!:number | null;
    ageEnd!:number | null;
    gender!:string;
}