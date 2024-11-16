/* eslint-disable react/self-closing-comp */

/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Image from '@components/Image';
import ScreenWrapper from '@components/ScreenWrapper';
import useThemeStyles from '@hooks/useThemeStyles';
import DetailedRow from '@pages/home/detailedPage/DetailedRow';
import pageRows, {PageRow} from '@pages/home/detailedPage/pageData';
import * as Expensicons from '@src/components/Icon/Expensicons';

function keyExtractor(item: PageRow) {
    return item.title ?? '';
}

function DetailedPage() {
    const styles = useThemeStyles();
    const renderItem = ({item}: {item: PageRow}) => <DetailedRow pageRow={item} />;

    const renderContent = () => {
        return (
            <View style={[styles.flex1]}>
                <Image
                    source={Expensicons.DetailedPageBG as any}
                    style={[styles.eReceiptBackgroundThumbnail]}
                    resizeMode="cover"
                />

                <View
                    style={[
                        styles.pAbsolute,
                        styles.l0,
                        styles.r0,
                        {
                            top: 111,
                            bottom: 57,
                        },
                        // {backgroundColor: 'transparent'},
                        {backgroundColor: '#F8F8F8'},
                    ]}
                >
                    <FlatList
                        keyboardShouldPersistTaps="handled"
                        data={pageRows}
                        contentContainerStyle={{paddingTop: 8, paddingBottom: 8}}
                        renderItem={renderItem}
                        keyExtractor={keyExtractor}
                        removeClippedSubviews={false}
                        showsVerticalScrollIndicator={false}
                        ItemSeparatorComponent={
                            // eslint-disable-next-line react/no-unstable-nested-components
                            () => <View style={{height: 8}} />
                        }
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
            testID={DetailedPage.displayName}
            includePaddingTop
        >
            {renderContent()}
        </ScreenWrapper>
    );
}

DetailedPage.displayName = 'DetailedPage';

export default DetailedPage;
