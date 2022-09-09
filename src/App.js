import "./App.css";
import Profile from "./Profile/profile";
import PropTypes from "prop-types";

function App() {
  const handleName = (fullName) => alert(fullName);
  return (
    <div className="App">
      <Profile
        handleName={handleName}
        fullName="Toluwalade Olujimi"
        profession="Student"
        bio="Toluwalade Olujimi is a Nigerian Black girl."
      >
        <img
        style={{width: 200}}
          src={require("./Profile/OOO_4256.jpg")}
          alt="Toluwalade Olujimi"
        />
      </Profile>
    </div>
  );
}

Profile.PropTypes = {
  handleName: PropTypes.func,
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
};

export default App;