import { useDrop } from "react-dnd";
import React, { useState } from "react";
import apiService from "../../sevices/api";
import CandidateCard from "../candidateCard/candidateCard";
import "./recruitmentStep.scss";

function RecruitmentStep(props) {
  const [dropArea, setDropArea] = useState([]);
  const [{ isOver }, dropRef] = useDrop({
    accept: "candidate",
    drop: (item) =>
      setDropArea((dropArea) =>
        !dropArea.includes(item)
          ? [
              ...dropArea,
              item,
              updateCandidateProcessStep(item.props.candidate, props.step.id),
            ]
          : dropArea
      ),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const updateCandidateProcessStep = (candidate, step) => {
    apiService
      .updateProcessStep(candidate, step)
      .then(window.location.reload(false));
  };

  return (
    <>
      <div className="recruitment-step-container" ref={dropRef}>
        <h2>{props.step.stepName}</h2>
        {props.candidates.map((candidate, index) => (
          <div key={index}>
            <CandidateCard draggable candidate={candidate}></CandidateCard>
          </div>
        ))}
        {isOver}
      </div>
    </>
  );
}
export default RecruitmentStep;
