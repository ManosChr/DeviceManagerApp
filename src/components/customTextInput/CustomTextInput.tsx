import React, { FC } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';


type TextInputType = {
    inputLabel: string;
    keyboardType: any;
    value: string;
    onChangeText: (text: string) => void;
    autoCapitalize: any;
    returnKeyType: any;
    multiline?: boolean;
}

const CustomTextInput: FC<TextInputType> = ({
    inputLabel,
    keyboardType,
    value,
    onChangeText,
    autoCapitalize,
    returnKeyType,
    multiline = false
}) => {

    return (
        <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>{inputLabel}</Text>
            <TextInput
                style={styles.input(multiline)}
                value={value}
                keyboardType={keyboardType}
                onChangeText={onChangeText}
                autoCapitalize={autoCapitalize}
                returnKeyType={returnKeyType}
                multiline={multiline}
                autoCorrect={false} />
        </View>
    )
};

export default CustomTextInput;