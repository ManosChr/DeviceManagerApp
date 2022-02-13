import React, { FC, useState, useEffect } from 'react';
import { View, ScrollView, Text, Platform } from 'react-native';
import { useDispatch } from 'react-redux';
import { setDevicesDelete } from '../../stores/actions/content';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import FloatingModal from '../../components/floatingModal/FloatingModal';
import CustomSpinner from '../../components/customSpinner/CustomSpinner';
import styles from './styles';


type Props = {
    navigation: any;
    route: any;
}

const DeleteDevice: FC<Props> = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const [serialNumber, setSerialNumber] = useState<string>('');
    const [model, setModel] = useState<string>('');
    const [os, setOs] = useState<string>('');
    const [currentOwner, setCurrentOwner] = useState<string>('');
    const [notes, setNotes] = useState<string>('');
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [modalTitle, setModalTitle] = useState<string>('');
    const [modalBtnTitle, setModalBtnTitle] = useState<string>('');
    const [modalAction, setModalAction] = useState<{ [key: string]: () => void } | null>(null);
    const [modalTwoBtns, setModalTwoBtns] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [quoteHtml, setQuoteHtml] = useState<string>('');
    const [modalBackdrop, setModalBackdrop] = useState<{ [key: string]: () => void } | null>(null);
    

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

    /**
     * Asynchronous request to get "The Quote Of The Day".
     * On success show the response in a popup.
    */
    const getQuoteOfTheDay = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://zenquotes.io/api/today', { method: 'GET' });
            const json = await response.json();

            setLoading(false);
            
            setModalTitle('Quote of the day');
            setQuoteHtml(json?.[0]?.h ?? '');
            setModalBtnTitle('OK');
            setModalTwoBtns(false);
            setModalAction({ action: () => { setModalVisible(false); navigation.goBack(); }});
            setModalBackdrop(null);
            if (Platform.OS === 'ios') {
                setTimeout(() => setModalVisible(true), 500);
            } else {
                setModalVisible(true);
            }
        } catch (error) {
            setLoading(false);
            console.log('getQuoteOfTheDay error: ',error);
        }
    }

    const getQuoteOfTheDay2 = () => {
        setLoading(true);
        fetch('https://zenquotes.io/api/today', { method: 'GET' })
          .then((response) => response.json())
          .then((json) => {
            setLoading(false);
            
            setModalTitle('Quote of the day');
            setQuoteHtml(json?.[0]?.h ?? '');
            setModalBtnTitle('OK');
            setModalTwoBtns(false);
            setModalAction({ action: () => { setModalVisible(false); navigation.goBack(); }});
            setModalBackdrop(null);
            if (Platform.OS === 'ios') {
                setTimeout(() => setModalVisible(true), 500);
            } else {
                setModalVisible(true);
            }
          })
          .catch((error) => {
            setLoading(false);
            console.log('getQuoteOfTheDay error: ',error);
          });
    };

    /**
      - Dispatch "delete device" action for the selected device.
      - When the device is removed the 'quote of the day' is shown in a popup.
    */
    const deleteDeviceAction = () => {
        if (!(route?.params?.device)) {
            setModalTitle('Something went wrong');
            setQuoteHtml('');
            setModalBtnTitle('OK');
            setModalTwoBtns(false);
            setModalAction({ action: () => { setModalVisible(false); navigation.goBack(); }});
            setModalBackdrop(null);
            if (Platform.OS === 'ios') {
                setTimeout(() => setModalVisible(true), 500);
            } else {
                setModalVisible(true);
            }
            return;
        }

        dispatch(setDevicesDelete(route?.params?.device));
        
        setModalTitle('The device was deleted successfully!');
        setQuoteHtml('');
        setModalBtnTitle('OK');
        setModalTwoBtns(false);
        setModalAction({ action: () => { setModalVisible(false); getQuoteOfTheDay(); }});
        setModalBackdrop(null);
        if (Platform.OS === 'ios') {
            setTimeout(() => setModalVisible(true), 500);
        } else {
            setModalVisible(true);
        }
    };

    return (
        <View style={styles.container}>

            <FloatingModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                title={modalTitle}
                htmlContent={quoteHtml}
                btnTitle={modalBtnTitle}
                btnAction={modalAction}
                twoBtns={modalTwoBtns}
                onBackButtonPress={modalBackdrop}
                onBackdropPress={modalBackdrop}
            />

            <Header
                navigation={navigation}
                title={'Delete Device'}
                backEnabled
            />

            <ScrollView
                style={styles.scrollview}
                contentContainerStyle={styles.scrollviewCont}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.topContainer}>
                    <Text style={styles.descriptionTitle}>Device Details</Text>

                    <View style={styles.detailsView}>
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
                </View>

                <Button
                    buttonTitle={'Delete'}
                    containerStyles={styles.buttonStyles}
                    imageLeft={require('../../assets/images/delete_icon.png')}
                    action={() => {
                        setModalTitle('Are you sure you want to delete this device?');
                        setQuoteHtml('');
                        setModalBtnTitle('Yes');
                        setModalTwoBtns(true);
                        setModalAction({ action: () => { setModalVisible(false); deleteDeviceAction() }});
                        setModalBackdrop({ action: () => setModalVisible(false)});
                        setModalVisible(true);
                    }}
                />
                
            </ScrollView>
            
            <CustomSpinner isVisible={loading} />

        </View>
    )
}

export default DeleteDevice;