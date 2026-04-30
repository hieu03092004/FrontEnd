import { getCookie } from "../helpers/cookie";
import { get } from "../ultils/request";
export const getAnswerByUserId=async()=>{
    const userId=getCookie("id");
    const result=await get(`answer/?userId=${userId}`);
    return result;
}
export const getAnswer=async(answerId)=>{
    const result=await get(`answer/${answerId}`);
    return result;
}