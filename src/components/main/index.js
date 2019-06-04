import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Text,
	Button,
} from 'react-native';
import { connect } from 'react-redux';

import styles from './styles';

class Main extends Component {
	_handlePressFetchDataButton = () => {

	}

	render() {
		const {
			_handlePressFetchDataButton,
		} = this;

		return (
			<View style={styles.container}>
				<Button
					title='Fetch Data'
					onPress={_handlePressFetchDataButton}
				/>

				<Text style={styles.responseText}>
					{`Response:\n ${'123456'}`}
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
