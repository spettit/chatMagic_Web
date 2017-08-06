import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
  grid-row: 2;
  grid-column: 1 / span 2
`;

const Input = styled.input`
  width: 95vw;
  height: 30px;
  font-size: 24px;
`;

class NewMessage extends Component {
  render() {
    return (
      <Div>
        <form onSubmit={this.props.addMessageFunction}>
          <Input id="messageInput" type="text" />
          {/* <button type="submit">Send</button> */}
        </form>
      </Div>
    );
  }
}

export default NewMessage;
