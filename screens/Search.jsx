import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Categories from '../components/molecule/Categories';
import SmallNews from '../components/molecule/SmallNews';

const Search = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 32, fontWeight: "bold", marginBottom: 10 }}>Discover</Text>
            <Text style={{ fontSize: 14, color: "#cdcdcd"}}>News from all over the world</Text>
            <TextInput style={{ marginTop: 20, backgroundColor: "#cdcdcd", height: 50, borderRadius: 10, paddingLeft: 20 }} placeholder="Search" />
            <Categories/>
            <SmallNews/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        marginTop: 100,
        marginLeft: 30,
        marginRight: 30,
    },
})

export default Search;
