import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { getAnswer } from "../../services/answerService";
import { getListQuestions } from "../../services/questionService";
import "./Result.css";
export const Result=()=>{
    const params=useParams();
    const [dataResult,setDataResult]=useState([]);
    useEffect(()=>{
        const fetchApi=async()=>{
            const dataAnswer=await getAnswer(params.id);
            const dataQuestions=await getListQuestions(dataAnswer.topicId);
            // Xuất dạng chuỗi JSON (pretty) để dễ xem cấu trúc
            console.log('dataAnswer JSON:', JSON.stringify(dataAnswer, null, 2));
            console.log('dataQuestions JSON:', JSON.stringify(dataQuestions, null, 2));
            let resultFinal=[];
            for(let i=0;i<dataQuestions.length;i++){
                resultFinal.push({
                    ...dataQuestions[i],
                    ...dataAnswer.answers.find(item=>item.questionId===dataQuestions[i].id)
                })
            }
            setDataResult(resultFinal);
        }
        fetchApi();
    },[]);
    return(
        <>
            <h1>Kết quả:</h1>
            <div className="result_list">
                {dataResult.map((item,index)=>{
                    return(
                        <div className="result_item" key={item.id}>
                            <p>Câu {index+1}:{item.question}
                                {item.answer === item.correctAnswer ? (
                                    <span className="result__tag result__tag--true"> Đúng</span>
                                ) : (
                                    <span className="result__tag result__tag--false">Sai</span>
                                )}
                            </p>
                                {item.answers.map((itemAns,indexAns)=>{
                                    let className="";
                                    let checked=false;
                                    if(item.answer===indexAns){
                                        className="result__item--selected";
                                        checked=true;
                                    }
                                    if(item.correctAnswer==indexAns){
                                        className+=" result__item--result";
                                    }
                                    return(
                                        <div className="result__answer" key={indexAns}>
                                            <input type="radio" checked={checked} disabled/>
                                            <label className={className}>{itemAns}</label>
                                        </div>
                                    )
                                })}
                        </div>

                    )
                })}

            </div>
        </>
    )
}