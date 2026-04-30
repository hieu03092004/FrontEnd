import { useState } from "react"
import { getAnswerByUserId } from "../../services/answerService";
import { useEffect } from "react";
import { getListTopic } from "../../services/topicServices";
import {Link} from "react-router-dom";
export const Answer=()=>{
    const [dataAnswer,setDataAnswers]=useState([]);
    useEffect(()=>{
            const fetchApi=async()=>{
                const answerByUserId=await getAnswerByUserId();
                const topic=await getListTopic();
                setDataAnswers(answerByUserId);
                 let result=[];
                for(let i=0;i<answerByUserId.length;i++){
                    result.push({
                        ...topic.find(item=>item.id===answerByUserId[i].topicId),
                        ...answerByUserId[i]

                    })
                }
                setDataAnswers(result.reverse());
            }
                

            fetchApi();
            
    },[]);
    console.log(dataAnswer);
   return (
        <>
            {dataAnswer.length>0 &&(
                <table>
                    <thead>
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>
                                Tên chủ đề
                            </th>
                            <th>

                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {dataAnswer.map((item,index)=>{
                            return(
                                <tr key={index}>
                                <td>
                                    {item.id}
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    <Link to={`/result/${item.id}`}>Xem chi tiết</Link>
                                </td>
                            </tr>
                            )
                        })}
                       
                    </tbody>
                </table>
            )}
            
        </>
    )
}