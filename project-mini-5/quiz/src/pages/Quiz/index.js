import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { getTopic } from "../../services/topicServices";
import { getListQuestions } from "../../services/questionService";
import { getCookie } from "../../helpers/cookie";
import { createAnswer } from "../../services/quizService";
import {useNavigate} from "react-router-dom";
export const Quiz=()=>{
    const [dataTopic,setDataTopic]=useState();
    const [questions,setDataQuestions]=useState([]);
    const params=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        const fetchApi=async()=>{
            const response=await getTopic(params.id);
            setDataTopic(response);
        }
        fetchApi();
    },[]);
     useEffect(()=>{
        const fetchApi=async()=>{
            const response=await getListQuestions(params.id);
            setDataQuestions(response);
        }
        fetchApi();
    },[]);
    const handleSubmit=async(e)=>{
        e.preventDefault();
        let selectedAnswers=[];
        for(let i=0;i<e.target.elements.length;i++){
            if(e.target.elements[i].checked){
                const name=e.target.elements[i].name;
                const value=e.target.elements[i].value;
                selectedAnswers.push({
                    questionId:parseInt(name),
                    answer:parseInt(value),
                
                })
            }
        }
        // console.log(selectedAnswers);
        let options={
            userId: parseInt(getCookie("id")),
            topicId: parseInt(params.id),
            answers:selectedAnswers
        }
       
        const response=await createAnswer(options);
        console.log(response);
        if(response){
            navigate(`/result/${response.id}`);
        }
        else{
            alert("Nộp bài không thành công");
        }

    }
    return(
        <>
           <h2>Bài quiz chủ đề:{dataTopic &&(<>{dataTopic.name}</>)}</h2>
           <div className="form-quiz">
                <form onSubmit={handleSubmit}>
                    {questions.map((item,index)=>{
                        return(
                            <div className="form-quiz__item" key={index}>
                                <p>Câu {index+1}:{item.question}</p>
                                {item.answers.map((itemAns,indexAns)=>{
                                    return(
                                        <div className="form-quiz__answer" key={indexAns}>
                                            <input type="radio" name={item.id} id={`quiz-${item.id}-${indexAns}`} value={indexAns}></input>
                                            <label htmlFor={`quiz-${item.id}-${indexAns}`}>{itemAns}</label>
                                        </div>
                                    )
                                })}
                            </div>
                            )
                        })}
                    <button>Nộp bài</button>
                </form>
                

           </div>
        </>
    )
}