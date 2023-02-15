import { useDrag } from "react-dnd";
import "./candidateCard.scss";
import UpdateCandidateModal from "../UpdateCandidateModal/updateCandidateModal";

function CandidateCard(props) {
  const [{ isDragging }, dragRef] = useDrag({
    type: "candidate",
    item: { props },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  return (
    <>
      <div className="candidate-card candidate-card-container" ref={dragRef}>
        <div className="card bg-light mb-3">
          <div className="card-header">
            <h5>
              {props.candidate.firstName} {props.candidate.lastName}
              <UpdateCandidateModal
                candidate={props.candidate}
              ></UpdateCandidateModal>
            </h5>
          </div>
          <div className="card-body">
            <p className="card-text">{props.candidate.email}</p>
            <p className="card-text">
              {props.candidate.street}, {props.candidate.zipCode}
            </p>
            <p className="card-text">{props.candidate.town}</p>
            <p className="card-text">{props.candidate.age} år</p>
          </div>
        </div>
        {isDragging}
      </div>
    </>
  );
}
export default CandidateCard;
