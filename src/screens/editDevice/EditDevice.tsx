import React, { FC, useState, useEffect } from 'react';
import { View, ScrollView, Text, Keyboard } from 'react-native';
import { useDispatch } from 'react-redux';
import { setDevicesEdit } from '../../stores/actions/content';
import Header from '../../components/header/Header';
import Button from '../../components/button/Button';
import FloatingModal from '../../components/floatingModal/FloatingModal';
import CustomTextInput from '../../components/customTextInput/CustomTextInput';
import { DeviceType } from '../home/Home';
import styles from './styles';


type Props = {
    navigation: any;
    route: any;
}

const EditDevice: FC<Props> = ({ navigation, route }) => {
    const dispatch = useDispatch();
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
     - Check if all the required fields are filled.
     - Dispatch "edit device" action with the edited device.
    */
    const editDeviceAction = () => {
        if (!(model && os && currentOwner)) {
            setModalTitle('Please fill in all the required fields');
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

        dispatch(setDevicesEdit(tempDevice));
        
        setModalTitle('The device was edited successfully!');
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
                title={'Edit Device'}
                backEnabled
            />

            <ScrollView
                style={styles.scrollview}
                contentContainerStyle={styles.scrollviewCont}
                showsVerticalScrollIndicator={false}
            >
                {/* <Text style={styles.descriptionTitle}>Please fill in the details of the device</Text> */}

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Serial Number:</Text>
                    <View style={styles.inputDisabledView}>
                        <Text numberOfLines={1} style={styles.inputDisabled}>{serialNumber}</Text>
                    </View>
                </View>

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
                    buttonTitle={'Edit'}
                    containerStyles={styles.buttonStyles}
                    imageLeft={require('../../assets/images/edit_icon.png')}
                    action={editDeviceAction}
                />
                
            </ScrollView>
        </View>
    )
}

export default EditDevice;