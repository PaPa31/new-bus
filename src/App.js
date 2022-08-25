import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import BusPlusTimeBuilder from "./containers/BusPlusTimeBuilder/BusPlusTimeBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BusPlusTimeBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
