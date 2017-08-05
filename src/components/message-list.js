import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

const MessageListItem = styled.ul`
  list-style: none;
`;


class MessageList extends Component {
  renderList() {
    return _.map(this.props.messages, (value, key) => {
      return (
        <li key={key}>Message to {value.recipient}: "{value.message_text}" from: {value.sender}</li>
      );
    });
  }

  render() {
    return (
      <MessageListItem>
        {this.renderList()}
      </MessageListItem>
    );
  }
}

export default MessageList;
