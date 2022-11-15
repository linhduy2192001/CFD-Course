import classNames from "classnames";
import React, { createContext, useContext, useState } from "react";
import styled from "styled-components";

const ContentWrap = styled.div`
  display: block !important;
`;

export default function Accordion({ date, title, children, isOpen, onClick }) {
  //   const [isOpen, setIsOpen] = useState(false);
  const { activeContent, onActive } = useContext(Context);
  return (
    <div
      className={classNames("accordion", { active: isOpen || activeContent })}
    >
      <div className="accordion__title" onClick={onClick}>
        <div className="date">{date}</div>
        <h3>{title}</h3>
      </div>
      {isOpen && <ContentWrap className="content">{children}</ContentWrap>}
    </div>
  );
}

const Context = createContext({});
Accordion.Group = ({ children }) => {
  const [activeContent, setActiveContent] = useState();
  const onActive = (i) => {
    setActiveContent(i === activeContent ? undefined : i);
  };
  return (
    <Context.Provider value={{ activeContent, onActive }}>
      {children}
    </Context.Provider>
  );
};
