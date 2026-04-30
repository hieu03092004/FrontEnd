import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { getListTopic } from "../../services/topicServices";
export const Topic=()=>{
    const [topics,setTopics]=useState([]);
    useEffect(()=>{
        const fetchApi=async()=>{
            const response=await getListTopic();
            setTopics(response);
        }
        fetchApi();
        
    },[])
    return (
        <>
            {topics.length>0 &&(
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
                        {topics.map((item,index)=>{
                            return(
                                <tr key={index}>
                                <td>
                                    {item.id}
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    <Link to={`/quiz/${item.id}`}>Làm bài</Link>
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