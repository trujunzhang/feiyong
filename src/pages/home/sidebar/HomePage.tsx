/* eslint-disable react/self-closing-comp */

/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import {View} from 'react-native';
import Image from '@components/Image';
import {PressableWithoutFeedback} from '@components/Pressable';
import ScreenWrapper from '@components/ScreenWrapper';
import useThemeStyles from '@hooks/useThemeStyles';
import Navigation from '@navigation/Navigation';
import * as Expensicons from '@src/components/Icon/Expensicons';
import ROUTES from '@src/ROUTES';

function HomePage() {
    const styles = useThemeStyles();

    const renderContent = () => {
        return (
            <View style={[styles.flex1]}>
                <Image
                    source={Expensicons.HomeBG as any}
                    style={[styles.eReceiptBackgroundThumbnail]}
                    resizeMode="cover"
                />

                <View
                    style={[
                        styles.flex1,
                        styles.pAbsolute,
                        styles.l0,
                        styles.t0,
                        styles.r0,
                        styles.b0,
                        // {backgroundColor: 'blue'}
                        {backgroundColor: 'transparent'},
                    ]}
                >
                    <PressableWithoutFeedback
                        style={[styles.flex1, styles.boxShadowNone]}
                        accessibilityLabel=""
                        onPress={() => {
                            Navigation.navigate(ROUTES.REPORT_WITH_ID.getRoute('list'));
                        }}
                    />
                </View>
            </View>
        );
    };

    return (
        <ScreenWrapper
            includeSafeAreaPaddingBottom={false}
            shouldShowOfflineIndicator={false}
            shouldShowOfflineIndicatorInWideScreen={false}
            shouldEnableKeyboardAvoidingView={false}
            style={[styles.sidebar, styles.pb0]}
            testID={HomePage.displayName}
            includePaddingTop
        >
            {renderContent()}
        </ScreenWrapper>
    );
}

HomePage.displayName = 'HomePage';

export default HomePage;
