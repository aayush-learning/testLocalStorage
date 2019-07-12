import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import OffLine from './components/OfflineScreen';
import OnLine from './components/OnlineScreen';

const ScreenNavigator = new createStackNavigator({
    offline: {
        screen: OffLine,
    },
    online:{
        screen : OnLine,
    }
})
const AppNavigator = new createAppContainer(ScreenNavigator);

class Routes extends Component{
    render(){
        return <AppNavigator/>
    }
}

export default Routes;