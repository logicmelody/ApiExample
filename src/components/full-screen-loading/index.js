import React, { Component } from "react";
import PropTypes from "prop-types";
import {
	View,
	ActivityIndicator,
} from "react-native";

import styles from "./styles";

class FullScreenLoading extends Component {
	render() {
		const {
			hidden
		} = this.props;

		if (hidden) {
			return null;

		} else {
			return (
				<View style={styles.container}>
					<ActivityIndicator
						size='large'
						color='#ff6813'
					/>
				</View>
			);
		}
	}
}

FullScreenLoading.propTypes = {
	hidden: PropTypes.bool
};

FullScreenLoading.defaultProps = {
	hidden: true
};

export default FullScreenLoading;
