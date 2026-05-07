import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeRaw from 'rehype-raw';
import '@material/web/textfield/outlined-text-field.js';
import "@material/web/iconbutton/filled-icon-button.js";
import '@material/web/button/outlined-button.js';

const Practice = ({ question, correctAnswer, solution }) => {
    const [userAnswer, setUserAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);
    const [showSolution, setShowSolution] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleCheck = () => {
        if (userAnswer.trim().toLowerCase() === correctAnswer.trim().toLowerCase()) {
            setIsCorrect(true);
            setIsError(false);
        } else {
            setIsError(true);
        }
    };

    const handleInput = (event) => {
        setUserAnswer(event.target.value);
        if (isError) setIsError(false);
    };

    return (

        <div className="practice-card">
            <div className="question-text">
                <ReactMarkdown remarkPlugins={[remarkMath]}
                    rehypePlugins={[rehypeRaw, rehypeKatex]}>
                    {question}
                </ReactMarkdown>
            </div>
            <div className="input-section">
                <md-outlined-text-field
                    className={`answer-input ${isCorrect ? "input-success" : ""}`}
                    type="text"
                    value={userAnswer}
                    onInput={(event) => setUserAnswer(event.target.value)}
                    label="Ответ"
                    error={isError || undefined}
                    error-text="Неверно, попробуйте еще раз"
                    supporting-text={isCorrect ? "Отлично! Ответ верный" : ""}
                >
                </md-outlined-text-field>
                <md-filled-button
                    className='button-check'
                    onClick={handleCheck}>
                    Проверить
                </md-filled-button>
            </div>
            <md-outlined-button
                className="solution-button"
                onClick={() => setShowSolution(!showSolution)}
            >
                {showSolution ? "Скрыть решение" : "Посмотреть решение"}
            </md-outlined-button>
            {showSolution && (
                <div className="solution-section">
                    <ReactMarkdown remarkPlugins={[remarkMath]}
                        rehypePlugins={[rehypeRaw, rehypeKatex]}>
                        {solution}
                    </ReactMarkdown>
                </div>
            )}
        </div>
    );
};

export default Practice;