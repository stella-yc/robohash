import React, { PureComponent } from "react";

import { RobohashForm } from "../RobohashForm/RobohashForm";

export class Robohasher extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      userInput: ""
    };
    this.updateUserInput = this.updateUserInput.bind(this);
  }

  updateUserInput(userInput) {
    this.setState({ userInput });
  }

  render() {
    const { userInput } = this.state;
    return (
      <div>
        <RobohashForm handleSubmit={this.updateUserInput} />
        {userInput && (
          <div>
            <h2>{userInput}</h2>
            <img src={`https://robohash.org/${userInput}`} alt="custom-robot" />
          </div>
        )}
      </div>
    );
  }
}
