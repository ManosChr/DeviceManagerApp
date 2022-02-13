import React, { FC, useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import QRCode from 'react-native-qrcode-svg';
import Header from '../../components/header/Header';
import { COLOR } from '../../utils/Colors';
import styles from './styles';


type Props = {
    navigation: any;
    route: any;
}


/**
 * I chose the device serial_number to be the value that will be converted to QR Code
 * The reason is that the serial_number is a non-empty unique string which is the only restrinction as far as the QRCode library is concerned.
*/
const DeviceQr: FC<Props> = ({ navigation, route }) => {
    const { width, height } = useDimensions().window;
    const [serialNumber, setSerialNumber] = useState<string>('');
    const [model, setModel] = useState<string>('');
    const [os, setOs] = useState<string>('');
    const [currentOwner, setCurrentOwner] = useState<string>('');
    const [notes, setNotes] = useState<string>('');
    

    /**
     * Update the screen states based on the device we passed through the navigation props
    */
    useEffect(() => {
        if (route?.params?.device) {
            setSerialNumber(route?.params?.device?.serial_number ?? '')
            setModel(route?.params?.device?.model ?? '')
            setOs(route?.params?.device?.os ?? '')
            setCurrentOwner(route?.params?.device?.current_owner ?? '')
            setNotes(route?.params?.device?.notes ?? '')
        }
    }, [route]);


    return (
        <View style={styles.container}>

            <Header
                navigation={navigation}
                title={'Device QR Code'}
                backEnabled
            />

            <ScrollView
                style={styles.scrollview}
                contentContainerStyle={styles.scrollviewCont}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.detailsView}>
                    
                    {serialNumber ?
                        <View style={styles.qrcodeView}>
                            <QRCode
                                value={serialNumber}
                                backgroundColor={COLOR.white}
                                size={width * 0.4}
                                logoBackgroundColor={'transparent'}
                                onError={(e: any) => console.log('QRCode error: ', e)}
                            />
                        </View>
                        : null
                    }

                    <Text style={{...styles.deviceLabel, marginTop: 0}}>
                        Serial Number:
                        <Text style={styles.deviceDetails}>  {serialNumber ?? '-'}</Text>
                    </Text>
                    <Text style={styles.deviceLabel}>
                        Model:
                        <Text style={styles.deviceDetails}>  {model ?? '-'}</Text>
                    </Text>
                    <Text style={styles.deviceLabel}>
                        OS:
                        <Text style={styles.deviceDetails}>  {os ?? '-'}</Text>
                    </Text>
                    <Text style={styles.deviceLabel}>
                        Current Owner:
                        <Text style={styles.deviceDetails}>  {currentOwner ?? '-'}</Text>
                    </Text>
                    <Text style={styles.deviceLabel}>
                        Notes:
                        <Text style={styles.deviceDetails}>  {notes ?? '-'}</Text>
                    </Text>
                </View>

            </ScrollView>
        </View>
    )
}

export default DeviceQr;