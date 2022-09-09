import React from 'react';
import Navbar from './components/navbar';


class App extends React.Component {
  state = {
    fullName: "Toluwalade Olujimi",
    bio: "Toluwalade is a student of the University of lagos. She is cuurently in her second year. She decided to learn Web Development since the school is currently on strike and so far it has been great. She is a member of RCCG and she is one who is learning to love God.",
    imgSrc: "",
    profession: "Student",
    show: true,
    time: 0,
  };


toggleShow = () => {
  this.setState((prevProfile) => ({ show: !prevProfile.show }));
  this.state.show
    ? this.componentDidMount()
    : this.setState({ time: 0 }) && this.componentWillUnmount();
};

componentDidMount() {
  this.myInterval = setInterval(() => {
    this.setState((prevState) => ({ time: prevState.time + 1 }));
  }, 1000);
}

componentWillUnmount() {
  clearInterval(this.myInterval);
}

render() {
  return (
    <div className="screen">
      <Navbar />
      {this.state.show == true && (
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={require("./components/IMG_E5524.JPG")}
                className="img-fluid rounded-start"
                alt="Me"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{this.state.fullName}</h5>
                <h6 className="card-title">{this.state.profession}</h6>
                <p className="card-text">{this.state.bio}</p>
                  <small className="text-muted">Last mounted: {this.state.time} seconds ago</small>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="btn-div">
        <button type="button" class="btn btn-dark" onClick={this.toggleShow}>
          {this.state.show == true ? "Hide" : "Show"}
        </button>
      </div>
      </div>
    );
  }
}

export default App;
