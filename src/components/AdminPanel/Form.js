import React, { useEffect, useState } from "react";
import "./admin.css";
import { InputName } from "../styled-components/styles";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import {
  changeHandler,
  clearCoinInfo,
  clearFields,
  getCoinInfo,
} from "../../redux/actions/coin";
import InputField from "../styled-components/InputField";
import Description from "../styled-components/Description";
import ButtonsToManage from "../styled-components/ButtonsToManage";

function Form({
  coin,
  changeHandler,
  onSubmit,
  getCoinInfo,
  clearFields,
  clearCoinInfo,
  id,
  query,
  edit,
}) {
  const [canceled, cancel] = useState(false);

  useEffect(() => {
    edit && getCoinInfo(id);
    console.log(!query || canceled);
    return () => {
      canceled && clearFields();
      clearCoinInfo();
    };
  }, []);
  // query меняется при завершении запроса. см actions/coin.js :63
  return !query || canceled ? (
    <Redirect to="/admin_panel/" />
  ) : (
    <div className="row">
      <div className="col-md-4">
        <InputField
          name="name"
          value={coin.name || ""}
          onChange={changeHandler}
          required
        >
          Coin name
        </InputField>
        <InputField
          required
          name="face_value"
          value={coin["face_value"] || ""}
          onChange={changeHandler}
        >
          Face value
        </InputField>
        <InputField
          name="year_issue"
          value={coin["year_issue"] || ""}
          onChange={changeHandler}
        >
          Year of issue
        </InputField>
        <InputField
          name="price"
          value={coin.price || ""}
          onChange={changeHandler}
        >
          Price
        </InputField>
        <InputField
          name="country"
          value={coin.country || ""}
          onChange={changeHandler}
        >
          Country
        </InputField>
        <InputField
          name="metal"
          value={coin.metal || ""}
          onChange={changeHandler}
        >
          Composition
        </InputField>
      </div>
      <div className="col-md-4">
        <Description
          name="short_desc"
          value={coin["short_desc"] || ""}
          onChange={changeHandler}
        >
          Short description
        </Description>
        <Description
          name="long_desc"
          value={coin["long_desc"] || ""}
          onChange={changeHandler}
        >
          Long description
        </Description>
        <InputField
          name="quality"
          value={coin.quality || ""}
          onChange={changeHandler}
        >
          Quality of the coin
        </InputField>
        <InputField
          name="weight"
          value={coin.weight || ""}
          onChange={changeHandler}
        >
          Weight
        </InputField>
      </div>
      <div className="col-md-4">
        <div className="fields">
          <InputName>Group</InputName>
          <select
            style={{ width: "100%", marginBottom: "10px" }}
            defaultValue={coin.typeId || ""}
            onChange={changeHandler}
          >
            <option value="1">Bullion coins </option>
            <option value="2">Exclusive coins </option>
            <option value="3">Commemorative coins </option>
          </select>
          <InputField
            name="obverse_img"
            value={coin["obverse_img"] || ""}
            onChange={changeHandler}
          >
            Link to obverse image
          </InputField>
          <InputField
            name="reverse_img"
            value={coin["reverse_img"] || ""}
            onChange={changeHandler}
          >
            Link to reverse image
          </InputField>
        </div>
        <div className="buttons">
          <ButtonsToManage onDelete={() => cancel(true)} onEdit={onSubmit} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  coin: state.coin.coin,
  query: state.coin.query,
  loaded: state.coin.loaded,
});

export default connect(mapStateToProps, {
  getCoinInfo,
  changeHandler,
  clearFields,
  clearCoinInfo,
})(Form);
