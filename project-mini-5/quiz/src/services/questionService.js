import { get } from "../ultils/request";
export const getListQuestions=async(topicId)=>{
    const result=await get(`questions?topicId=${topicId}`);
    return result;

}