import React, { Component } from "react";

import NavBar from "../../Components/Home/NavBar/NavBar";
import Aux from "../Auxilary/Auxilary";
import Background from "../../Components/Background/Backgound";

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Background />
                <NavBar />
                <main onScroll={this.scrollHandler}>{this.props.children}</main>
            </Aux>
        );
    }
}

export default Layout;
