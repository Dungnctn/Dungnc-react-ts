import React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Nav from "../components/nav";
import BorderNew from "./borderNew";
import Info from "./info";
import Slide from "./slide";

type Props = {}
const HomePage = (props: Props ) => {
    return (
        <div>
            <Header />
            <Slide />
            <BorderNew />
            <Footer />
        </div>
    )
}

export default HomePage;