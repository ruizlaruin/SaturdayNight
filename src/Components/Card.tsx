import {
  CCard,
  CRow,
  CCol,
  CCardImage,
  CCardBody,
  CCardTitle,
  CCardText,
} from "@coreui/react";
import { Result } from "../Interfaces/apiInterface";
import { useState } from "react";

interface CardProps {
  chars: Result | undefined;
}

const Card = (props: CardProps) => {
  const [placeholder, setPlaceholder] = useState<string>("placeholder");

  return (
    <CCard className="mb-3 placeholder-glow" style={{ maxWidth: "540px" }}>
      <CRow className="g-0">
        <CCol md={4}>
          <CCardImage
            src={props.chars?.image}
            className={`${placeholder}`}
            onLoad={() => setPlaceholder("")}
          />
        </CCol>
        <CCol md={8}>
          <CCardBody>
            <CCardTitle className={`${placeholder}`}>
              {props.chars?.name}
            </CCardTitle>
            <CCardText className={`${placeholder}`}>
              Species: {props.chars?.species} <br />
              Gender: {props.chars?.gender} <br />
              Status: {props.chars?.status}
            </CCardText>
            <CCardText className={`${placeholder}`}>
              <small className="text-medium-emphasis">
                <>
                  {props.chars?.episode.map((item, i) => {
                    <li key={i} className={`${placeholder}`}>
                      {" "}
                      - {item}
                    </li>;
                  })}
                </>
              </small>
            </CCardText>
          </CCardBody>
        </CCol>
      </CRow>
    </CCard>
  );
};
export default Card;
