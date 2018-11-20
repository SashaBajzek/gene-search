import React from "react";
import "./GeneResults.css";

const GeneResults = props => (
  <ul className="GeneResults__list">
    {props.geneResults.map(result => (
      <li
        className="GeneResults__listItem"
        key={result}
        onClick={() => props.typeAhead(result)}
        tabIndex={1}
      >
        {result}
      </li>
    ))}
  </ul>
);

export default GeneResults;
