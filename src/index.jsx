'use strict';

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import themeClair from '../Shared/GlobalTheme/clair';
import themeSombre from '../Shared/GlobalTheme/sombre';
import Icone from '../UI/Icone/Icone';

var style = {
  wrapper: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    transition: 'background-color 0.25s ease-in-out',
  },
};

const SwitchCtn = styled.div`
  position: absolute;
  cursor: pointer;
  bottom: 20px;
  left: 20px;
`;

export class BackgroundColor extends React.Component {
  constructor(props, ctx) {
    super(props, ctx);

    this.story = props.story;
    this.colors = props.colors || [];

    this.state = {
      theme: themeClair,
    };
  }

  changeTheme() {
    return () =>
      this.setState((c) => (c === themeClair ? themeSombre : themeClair));
  }

  render() {
    return (
      <div
        style={Object.assign({}, style.wrapper, {
          backgroundColor: this.state.theme.body.normal,
        })}
      >
        <ThemeProvider theme={this.state.theme}>
          {this.story()}
          <SwitchCtn>
            <Icone
              icone="JourNuit"
              onClick={changeTheme}
              style={{ size: 'grand' }}
            />
          </SwitchCtn>
        </ThemeProvider>
      </div>
    );
  }
}

export default (colors) => (story) =>
  <BackgroundColor colors={colors} story={story} />;
