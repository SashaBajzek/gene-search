import React from "react";
import VariantResults from "../VariantResults/VariantResults";
import GeneResults from "../GeneResults/GeneResults";
import "./SearchBox.css";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      geneResults: [],
      variantResults: []
    };
    this.fetchGeneResults = this.fetchGeneResults.bind(this);
  }

  fetchGeneResults = searchValue => {
    fetch(`http://clinvitae.invitae.com/api/v1/suggest?genes=${searchValue}`)
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        let geneResults = myJson;
        this.setState({ geneResults: geneResults });
      });
  };

  fetchVariantResults = () => {
    fetch(
      `http://clinvitae.invitae.com/api/v1/variants?q=${this.state.searchValue}`
    )
      .then(function(response) {
        return response.json();
      })
      .then(myJson => {
        let variantResults = myJson;
        this.setState({ variantResults: variantResults });
      });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.fetchVariantResults(event.target.value);
  };

  updateValue = event => {
    const searchValue = event.target.value;
    // if backspace typed, delete variant results to start again
    if (searchValue.length < this.state.searchValue.length) {
      this.backClear();
    } else {
      this.setState({ searchValue });
      if (searchValue.length > 1) {
        this.fetchGeneResults(event.target.value);
      }
    }
  };

  backClear = () => {
    this.setState({ searchValue: "", geneResults: [], variantResults: [] });
  };

  typeAhead = value => {
    this.setState({ searchValue: value });
    this.fetchVariantResults(value);
  };

  checkButtonDisabled = () => {
    if (
      this.state.searchValue.length > 0 &&
      this.state.geneResults.indexOf(this.state.searchValue.toUpperCase()) > -1
    ) {
      return false;
    } else {
      return true;
    }
  };

  render() {
    return (
      <div className="SearchBox">
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.searchValue}
            name="searchValue"
            onChange={this.updateValue}
            placeholder="Search for genes..."
          />
          <button
            type="submit"
            disabled={this.checkButtonDisabled() ? true : false}
            className={
              this.checkButtonDisabled()
                ? "SearchBox__button SearchBox__button--disabled"
                : "SearchBox__button"
            }
          >
            <span className="SearchBox__buttonText">Search</span>
            <span className="SearchBox__buttonImage" />
          </button>
        </form>
        {this.state.variantResults.length > 0 ? (
          <VariantResults variantResults={this.state.variantResults} />
        ) : (
          <GeneResults
            geneResults={this.state.geneResults}
            typeAhead={this.typeAhead}
          />
        )}
      </div>
    );
  }
}

export default SearchBox;
