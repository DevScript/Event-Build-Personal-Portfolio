import React from "react";
import "./App.css";
import Layout from "./hoc/Layouts/Layouts";
import PageBuilder from "./Container/PageBuilder";

function App() {
    return <Layout>
      <PageBuilder/>
    </Layout>;
}

export default App;
