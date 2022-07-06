import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {colors, paramaters } from '../global/styles';
import {Icon} from "@rneui/themed";

const Header = ({title, type}) => {
    return(
        <View style={styles.header}>
            <View style={{marginLeft: 20}}>
                <Icon 
                    type="material-community"
                    name={type}
                    color={colors.headerText}
                    size={28}
                    onPress={() => alert('Pressed!')}
                />
            </View>
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.buttons,
        flexDirection: "row",
        height: paramaters.headerHeight
    },
    headerText: {
        color: colors.headerText,
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 30
    }
})

