import React, { Component } from 'react';
import * as firebase from 'firebase';
import styled from 'styled-components';

import MessageList from './message-list';
import ContactList from './contact-list';
import NewMessage from './new_message';

const Div = styled.div`
  height: 100vh;
  font-family: sans-serif;
  background-color: #333333;
  color: gray;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-auto-rows: 1fr 50px;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInUser: 'Sean',
      recipient: 'Dave',
      data: []
    };
  }

  componentWillMount() {
    const Messages = firebase.database().ref().child(this.state.loggedInUser);
    Messages.on('value', snapshot => {
            this.setState({ data: snapshot.val() });
    });
  }

  addMessage(e) {
    e.preventDefault();
    const SendMessages = firebase.database().ref().child(this.state.loggedInUser).child('messages');
    const ReceivedMessages = firebase.database().ref().child(this.state.recipient).child('messages');
    const txt = document.getElementById('messageInput').value;
    const messagetxt = {
      message_text: txt,
      sender: this.state.loggedInUser,
      recipient: this.state.recipient
    };
    SendMessages.push(messagetxt);
    ReceivedMessages.push(messagetxt);
  }

  render() {
    return (
      <Div id="AppDiv">
        <ContactList contacts={this.state.data.contacts}/>
        <MessageList messages={this.state.data.messages} />
        <NewMessage title="hello" addMessageFunction={this.addMessage.bind(this)} />
      </Div>

    );
  }
}

export default App;
