import React from "react";
import {Buttons, Button} from "./styles";

export default ({onEdit, onDelete}) =>
    <Buttons>
        <Button onClick={onEdit}>Save</Button>
        <Button onClick={onDelete} negative>Cancel</Button>
    </Buttons>