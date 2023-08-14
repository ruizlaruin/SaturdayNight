import { CCard, CCardImage, CCardBody, CCardText } from "@coreui/react";
import { Result } from "../Interfaces/apiInterface";
import { useState } from "react";

interface CardsProps {
  chars: Result | undefined;
}

const Cards = (props: CardsProps) => {
  const [placeholder, setPlaceholder] = useState<string>("placeholder");

  return (
    <CCard style={{ width: "18rem" }}>
      <CCardImage
        orientation="top"
        src={props.chars?.image}
        className={`${placeholder}`}
        onLoad={() => setPlaceholder("")}
      />
      <CCardBody className="bg-warning">
        <CCardText className="lh-1">
          <p className={`${placeholder}`}>Name: {props.chars?.name}</p>
          <p className={`${placeholder}`}>Species: {props.chars?.species}</p>
          <p className={`${placeholder}`}>Status: {props.chars?.status}</p>
        </CCardText>
      </CCardBody>
    </CCard>
  );
};
export default Cards;
