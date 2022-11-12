import classNames from "classnames";
import React, { useState } from "react";
import styled from "styled-components";

const ContentWrap = styled.div`
  display: block !important;
`;

export default function Accordion({ date, title, children, isOpen, onClick }) {
  //   const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={classNames("accordion", { active: isOpen })}>
      <div className="accordion__title" onClick={onClick}>
        <div className="date">{date}</div>
        <h3>{title}</h3>
      </div>
      {isOpen && <ContentWrap className="content">{children}</ContentWrap>}
    </div>
  );
}
