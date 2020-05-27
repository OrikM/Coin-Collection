import React from "react";
import { withRouter } from "react-router-dom";
import { InputField, SearchDiv, InputS, Button } from "./SearchStyle";
import { countries, metal, quality } from "../../arrays";
import { connect } from "react-redux";
import { filters } from "../../redux/actions/filters";
import {
  FilterClick,
  FlexBox,
  SelectBlock,
  Input,
  InputBlock,
  Title,
  SecondBlock,
} from "./AdvancedSearchStyle";

class Search extends React.Component {
  state = {
    filter: false,
    country: "",
    metal: "",
    quality: "",
    priceFrom: "",
    priceTo: "",
    yearFrom: "",
    yearTo: "",
    search: "",
  };

  handleInput = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value });
  };

  changeState = () => {
    this.setState({ filter: !this.state.filter });
  };

  sendForm = () => {
    this.props.filters(this.state);
    if (!this.props.admin) {
      this.props.history.push("/coins_list/search");
    }
  };

  render() {
    return (
      <div className="mb-3 pb-3">
        <InputField>Input Field</InputField>
        <SearchDiv>
          <InputS
            id="search"
            value={this.state.search}
            onChange={this.handleInput}
          />
          <Button type="button" onClick={this.sendForm}>
            Search
          </Button>
        </SearchDiv>
        <div>
          <button
            type="button"
            className="advanced_button"
            onClick={this.changeState}
          >
            <span>Advanced Filter</span>
            {this.state.filter ? (
              <i className="fa fa-angle-down"></i>
            ) : (
              <i className="fa fa-angle-up"></i>
            )}
          </button>
          <div>
            {this.state.filter ? (
              <FlexBox>
                <div>
                  <SelectBlock>
                    <label htmlFor="country">Issuing country</label>
                    <select
                      id="country"
                      onChange={this.handleInput}
                      defaultValue={this.state.country}
                    >
                      <option value={this.state.country}></option>
                      {countries.map((country, idx) => {
                        return (
                          <option key={idx} value={country}>
                            {country}
                          </option>
                        );
                      })}
                    </select>
                  </SelectBlock>
                  <SelectBlock>
                    <label htmlFor="metal">Metal</label>
                    <select id="metal" onChange={this.handleInput}>
                      <option value={this.state.metal}></option>
                      {metal.map((material, idx) => {
                        return (
                          <option key={idx} value={material}>
                            {material}
                          </option>
                        );
                      })}
                    </select>
                  </SelectBlock>
                  <SelectBlock>
                    <label htmlFor="quality">Quality of the coin</label>
                    <select id="quality" onChange={this.handleInput}>
                      <option value={this.state.quality}></option>
                      {quality.map((quality, idx) => {
                        return (
                          <option key={idx} value={quality}>
                            {quality}
                          </option>
                        );
                      })}
                    </select>
                  </SelectBlock>
                </div>
                <SecondBlock>
                  <div>
                    <Title>Price</Title>
                    <InputBlock>
                      <div>
                        <label htmlFor="priceFrom">from</label>
                        <Input
                          type="number"
                          id="priceFrom"
                          value={this.state.priceFrom}
                          onChange={this.handleInput}
                        />
                      </div>
                      <div>
                        <label htmlFor="priceTo">to</label>
                        <Input
                          type="number"
                          id="priceTo"
                          value={this.state.priceTo}
                          onChange={this.handleInput}
                        />
                      </div>
                    </InputBlock>
                  </div>
                  <div>
                    <Title>Year of issue</Title>
                    <InputBlock>
                      <div>
                        <label htmlFor="yearFrom">from</label>
                        <Input
                          type="number"
                          id="yearFrom"
                          value={this.state.yearFrom}
                          onChange={this.handleInput}
                        />
                      </div>
                      <div>
                        <label htmlFor="yearTo">to</label>
                        <Input
                          type="number"
                          id="yearTo"
                          value={this.state.yearTo}
                          onChange={this.handleInput}
                        />
                      </div>
                    </InputBlock>
                  </div>
                </SecondBlock>
              </FlexBox>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    );
  }
}
const SearchWithRouter = withRouter(Search);
export default connect(null, { filters })(SearchWithRouter);
