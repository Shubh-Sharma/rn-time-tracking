import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import TimerButton from './TimerButton';
import TimerForm from './TimerForm';

import PropTypes from 'prop-types';

export default class ToggleableTimerForm extends Component {
  state = {
    isOpen: false,
  };

  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
  };

  handleFormOpen = () => {
    this.setState({ isOpen: true });
  };

  handleFormClose = () => {
    this.setState({ isOpen: false });
  };

  handleFormSubmit = timer => {
    const { onFormSubmit } = this.props;

    onFormSubmit(timer);
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen } = this.state;
    return (
      <View style={[ StyleSheet.container, !isOpen && styles.buttonPadding ]}>
        {isOpen ? (
          <TimerForm 
            onFormClose={this.handleFormClose}
            onFormSubmit={this.handleFormSubmit}
          />) : (
          <TimerButton 
            title="+" 
            color="black" 
            onPress={this.handleFormOpen} 
          />)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertica: 10,
  },
  buttonPadding: {
    paddingHorizontal: 15,
  },
});