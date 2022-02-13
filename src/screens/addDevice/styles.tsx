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
        paddingTop: windowHeight * 0.05,
        paddingBottom: windowHeight * 0.08,
    },
    descriptionTitle: {
        width: '70%',
        textAlign: 'center',
        color: COLOR.blue_2,
        fontSize: FONT.large,
        fontFamily: FONT_FAMILY.proximaSemiBold,
    },
    requiredText: {
        width: '90%',
        color: COLOR.blue_2,
        fontSize: FONT.normal,
        fontFamily: FONT_FAMILY.proximaThin,
        marginTop: windowHeight * 0.04,
    },
    buttonStyles: {
        width: '90%',
        marginTop: windowHeight * 0.08,
    },
});