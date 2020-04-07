import React, { useEffect } from "react";

import {useLocation} from "react-router-dom";

const UseQuery = (props) => {   
    const variable = new URLSearchParams(`${props.name}`);
    useEffect(() => {
        return variable;
    }, )
}

export default UseQuery;