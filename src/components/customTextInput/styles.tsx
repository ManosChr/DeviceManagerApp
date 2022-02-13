import { Dimensions, StyleSheet } from 'react-native';
import { FONT } from '../../utils/Dimensions';
import { COLOR } from '../../utils/Colors';
import { FONT_FAMILY } from '../../utils/Constants';


const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

type Style = {
    [key: string]: any;
};

export default StyleSheet.create<Style>({
    inputContainer: {
        width: '90%',
        marginTop: windowHeight * 0.04,
    },
    inputLabel: {
        color: COLOR.blue_2,
        fontSize: FONT.seminormal,
        fontFamily: FONT_FAMILY.proximaSemiBold,
    },
    input: (multiline: boolean) => ({
        width: '100%',
        height: !multiline ? windowHeight * 0.07 : windowHeight * 0.2,
        borderRadius: windowWidth * 0.03,
        backgroundColor: COLOR.grey_2,
        margin: 0,
        padding: 0,
        paddingHorizontal: windowWidth * 0.04,
        paddingVertical: multiline ? windowHeight * 0.02 : 0,
        marginTop: windowHeight * 0.01,
        color: COLOR.blue_2,
        fontSize: FONT.seminormal,
        fontFamily: FONT_FAMILY.proximaRegular,
        textAlignVertical: multiline ? 'top' : 'center',
    }),
});