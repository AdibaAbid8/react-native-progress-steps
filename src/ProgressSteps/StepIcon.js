import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class StepIcon extends Component {
  render() {
    let styles;

    if (this.props.isActiveStep) {
      styles = {
        circleStyle: {
          width: 15,
          height: 15,
          borderRadius: 20,
          backgroundColor: this.props.activeStepIconColor,
          borderColor: this.props.activeStepIconBorderColor,
          borderWidth: 0,
          bottom: 0,
        },
        circleText: {
          alignSelf: 'center',
          top: 5 / 4,
          fontSize: 8,
        },
        labelText: {
          textAlign: 'center',
          flexWrap: 'wrap',
          width: 100,
          paddingTop: 7,
          fontFamily: this.props.labelFontFamily,
          color: this.props.activeLabelColor,
          fontSize: this.props.activeLabelFontSize || this.props.labelFontSize,
        },
        leftBar: {
          position: 'absolute',
          top: 27 / 3.9,
          left: 0,
          right: 25 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          zIndex: -1,
          borderTopColor: this.props.completedProgressBarColor,
          marginRight: 40 / 2 + 2,
        },
        rightBar: {
          position: 'absolute',
          top: 27 / 3.9,
          right: 0,
          left: 30 + 4,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          zIndex: -1,
          borderTopColor: this.props.progressBarColor,
          marginLeft: 40 / 2 + 2,
        },
        stepNum: {
          color: this.props.activeStepNumColor,
        },
      };
    } else if (this.props.isCompletedStep) {
      styles = {
        circleStyle: {
          width: 15,
          height: 15,
          borderRadius: 18,
          backgroundColor: this.props.completedStepIconColor,
        },
        circleText: {
          alignSelf: 'center',
          top: 5 / 4,
          fontSize: 8,
        },
        labelText: {
          textAlign: 'center',
          flexWrap: 'wrap',
          width: 100,
          paddingTop: 4,
          fontFamily: this.props.labelFontFamily,
          color: this.props.completedLabelColor,
          marginTop: 4,
          fontSize: this.props.labelFontSize,
        },
        leftBar: {
          position: 'absolute',
          top: 24 / 3.5,
          left: 0,
          right: 25 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          zIndex: -1,
          borderTopColor: this.props.completedProgressBarColor,
          marginRight: 36 / 2 + 4,
        },
        rightBar: {
          position: 'absolute',
          top: 24 / 3.5,
          right: 0,
          left: 25 + 8,
          zIndex: -1,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          borderTopColor: this.props.completedProgressBarColor,
          marginLeft: 36 / 2 + 4,
        },
        stepNum: {
          color: this.props.completedStepNumColor,
          zIndex: -1,
        },
      };
    } else {
      styles = {
        circleStyle: {
          width: 15,
          height: 15,
          borderRadius: 18,
          borderColor: this.props.disabledStepIconColor,
          borderWidth: 1,
        },
        circleText: {
          alignSelf: 'center',
          top: 4 / 2,
        },
        labelText: {
          textAlign: 'center',
          flexWrap: 'wrap',
          width: 100,
          paddingTop: 4,
          fontFamily: this.props.labelFontFamily,
          color: this.props.labelColor,
          marginTop: 4,
          fontSize: this.props.labelFontSize,
        },
        leftBar: {
          position: 'absolute',
          top: 24 / 3.5,
          left: 0,
          right: 27 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          zIndex: -1,
          borderTopColor: this.props.progressBarColor,
          marginRight: 36 / 2 + 4,
        },
        rightBar: {
          position: 'absolute',
          top: 24 / 3.5,
          right: 0,
          left: 27 + 8,
          borderTopStyle: this.props.borderStyle,
          borderTopWidth: this.props.borderWidth,
          zIndex: -1,
          borderTopColor: this.props.progressBarColor,
          marginLeft: 36 / 2 + 4,
        },
        stepNum: {
          color: this.props.disabledStepNumColor,
          fontSize: 8,
        },
      };
    }

    return (
      <View style={{ flexDirection: 'column', alignItems: 'center' }}>
        <View style={styles.circleStyle}>
          <Text style={styles.circleText}>
            {this.props.isCompletedStep ? (
              <Text style={{ color: this.props.completedCheckColor }}>
                &#10003;
              </Text>
            ) : (
              <Text style={styles.stepNum}>{this.props.stepNum}</Text>
            )}
          </Text>
        </View>
        <Text style={styles.labelText}>{this.props.label}</Text>
        {!this.props.isFirstStep && <View style={styles.leftBar} />}
        {!this.props.isLastStep && <View style={styles.rightBar} />}
      </View>
    );
  }
}

StepIcon.propTypes = {
  stepCount: PropTypes.number.isRequired,
  stepNum: PropTypes.number.isRequired,
  isFirstStep: PropTypes.bool.isRequired,
  isLastStep: PropTypes.bool.isRequired,

  borderWidth: PropTypes.number,
  borderStyle: PropTypes.string,
  activeStepIconBorderColor: PropTypes.string,

  progressBarColor: PropTypes.string,
  completedProgressBarColor: PropTypes.string,

  activeStepIconColor: PropTypes.string,
  disabledStepIconColor: PropTypes.string,
  completedStepIconColor: PropTypes.string,

  labelFontFamily: PropTypes.string,
  labelColor: PropTypes.string,
  labelFontSize: PropTypes.number,
  activeLabelColor: PropTypes.string,
  activeLabelFontSize: PropTypes.number,
  completedLabelColor: PropTypes.string,

  activeStepNumColor: PropTypes.string,
  completedStepNumColor: PropTypes.string,
  disabledStepNumColor: PropTypes.string,

  completedCheckColor: PropTypes.string,
};

StepIcon.defaultProps = {
  borderWidth: 3,
  borderStyle: 'solid',
  activeStepIconBorderColor: '#4BB543',

  progressBarColor: '#ebebe4',
  completedProgressBarColor: '#4BB543',

  activeStepIconColor: 'transparent',
  completedStepIconColor: '#4BB543',
  disabledStepIconColor: '#ebebe4',

  labelColor: 'lightgray',
  labelFontSize: 14,
  activeLabelColor: '#4BB543',
  completedLabelColor: 'lightgray',

  activeStepNumColor: 'black',
  completedStepNumColor: 'black',
  disabledStepNumColor: 'black',

  completedCheckColor: 'white',
};

export default StepIcon;
