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
    scrollview: {
        width: '100%',
    },
    scrollviewCont: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: windowHeight * 0.05,
        paddingBottom: windowHeight * 0.08,
    },
    detailsView: {
        width: '90%',
        borderRadius: windowWidth * 0.03,
        borderWidth: 2,
        borderColor: COLOR.grey_2,
        backgroundColor: COLOR.white,
        paddingVertical: windowHeight * 0.02,
        paddingHorizontal: windowWidth * 0.04,
        marginTop: windowHeight * 0.04,
    },
    qrcodeView: {
        width: '100%',
        alignItems: 'center',
        marginTop: windowHeight * 0.02,
        marginBottom: windowHeight * 0.08,
    },
    deviceLabel: {
        color: COLOR.blue_2,
        fontSize: FONT.semismall,
        fontFamily: FONT_FAMILY.proximaRegular,
        marginTop: windowHeight * 0.01,
    },
    deviceDetails: {
        color: COLOR.blue_2,
        fontSize: FONT.seminormal,
        fontFamily: FONT_FAMILY.proximaSemiBold,
    },
});