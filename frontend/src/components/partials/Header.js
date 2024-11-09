import React, { Fragment } from "react";
import HighlightIcon from "@mui/icons-material/Highlight";

function Header() {
    return(
        <Fragment>
            <header>
                <h1>
                    <HighlightIcon />
                    Keeper
                </h1>
            </header>
        </Fragment>
    );
}

export default Header;