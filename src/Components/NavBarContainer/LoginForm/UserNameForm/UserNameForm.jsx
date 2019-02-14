import React, { PureComponent } from "react";
import Button from "Commons/Button";
import classnames from "classnames";
import "./UserNameForm.scss";

export class UserNameForm extends PureComponent {
  state = { username: "", password: "", checkbox: false };
  onChange = e => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const { name } = e.target;
    this.setState(() => ({
      [name]: value
    }));
  };

  render() {
    const { username, password, checkbox } = this.state;
    const { className = "username-form", addClass, ...rest } = this.props;
    const newClassName = classnames(className, addClass);

    return (
      <form {...rest} className={newClassName}>
        <div className="username-form__control">
          <div className="username-form__group">
            <input
              value={username}
              onChange={this.onChange}
              id="username"
              name="username"
              className="username-form__input"
              type="text"
            />
            <label
              className="username-form__label username-form__label--custom"
              htmlFor="username"
            >
              Teila ID
            </label>
          </div>
          <div className="username-form__group">
            <input
              value={password}
              id="password"
              onChange={this.onChange}
              name="password"
              className="username-form__input"
              type="password"
            />
            <label
              className="username-form__label username-form__label--custom"
              htmlFor="password"
            >
              Password
            </label>
          </div>
        </div>
        <div className="username-form__control">
          <Button addClass={classnames("btn--green", "color-white-1")}>
            LOGIN &#10095;
          </Button>
        </div>
        <div className="username-form__control">
          <div className="username-form__group">
            <label
              className="username-form__label__checkbox"
              htmlFor="remember"
            >
              Remember my login
              <input
                checked={checkbox}
                id="remember"
                name="checkbox"
                onChange={this.onChange}
                className="username-form__checkbox"
                type="checkbox"
              />
              <span className="username-form__checkbox__mark" />
            </label>
          </div>
          <a className="username-form__link" href="/">
            Create a new username or password
          </a>
        </div>
      </form>
    );
  }
}

export default UserNameForm;
