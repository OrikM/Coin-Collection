import React from "react";
import {
  Wrapper,
  InputWrapper,
  TextAreaBlock,
  Textarea,
  InputWrapperLast,
  ButtonDiv,
  SaveButton,
  CancelButton,
  TexBlock
} from "./NewCoinStyle";  
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import Avatar from "../Photo/Avatar";

class Edit extends React.Component {
  render() {
    return (
      <div className="main-div">
        <Header title="Admin Panel" />
        <Wrapper className="wrapper">
          <InputWrapper className="input-wrapper">
            <div>
              <label for="header">Coin Name</label>
              <input type="text" id="header" />
            </div>
            <div>
              <label for="face_value">Face Value</label>
              <input type="text" id="face_value" />
            </div>
            <div>
              <label for="year">Year of issue</label>
              <input type="number" id="year" />
            </div>
            <div>
              <label for="price">Price</label>
              <input type="number" id="price" />
            </div>
            <div>
              <label for="country">Country</label>
              <input type="text" id="country" />
            </div>
            <div>
              <label for="metal">Metal</label>
              <input type="text" id="metal" />
            </div>
          </InputWrapper>
          <TexBlock>
            <TextAreaBlock className="textarea">
              <label for="short-desc">Short Description</label>
              <Textarea id="short-desc" rows="6" cols="50" />
            </TextAreaBlock>
            <TextAreaBlock className="textarea">
              <label for="long-desc">Long Description</label>
              <Textarea id="long-desc" rows="6" cols="50" />
            </TextAreaBlock>
            
              <div>
                <label for="quality">Quality of the Coin</label>
                <input type="text" id="quality" />
              </div>
              <div>
                <label for="weight">Weight</label>
                <input type="number" id="weight" />
              </div>
            
          </TexBlock>
          <InputWrapperLast>
            <div className="input-wrapper">
              <div>
                <Avatar photo="Upload revers of the coin"/>
              </div>
              <div>
                <Avatar photo="Upload avers of the coin"/>
              </div>
            </div>
            <ButtonDiv>
              <Link to="coins_list">
                <SaveButton type="submit">Save</SaveButton>
              </Link>
              <Link to="/coins_list">
                <CancelButton type="button">Cancel</CancelButton>
              </Link>
            </ButtonDiv>
          </InputWrapperLast>
        </Wrapper>
      </div>
    );
  }
}

export default Edit;
