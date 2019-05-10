import React, {Component} from 'react'
import {
    Text,
    View,
    StatusBar,
    SafeAreaView
} from 'react-native'

import styles from '../styles';
import * as Constant from '../styles/constant';

/**
 *  电商服务中心
 */
export default class MinePage extends Component {

    render() {
        return (
            <View style={styles.mainBox}> 
                <StatusBar hidden={false} backgroundColor={Constant.primaryColor} translucent
                            barStyle={'light-content'}/>
                <SafeAreaView >
                    <Text>我的</Text>
                </SafeAreaView>
            </View>
        );
    }
}