import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BusPlusTime from "./containers/BusPlusTime/BusPlusTime";

class App extends Component {
  render() {
    return (
      <Layout>
        <h1 className="text-3xl font-bold underline text-center mb-4">
          Da4aBus
        </h1>
        <BusPlusTime />
      </Layout>
    );
  }
}

export default App;
