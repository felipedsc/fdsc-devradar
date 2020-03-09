import React from 'react';
import { Text } from 'react-native';
import { WebView } from 'react-native-webview';

export const Profile = ({ navigation }) => {
    const githubUsername = navigation.getParam('github_username');
    return (
        <WebView style={{ flex: 1 }} source={{ uri: `https://github.com/${githubUsername}` }} />
    );
}

export default Profile;