import React, { FC } from 'react';
import { useDimensions } from '@react-native-community/hooks';
import { View, Text, FlatList, Pressable, Image } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../../components/header/Header';
import styles from './styles';


export type DeviceType = {
    serial_number: string;
    model: string;
    os: string;
    current_owner: string;
    notes: string;
}

type Props = {
    navigation: any;
}

const Home: FC<Props> = ({ navigation }) => {
    const { width, height } = useDimensions().window;
    // Get devices list from redux and sort them alphabetically by model name.
    const devices = useSelector((state: any) => state.content.devices.sort((a: DeviceType, b: DeviceType) => a?.model?.toUpperCase().localeCompare(b?.model?.toUpperCase())));

    
    /**
     * Renders Device items in the flatlist
    */
    const renderDevices: (item: any) => any = ({ item }) => {
        return (
            <View style={styles.deviceView}>
                <Text style={styles.deviceLabel}>
                    Serial Number:
                    <Text style={styles.deviceDetails}>  {item?.serial_number ?? '-'}</Text>
                </Text>
                <Text style={styles.deviceLabel}>
                    Model:
                    <Text style={styles.deviceDetails}>  {item?.model ?? '-'}</Text>
                </Text>
                <Text style={styles.deviceLabel}>
                    OS:
                    <Text style={styles.deviceDetails}>  {item?.os ?? '-'}</Text>
                </Text>
                <Text style={styles.deviceLabel}>
                    Current Owner:
                    <Text style={styles.deviceDetails}>  {item?.current_owner ?? '-'}</Text>
                </Text>
                <Text style={styles.deviceLabel}>
                    Notes:
                    <Text style={styles.deviceDetails}>  {item?.notes ?? '-'}</Text>
                </Text>
                <View style={styles.deviceActionsRow}>
                    <Pressable
                      style={({ pressed }) => styles.deviceActionBtn(pressed)}
                      onPress={() => navigation.navigate('DeviceQr', { device: item })}
                    >
                        <Image
                            source={require('../../assets/images/qr_icon.png')}
                            resizeMode={'contain'}
                            style={styles.actionIcon}
                        />
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => styles.deviceActionBtn(pressed)}
                      onPress={() => navigation.navigate('EditDevice', { device: item })}
                    >
                        <Image
                            source={require('../../assets/images/edit_icon.png')}
                            resizeMode={'contain'}
                            style={styles.actionIcon}
                        />
                    </Pressable>
                    <Pressable
                      style={({ pressed }) => styles.deviceActionBtn(pressed)}
                      onPress={() => navigation.navigate('DeleteDevice', { device: item })}
                    >
                        <Image
                            source={require('../../assets/images/delete_icon.png')}
                            resizeMode={'contain'}
                            style={styles.deleteIcon}
                        />
                    </Pressable>
                </View>
            </View>
        )
    };

    /**
     * Renders the flatlist Header Component
    */
    const headerComponent: () => any = () => {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>List of Devices</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>

            <Header
                navigation={navigation}
                title={'Device Manager'}
                addAction={() => navigation.navigate('AddDevice')}
            />
            
            {devices?.length > 0 ?
                <FlatList
                    data={devices}
                    renderItem={renderDevices}
                    keyExtractor={(item, index) => index?.toString() ?? Math.random().toString()}
                    ListHeaderComponent={headerComponent()}
                    ItemSeparatorComponent={() => <View style={{ height: height * 0.03 }} />}
                    style={styles.flatlist}
                    contentContainerStyle={styles.flatlistCont}
                    showsVerticalScrollIndicator={false}
                />
                :
                <View style={styles.noDevicesView}>
                    <Text style={styles.noDevicesText}>There are no devices added!</Text>
                </View>
            }
        </View>
    )
}

export default Home;