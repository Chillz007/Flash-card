import React, { useState } from "react";
import FlashList from "./FlashList";
import { Questions } from "../constant/data";

export default function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div className="flashcards">
      {Questions.map((question) => {
        return (
          <div
            key={question.id}
            onClick={() => handleClick(question.id)}
            className={question.id === selectedId ? "selected" : ""}
          >
            <p>
              {question.id === selectedId ? question.answer : question.question}
            </p>
          </div>
        );
      })}
    </div>
  );
}
