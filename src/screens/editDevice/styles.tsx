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
    inputContainer: {
        width: '90%',
        marginTop: windowHeight * 0.04,
    },
    inputLabel: {
        color: COLOR.blue_2_tr(0.5),
        fontSize: FONT.seminormal,
        fontFamily: FONT_FAMILY.proximaSemiBold,
    },
    inputDisabledView: {
        width: '100%',
        height: windowHeight * 0.07,
        borderRadius: windowWidth * 0.03,
        borderWidth: 1.5,
        borderColor: COLOR.grey_2,
        justifyContent: 'center',
        paddingHorizontal: windowWidth * 0.04,
        marginTop: windowHeight * 0.01,
    },
    inputDisabled: {
        color: COLOR.blue_2_tr(0.5),
        fontSize: FONT.seminormal,
        fontFamily: FONT_FAMILY.proximaRegular,
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