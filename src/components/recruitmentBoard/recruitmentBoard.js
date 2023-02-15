import apiService from "../../sevices/api";
import React, { useState, useEffect } from "react";
import AddCandidateModal from "../addCandidateModal/addCandidateModal";
import RecruitmentStep from "../recruitmentStep/recruitmentStep";
import "./recruitmentBoard.scss";

function RectuitmentBoard(props) {
  const [candidates, setCandidates] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);

  const recruitmentSteps = [
    { stepName: "Kontakt", id: 1 },
    { stepName: "Dialog", id: 2 },
    { stepName: "Intervju", id: 3 },
    { stepName: "Erbjudande", id: 4 },
    { stepName: "Avslutad", id: 5 },
  ];

  useEffect(() => {
    getAllCandidates();
  }, []);

  const filteredCandidates = (candidates, processStep) => {
    var filtered = candidates.filter(
      (candidate) => candidate.processStep === processStep
    );
    if (searchTerm) {
      filtered = filtered.filter(
        (candidate) =>
          candidate.firstName
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          candidate.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          candidate.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    return filtered;
  };
  const getAllCandidates = () => {
    apiService.getCandidates().then((response) => {
      setCandidates(response);
    });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <div className="recruitment-board-container">
        <h1>Application tracking system</h1>
        <AddCandidateModal></AddCandidateModal>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Sök..."
            aria-label="sök"
            onChange={handleSearch}
          />
        </div>
        {candidates && recruitmentSteps ? (
          recruitmentSteps.map((step, index) => (
            <div key={index}>
              <RecruitmentStep
                candidates={filteredCandidates(candidates, step.id)}
                step={step}
              ></RecruitmentStep>
            </div>
          ))
        ) : (
          <div>loading...</div>
        )}
      </div>
    </>
  );
}
export default RectuitmentBoard;
