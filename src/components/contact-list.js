import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

const Div = styled.div`
  color: white;
  grid-column: 1;
  background-color: gray;
`;

const Ul = styled.ul`
  list-style: none;
`;

class ContactList extends Component {
  renderList() {
       return _.map(this.props.contacts, (value, key) => {
        return (
          <li key={key}>{value.user_name}</li>
        );
      });
  }

  render() {
    return (
      <Div>
        <Ul>
          {this.renderList()}
        </Ul>
      </Div>

    );
  }
}

export default ContactList;
