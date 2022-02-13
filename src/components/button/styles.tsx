import { Dimensions, StyleSheet, Platform } from 'react-native';
import { FONT } from '../../utils/Dimensions';
import { COLOR } from '../../utils/Colors';
import { FONT_FAMILY } from '../../utils/Constants';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');


interface Style {
    [key: string]: any
};

export default StyleSheet.create<Style>({
    container: (pressed: boolean) => ({
        width: '100%',
        height: windowHeight * 0.07,
        borderRadius: windowWidth * 0.03,
        overflow: 'hidden',
        backgroundColor: COLOR.white,
        opacity: pressed ? 0.6 : 1,
    }),
    linearGrad: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    imageLeft: {
        height: windowHeight * 0.03,
        width: windowHeight * 0.03,
        tintColor: COLOR.white,
        marginRight: windowWidth * 0.02,
        marginLeft: -windowWidth * 0.05,
    },
    buttonText: {
        maxWidth: '80%',
        fontFamily: FONT_FAMILY.proximaBold,
        fontSize: FONT.large,
        color: COLOR.white,
    },
});
