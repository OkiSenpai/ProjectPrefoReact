// MyList.jsx
import svetaImage from "../../assets/photo/SvetaNekad.jpg";
import markoNekad from "../../assets/photo/MarkoNekad.jpg";
import sebaNekad from "../../assets/photo/seba1.webp";
import RenderSmallCards from "./cards/SmallCards";


import React from "react";
import MyQuestions from "./cards/BigCards";

export default function MyList() {
  const questions = [
    {
      id: 1,
      question: "Can you introduce yourself, tell us where you work, and what your position is?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      question: "What are your main responsibilities in your current position?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      question: "Which technologies and programming languages do you use most frequently in your work?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      question: "What does a typical workday look like for you?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 5,
      question: "What are the biggest challenges you face in your job?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 6,
      question: "How do you stay updated with the latest technologies and trends in programming?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 7,
      question: "What skills do you consider most important for success in your field?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 8,
      question: "Can you describe a project you worked on that was particularly interesting or challenging?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 9,
      question: "How do you work in a team and communicate with other team members or clients?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 10,
      question: "What advice would you give to someone who wants to become a programmer?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  const developers = [
    {
      id: 1,
      name: "Svetislav Marijanovic",
      url: svetaImage,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      name: "Marko Vucic",
      url: markoNekad,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      name: "Sebastian Herrera",
      url: sebaNekad,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  return (

    <>
    <RenderSmallCards developers={developers} questions={questions} />

    <div id="card-4" className="bigCard">
      <div className="left">
      <RenderSmallCards developers={developers} questions={questions} />
      </div>
      <div className="right">
       <MyQuestions  questions={questions} />
      </div>
    </div>
    
    </>
  );
}
