import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Text,
} from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

class Main extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>
					Main
				</Text>
			</View>
		);
	}
}

Main.propTypes = {

};

Main.defaultProps = {

};

const mapStateToProps = (state) => {
	const {
		api,
	} = state;

	return {
		api,
	};
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
