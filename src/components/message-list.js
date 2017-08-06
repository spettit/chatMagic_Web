import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

const MessageListItem = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

const Li = styled.li`
    margin: 10px;
    padding 10px;
    border-radius: 5px;
    background-color: gray;
    color: white;
    width: 50%;
    align-self: flex-end;
`;

const Uli = styled.li`
    margin: 10px;
    padding 10px;
    border-radius: 5px;
    background-color: white;
    color: black;
    width: 50%;
    align-self: flex-start;
`;


class MessageList extends Component {
  renderList() {
    return _.map(this.props.messages, (value, key) => {
      if (value.sender === this.props.user) {
        return (
          <Li key={key}>{value.message_text}</Li>
        );
      }
        return (
          <Uli key={key}>{value.message_text}</Uli>
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
