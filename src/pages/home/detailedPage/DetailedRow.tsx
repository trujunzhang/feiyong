/* eslint-disable react/self-closing-comp */

/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import {View} from 'react-native';
import Text from '@components/Text';
import useThemeStyles from '@hooks/useThemeStyles';
import type {PageRow} from '@pages/home/detailedPage/pageData';

type DetailedRowProps = {
    pageRow: PageRow;
};

function DetailedRow({pageRow}: DetailedRowProps) {
    const styles = useThemeStyles();

    const column = (title: string, value: string) => {
        return (
            <View style={[styles.flex1, styles.alignItemsCenter, {gap: 12}]}>
                <Text style={[{color: '#8C8D8C'}]}>{title}</Text>
                <Text style={[{color: '#EE7D3C'}]}>{value}</Text>
            </View>
        );
    };

    const getMiddle = () => {
        if (pageRow.title.includes('2014') || pageRow.title.includes('2013')) {
            return '405';
        }
        return '0';
    };

    const columns = () => {
        return (
            <View style={[styles.flex1, styles.flexRow, styles.justifyContentBetween, styles.alignItemsCenter]}>
                {/*  left   */}
                {column('个人缴费', pageRow.cost)}
                {/*  middle   */}
                {column('单位缴纳', getMiddle())}
                {/*  right   */}
                {column('总金额', pageRow.total)}
            </View>
        );
    };

    return (
        <View
            style={[
                styles.flexColumn,
                {
                    marginHorizontal: 10,
                    paddingHorizontal: 22,
                    paddingVertical: 20,
                    height: 157,
                    gap: 8,
                },
                {
                    // backgroundColor: 'transparent',
                    backgroundColor: 'white',
                    borderRadius: 12,
                    // borderColor: 'pink',
                    // borderWidth: 1,
                },
            ]}
        >
            <Text style={[{color: '#323233'}]}>{pageRow.title}</Text>
            {columns()}
        </View>
    );
}

DetailedRow.displayName = 'DetailedRow';

export default DetailedRow;
