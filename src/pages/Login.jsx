import React, { Component } from "react";

export default class Login extends Component {
  render() {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col absolute top-[30%] shadow-lg border-[2px] rounded-lg p-5 w-[50%]">
          <div>
            <input placeholder="username" />
          </div>
          <div>
            <input placeholder="password" />
          </div>
          <input type="button" value="Login" />
        </div>
      </div>
    );
  }
}
