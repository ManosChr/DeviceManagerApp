import React, { FC, useState } from 'react';
import { View, ScrollView, Text, Keyboard } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setDevicesAdd } from '../../stores/actions/content';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import FloatingModal from '../../components/floatingModal/FloatingModal';
import CustomTextInput from '../../components/customTextInput/CustomTextInput';
import { DeviceType } from '../home/Home';
import styles from './styles';


type Props = {
    navigation: any;
}

const AddDevice: FC<Props> = ({ navigation }) => {
    const dispatch = useDispatch();
    const devices = useSelector((state: any) => state.content.devices);
    const [serialNumber, setSerialNumber] = useState<string>('');
    const [model, setModel] = useState<string>('');
    const [os, setOs] = useState<string>('');
    const [currentOwner, setCurrentOwner] = useState<string>('');
    const [notes, setNotes] = useState<string>('');
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const [modalTitle, setModalTitle] = useState<string>('');
    const [modalAction, setModalAction] = useState<{ [key: string]: () => void } | null>(null);
    const [modalBackdrop, setModalBackdrop] = useState<{ [key: string]: () => void } | null>(null);
    

      /**
       - Check if all the required fields are filled.
       - Check if the device already exists based on the serial_number.
       - Dispatch "add device" action with the new device.
      */
    const addDeviceAction = () => {
        if (!(serialNumber && model && os && currentOwner)) {
            setModalTitle('Please fill in all the required fields');
            setModalAction(null);
            setModalBackdrop({ action: () => setModalVisible(false) });
            setModalVisible(true);
            return;
        }

        if (devices.some((item: DeviceType) => item?.serial_number === serialNumber)) {
            setModalTitle('This device has already been added!');
            setModalAction(null);
            setModalBackdrop({ action: () => setModalVisible(false) });
            setModalVisible(true);
            return;
        }

        const tempDevice: DeviceType = {
            serial_number: serialNumber,
            model: model,
            os: os,
            current_owner: currentOwner,
            notes: notes,
        }

        dispatch(setDevicesAdd(tempDevice));
        
        setModalTitle('The device was added successfully!');
        setModalAction({ action: () => { setModalVisible(false); navigation.goBack(); }});
        setModalBackdrop(null);
        setModalVisible(true);
    };

    return (
        <View 
          style={styles.container} 
          onStartShouldSetResponder={() => {Keyboard.dismiss(); return true;}}>

            <FloatingModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                title={modalTitle}
                btnAction={modalAction}
                onBackButtonPress={modalBackdrop}
                onBackdropPress={modalBackdrop}
            />

            <Header
                navigation={navigation}
                title={'Add Device'}
                backEnabled
            />

            <ScrollView
                style={styles.scrollview}
                contentContainerStyle={styles.scrollviewCont}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.descriptionTitle}>Please fill in the details of the device</Text>

                <CustomTextInput
                    inputLabel={'Serial Number:*'}
                    value={serialNumber}
                    keyboardType={'default'}
                    autoCapitalize={'none'}
                    onChangeText={(text: string) => setSerialNumber(text) }
                    returnKeyType={'next'}
                />

                <CustomTextInput
                    inputLabel={'Model:*'}
                    value={model}
                    keyboardType={'default'}
                    autoCapitalize={'words'}
                    onChangeText={(text: string) => setModel(text) }
                    returnKeyType={'next'}
                />

                <CustomTextInput
                    inputLabel={'OS:*'}
                    value={os}
                    keyboardType={'default'}
                    autoCapitalize={'none'}
                    onChangeText={(text: string) => setOs(text) }
                    returnKeyType={'next'}
                />

                <CustomTextInput
                    inputLabel={'Current Owner:*'}
                    value={currentOwner}
                    keyboardType={'default'}
                    autoCapitalize={'words'}
                    onChangeText={(text: string) => setCurrentOwner(text) }
                    returnKeyType={'next'}
                />

                <CustomTextInput
                    inputLabel={'Notes:'}
                    value={notes}
                    keyboardType={'default'}
                    autoCapitalize={'sentences'}
                    onChangeText={(text: string) => setNotes(text) }
                    returnKeyType={'done'}
                    multiline
                />

                <Text style={styles.requiredText}>* These fields are required.</Text>

                <Button
                    buttonTitle={'Add'}
                    containerStyles={styles.buttonStyles}
                    imageLeft={require('../../assets/images/add_icon.png')}
                    action={addDeviceAction}
                />
                
            </ScrollView>
        </View>
    )
}

export default AddDevice;