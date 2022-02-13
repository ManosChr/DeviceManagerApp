import { Dimensions, StyleSheet, Platform } from 'react-native';
import { COLOR } from '../../utils/Colors';
import { FONT_FAMILY } from '../../utils/Constants';
import { FONT } from '../../utils/Dimensions';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

type Style = {
    [key: string]: any;
};

export default StyleSheet.create<Style>({
    container: {
        height: windowHeight * 0.1,
        width: windowWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: windowWidth * 0.05,
    },
    headerTitle: {
        flex: 1,
        color: COLOR.white,
        fontSize: FONT.large,
        fontFamily: FONT_FAMILY.proximaSemiBold
    },
    backArrowCont: (pressed: boolean) => ({
        height: windowHeight * 0.035,
        width: windowHeight * 0.035,
        alignItems: 'center',
        justifyContent: 'center',
        opacity: pressed ? 0.6 : 1,
        marginRight: windowWidth * 0.02,
    }),
    backArrow: {
        height: '60%',
        width: '60%',
        tintColor: COLOR.white
    },
    addContainer: (pressed: boolean) => ({
        height: windowHeight * 0.05,
        paddingHorizontal: windowWidth * 0.04,
        borderRadius: windowHeight * 0.025,
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLOR.white,
        opacity: pressed ? 0.6 : 1,
        marginLeft: windowWidth * 0.03,
    }),
    addIcon: {
        height: windowHeight * 0.025,
        width: windowHeight * 0.025,
        tintColor: COLOR.white,
        marginRight: windowWidth * 0.02,
    },
    addText: {
        color: COLOR.white,
        fontSize: FONT.normal,
        fontFamily: FONT_FAMILY.proximaSemiBold,
    },
});