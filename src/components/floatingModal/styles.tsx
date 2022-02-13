import { Dimensions, StyleSheet } from 'react-native';
import { FONT } from '../../utils/Dimensions';
import { COLOR } from '../../utils/Colors';
import { FONT_FAMILY } from '../../utils/Constants';


const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

type Style = {
    [key: string]: any;
};

export default StyleSheet.create<Style>({
    modalView: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0
    },
    modalContainer: {
        width: windowWidth * 0.9,
        borderRadius: windowWidth * 0.03,
        alignItems: 'center',
        paddingTop: windowHeight * 0.05,
        paddingBottom: windowHeight * 0.03,
        backgroundColor: COLOR.white,
    },
    title: {
        width: '85%',
        textAlign: 'center',
        color: COLOR.blue_2,
        fontSize: FONT.large,
        fontFamily: FONT_FAMILY.proximaSemiBold,
    },
    subtitle: {
        marginTop: windowHeight * 0.02,
        width: '85%',
        alignSelf: 'center',
        textAlign: 'center',
        color: COLOR.blue_2,
        fontSize: FONT.normal,
        fontFamily: FONT_FAMILY.proximaRegular,
    },
    htmlViewCont: {
        marginTop: windowHeight * 0.02,
        width: '85%',
    },
    htmlViewStyles: {
        alignSelf: 'center',
        textAlign: 'center',
        color: COLOR.blue_2,
        fontSize: FONT.normal,
        fontFamily: FONT_FAMILY.proximaRegular,
    },
    btnsCont: {
        width: '85%',
        marginTop: windowHeight * 0.05,
    },
    twoBtns: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonStyles: {
        width: '48%',
    },
});