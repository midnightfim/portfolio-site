import React from 'react'
import Header from "./Header";
import Footer from "./Footer";
import {withRouter} from 'react-router-dom';

const HeaderWithRouter = withRouter(Header);

export default function Layout(props) {
    console.log(props);

    return (
        <div>
            <HeaderWithRouter />
                {props.children}
            <Footer />
        </div>
    )
}
