import React from 'react';
import { Image, Pressable, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR } from '../../utils/Colors';
import styles from './styles';


export type Props = {
    title: string;
    backEnabled?: boolean;
    backAction?: () => void;
    navigation: any,
    containerStyles?: any,
    addAction?: () => void;
};

const Header: React.FC<Props> = ({
    title,
    backEnabled,
    backAction,
    navigation,
    containerStyles,
    addAction,
}) => {

    return (
        <LinearGradient 
            colors={[COLOR.blue_1, COLOR.blue_1_tr(0.5)]}
            useAngle={true}
            angle={180}
            style={{...styles.container, ...containerStyles}}>
                {backEnabled ?
                    <Pressable 
                        style={({pressed}) => styles.backArrowCont(pressed)}
                        onPress={backAction ? () => backAction() : () => navigation.goBack()}
                    >
                        <Image 
                            source={require('../../assets/images/arrow_back.png')}
                            resizeMode={'contain'}
                            style={styles.backArrow}
                        />
                    </Pressable>
                    : null
                }
                
                <Text numberOfLines={2} style={styles.headerTitle}>{title ?? ''}</Text>

                {addAction ?
                    <Pressable 
                        style={({pressed}) => styles.addContainer(pressed)}
                        onPress={addAction}
                    >
                        <Image 
                            source={require('../../assets/images/add_icon.png')}
                            resizeMode={'contain'}
                            style={styles.addIcon}
                        />
                        <Text style={styles.addText}>Add</Text>
                    </Pressable>
                    : null
                }
        </LinearGradient>
    )
}

export default Header;