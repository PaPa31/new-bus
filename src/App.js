import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import ParkBuilder from "./containers/ParkBuilder/ParkBuilder";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <ParkBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
