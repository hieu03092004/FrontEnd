import { post } from "../ultils/request";
export const createAnswer=async(options)=>{
    const result=await post(`answer`,options);
    return result;
}