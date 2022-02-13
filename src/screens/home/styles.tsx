import { Dimensions, StyleSheet, Platform, } from 'react-native';
import { COLOR } from '../../utils/Colors';
import { FONT_FAMILY } from '../../utils/Constants';
import { FONT } from '../../utils/Dimensions';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

type Style = {
    [key: string]: any;
};

export default StyleSheet.create<Style>({
    container: {
        flex: 1,
        width: windowWidth,
        height: windowHeight,
        alignItems: 'center', 
        backgroundColor: COLOR.white,
    },
    flatlist: {
        width: '100%',
    },
    flatlistCont: {
        flexGrow: 1,
        alignItems: 'center',
        paddingTop: windowHeight * 0.05,
        paddingBottom: windowHeight * 0.08,
    },
    deviceView: {
        width: windowWidth * 0.9,
        paddingHorizontal: windowWidth * 0.04,
        paddingVertical: windowHeight * 0.02,
        borderRadius: windowWidth * 0.03,
        backgroundColor: COLOR.grey_2,
        ...Platform.select({
            ios: {
                shadowColor: COLOR.shadow_gray,
                shadowOffset: { width: 0, height: 3, },
                shadowOpacity: 1,
                shadowRadius: 5,
            },
            android: {
                shadowColor: COLOR.shadow_gray,
                elevation: 3,
            }
        }),
    },
    deviceLabel: {
        color: COLOR.blue_2,
        fontSize: FONT.small,
        fontFamily: FONT_FAMILY.proximaRegular,
    },
    deviceDetails: {
        color: COLOR.blue_2,
        fontSize: FONT.normal,
        fontFamily: FONT_FAMILY.proximaSemiBold,
    },
    deviceActionsRow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: windowHeight * 0.01,
    },
    deviceActionBtn: (pressed: boolean) => ({
        width: windowHeight * 0.05,
        height: windowHeight * 0.05,
        borderRadius: windowHeight * 0.015,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLOR.white,
        opacity: pressed ? 0.6 : 1,
        marginLeft: windowWidth * 0.03,
        ...Platform.select({
            ios: {
                shadowColor: COLOR.shadow_gray,
                shadowOffset: { width: 0, height: 3, },
                shadowOpacity: 1,
                shadowRadius: 5,
            },
            android: {
                shadowColor: COLOR.shadow_gray,
                elevation: 5,
            }
        }),
    }),
    actionIcon: {
        width: windowHeight * 0.03,
        height: windowHeight * 0.03,
        tintColor: COLOR.blue_1
    },
    deleteIcon: {
        width: windowHeight * 0.03,
        height: windowHeight * 0.03,
        tintColor: COLOR.red
    },
    noDevicesView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    noDevicesText: {
        width: '90%',
        color: COLOR.blue_2,
        fontSize: FONT.large,
        fontFamily: FONT_FAMILY.proximaSemiBold,
    },
    headerContainer: {
        marginBottom: windowHeight * 0.03,
    },
    headerTitle: {
        color: COLOR.blue_2,
        fontSize: FONT.large,
        fontFamily: FONT_FAMILY.proximaSemiBold,
    },
});