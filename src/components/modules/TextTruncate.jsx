"use client";

import TT from "react-text-truncate";

const TextTruncate = ({ element, line, text }) => {
  return <TT element={element} line={line} truncateText="..." text={text} />;
};

export default TextTruncate;
