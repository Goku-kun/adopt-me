import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  async componentDidMount() {
    const res = await fetch(`https://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`);
      const json = await res.json();
      const cancel = await new Promise((res, rej) => setTimeout(() => {res()}, 10000));
    this.setState({ loading: false, ...json.pets[0] });
  }

  render() {
    // console.log(this.state);
      if (this.state.loading) {
          return (
              <Loader
                style={{textAlign: "center", marginTop: 50}}
                type="Triangle"
                color="#ad343e"
                height={100}
                width={100}
              />)
      }
      
      
      
      
    const { animal, breed, city, state, description, name } = this.state;
      return <div className="details">
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
    </div>;
  }
}

export default withRouter(Details);
