import React, { FC } from 'react';
import { Image, Pressable, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLOR } from '../../utils/Colors';
import styles from './styles';


type Props = {
  action: () => void;
  buttonTitle: string;
  containerStyles?: { [key: string]: any };
  imageLeft?: any;
  disabled?: boolean;
};


const Button: FC<Props> = ({
  action,
  buttonTitle,
  containerStyles,
  imageLeft,
  disabled = false,
}) => (
    
    <Pressable
        style={({ pressed }) => [styles.container(pressed), containerStyles]}
        onPress={action}
        disabled={disabled} >
        <LinearGradient 
            colors={[COLOR.blue_1, COLOR.blue_1_tr(0.5)]}
            useAngle={true}
            angle={175}
            style={styles.linearGrad} >
            {imageLeft ?
                <Image
                    source={imageLeft}
                    style={styles.imageLeft}
                    resizeMode={'contain'} />
                : null
            }
            <Text numberOfLines={1} style={styles.buttonText}>
                {buttonTitle}
            </Text>
        </LinearGradient>
    </Pressable>

);

export default Button;
