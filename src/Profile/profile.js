import React from "react";

function Profile(props) {
  const buttonStyle = {
    color: "black",
    backgroundColor: "grey",
    height: 30,
    width: 100,
    borderRadius: 10,
    border: "none",
    marginTop: 20,
  };
  const bodyStyle = {
    marginTop: 30,
  };

  return (
    <div style={bodyStyle}>
      <div>{props.children}</div>
      <h1>{props.fullName}</h1>
      <p>{props.bio}</p>
      <h2>{props.profession}</h2>
      <button
        style={buttonStyle}
        onClick={() => props.handleName(`My name is ${props.fullName}`)}
      >
        ClickMe
      </button>
    </div>
  );
}

Profile.defaultProps = {
  fullName: "Toluwalade Olujimi",
  profession: "Student",
  bio: "Toluwalade Olujimi is a Nigerian Black girl.",
  children: (
    <img
    src="src\Profile\OOO_4256.jpg"
    alt="Toluwalade Olujimi"
    />
  ),
};

export default Profile;