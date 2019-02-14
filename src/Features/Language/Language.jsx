import React, { Component } from "react";
import hoistNonReactStatic from "hoist-non-react-statics";
import lang from "./lang";

const LanguageContext = React.createContext();

const withLanguage = (Comp, getContext) => {
  function Wrapper(props, ref) {
    return (
      <LanguageContext.Consumer>
        {context => <Comp {...getContext(context)} {...props} ref={ref} />}
      </LanguageContext.Consumer>
    );
  }
  Wrapper.displayName = `withLanguage(${Comp.displayName || Comp.name})`;
  return hoistNonReactStatic(React.forwardRef(Wrapper), Comp);
};

class Language extends Component {
  updateLanguage = lang =>
    this.setState(state => {
      if (state.currentLanguage === lang) return null;
      else
        return {
          currentLanguage: lang
        };
    });

  state = { lang, currentLanguage: "en", updateLanguage: this.updateLanguage };
  render() {
    const { lang, currentLanguage, updateLanguage } = this.state;
    return (
      <LanguageContext.Provider
        value={{
          language: lang[currentLanguage],
          updateLanguage
        }}
      >
        {this.props.children}
      </LanguageContext.Provider>
    );
  }
}

export { Language, withLanguage };
