import React from "react";
import "./VariantResults.css";

const VariantResults = props => (
  <section className="VariantResults">
    <div className="VariantResults__total">
      {props.variantResults.length} Results
    </div>
    <table>
      <thead>
        <tr>
          <th>Gene</th>
          <th>Nucleotide Change</th>
          <th>Protein Change</th>
          <th>Alias</th>
          <th>Region</th>
          <th>Reported Classification</th>
          <th>Last Evaluated</th>
          <th>Last Updated</th>
          <th>More Info</th>
        </tr>
      </thead>
      <tbody>
        {props.variantResults.map(result => (
          <tr key={result.id}>
            <td>{result.gene}</td>
            <td>
              {result.nucleotideChanges.map(change => (
                <div key={change}>{change}</div>
              ))}
            </td>
            <td>{result.proteinChange}</td>
            <td>{result.alias}</td>
            <td>{result.region}</td>
            <td>{result.reportedClassification}</td>
            <td>{result.lastEvaluated}</td>
            <td>{result.lastUpdated}</td>
            <td>
              <a href={result.url}>More Info</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

export default VariantResults;
