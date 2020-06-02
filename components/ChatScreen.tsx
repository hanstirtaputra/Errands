import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0

import Fire from '../firebase/Fire';

export default class Chat extends React.Component {
    static navigationOptions = ({ navigation, route }) => ({
        title: (route.params || {}).name || 'Chat!'
    });

    fire = new Fire();

    state = {
        messages: []
    };

    get user() {
        return {
            name: this.props.route.params.name,
            email: this.props.route.params.email,
            id: this.fire.uid,
            _id: this.fire.uid
        };
    }

    render() {
        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={this.fire.send}
                user={this.user}
            />
        );
    }

    // componentDidMount() {
    //     this.fire.refOn(message =>
    //         this.setState(previousState => ({
    //             messages: GiftedChat.append(previousState.messages, message)
    //         }))
    //     );
    // }
    // componentWillUnmount() {
    //     this.fire.refOff();
    // }
}