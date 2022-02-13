import React, { FC } from 'react';
import { View, Text, Pressable, Image, Platform } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import Modal from 'react-native-modal';
import HTMLView from 'react-native-htmlview';
import Button from '../../components/button/Button';
import styles from './styles';


export type Props = {
    modalVisible: boolean;
    setModalVisible: (b: boolean) => void;
    title: string;
    subTitle?: string;
    htmlContent?: string;
    onBackButtonPress?: { [key: string]: () => void } | null;
    onBackdropPress?: { [key: string]: () => void } | null;
    twoBtns?: boolean;
    btnTitle?: string;
    btn2Title?: string;
    btnAction?: { [key: string]: () => void } | null;
    btn2Action?: { [key: string]: () => void } | null;
    onModalHide?: () => void;
};

const FloatingModal: FC<Props> = ({
    modalVisible,
    setModalVisible,
    title,
    subTitle,
    onBackButtonPress,
    onBackdropPress,
    twoBtns,
    btnTitle,
    btn2Title,
    btnAction,
    btn2Action,
    onModalHide,
    htmlContent,
}) => {
    const { width, height } = useDimensions().window;

    return (
        <Modal
            style={styles.modalView}
            isVisible={modalVisible}
            deviceWidth={width}
            deviceHeight={height}
            onBackButtonPress={onBackButtonPress ? onBackButtonPress?.action : () => {}} // Android's hardware backbutton
            onBackdropPress={onBackdropPress ? onBackdropPress?.action : () => {}} // Touch outside
            useNativeDriver={Platform.OS === 'android'}
            backdropOpacity={0.55}
            animationIn={'fadeIn'}
            animationOut={'fadeOut'}
            onModalHide={onModalHide ? onModalHide : () => {}}>
            <View style={styles.modalContainer}>
                <Text style={styles.title}>{title}</Text>

                {subTitle ?
                    <Text style={styles.subtitle}>{subTitle}</Text>
                    :
                    null
                }

                {htmlContent ?
                    <View style={styles.htmlViewCont}>
                        <HTMLView
                            value={htmlContent}
                            stylesheet={{
                                blockquote: styles.htmlViewStyles
                            }}
                        />
                    </View>
                    :
                    null
                }

                    <View style={styles.btnsCont}>
                        {twoBtns ?
                            <View style={styles.twoBtns}>
                                <Button
                                    buttonTitle={btn2Title ? btn2Title : 'Cancel'}
                                    containerStyles={styles.buttonStyles}
                                    action={btn2Action ? btn2Action?.action : () => setModalVisible(false)}
                                />
                            
                                <Button
                                    buttonTitle={btnTitle ? btnTitle : 'OK'}
                                    containerStyles={styles.buttonStyles}
                                    action={btnAction ? btnAction?.action : () => setModalVisible(false)}
                                />
                            </View>
                            :
                            <Button
                                buttonTitle={btnTitle ? btnTitle : 'OK'}
                                action={btnAction ? btnAction?.action : () => setModalVisible(false)}
                            />
                        }
                    </View>
            </View>
        </Modal>
    )
};

export default FloatingModal;