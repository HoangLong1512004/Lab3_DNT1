import {  Alert, Image, Modal, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Lab33 = () => {
    const [dialog, setdialog] = useState(false)
    return (
        <View style={{backgroundColor:'#FFC1C1',width:'30%',height:'100%',alignContent: 'center', alignItems: 'center', flex: 1, justifyContent: 'center'}}>
            <TouchableOpacity onPress={() => setdialog(true)}>
                <Text style={{ backgroundColor: 'green', color: 'white', padding: 7, borderRadius: 7, fontWeight: 'bold' }}>Open model</Text>
            </TouchableOpacity>
            <Modal
                visible={dialog}
                animationType='slide'
                transparent={true}
            >
                <View style={{ alignContent: 'center', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                    <View style={{ backgroundColor: '#00FF00', borderRadius: 30, borderWidth: 1, borderColor: 'gray', padding: 20 }}>
                        <Text style={{ textAlign: 'center', margin: 20 }}>Hello world</Text>
                        <Image style={{ width: 300, height: 320 }} source={uri = 'https://i.pinimg.com/736x/e9/97/d1/e997d171f809d1166d14486fd6dd8019.jpg'} />
                        <View style={{ alignContent: 'center', alignItems: 'center', justifyContent: 'center' } }>
                            <TouchableOpacity onPress={() =>{setdialog(false)
                            Alert.alert('Đã đóng model')
                            } }>
                                <Text style={{ backgroundColor: 'red', color: 'white', padding: 7, borderRadius: 7, fontWeight: 'bold', width: 100, margin: 10 }}>Closd model</Text>
                            </TouchableOpacity></View>
                </View>
        </View>
      </Modal >
    </View >
  )
}

export default Lab33

const styles = StyleSheet.create({})