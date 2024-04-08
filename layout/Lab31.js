import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Lab31 = () => {
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    const [pass, setpass] = useState('')
    console.log('name:',name+'-'+'phone:',phone+'-'+'pass:',pass);
    console.log();
    console.log();
    return (
        <View style={styles.container1}>
            <TextInput style={styles.input} placeholder='Nhap ten' onChangeText={(text) => setname(text)} />
            <TextInput style={styles.input} placeholder='Nhap so dien thoai' onChangeText={(text) => setphone(text)} />
            <TextInput style={styles.input} placeholder='Nhap mat khau' onChangeText={(text) => setpass(text)} />
            <View style={styles.container}>
                <Text style={styles.baseText}>Em vào đời bằng{' '}
                    <Text style={[styles.boldText, { color: 'red' }]}>vang dỏ</Text>{' '}
                    Anh vào đời bằng{' '}
                    <Text style={[styles.boldText, { color: 'yellow' }]}>nước trà</Text>
                </Text>

                <Text style={styles.baseText}>
                    Bằng cơn mưa thơm{' '}
                    <Text style={[styles.boldText, styles.italicText, { fontSize: 20 }]}>mùi đất{' '}</Text>{' '}và{' '}
                    <Text style={[styles.italicText, { fontSize: 10 }]}>bằng hoa dại mọc trước nhà</Text>
                </Text>

                <Text style={[styles.baseText, styles.boldText, styles.italicText, { color: 'gray' }]}>Em vào đời bằng kế hoạch Anh vào đời bằng mộng mơ</Text>

                <Text style={styles.baseText}>Lý trí em{' '}
                    <Text style={{ textDecorationLine: 'underline', letterSpacing: 20, fontWeight: 'bold' }}>
                        {' '}Công cụ {' '}
                    </Text>
                    còn trái tim anh là
                    <Text style={{ textDecorationLine: 'underline', letterSpacing: 20, fontWeight: 'bold' }}>{' '}động cơ{' '}</Text>
                </Text>

                <Text style={[styles.baseText, { textAlign: 'right' }]}>Em vào đời nhiều đồng nghiệp Anh vào nhiều thân tình</Text>

                <Text style={[styles.baseText, { textAlign: 'center', fontWeight: 'bold', color: 'orange' }]}>Anh chỉ muốn chân mình đạp đất Không muốn đạp ai dưới chân mình</Text>

                <Text style={[styles.baseText, { fontWeight: 'bold', color: 'black' }]}>Em vào đời bằng
                    <Text style={{ color: 'white' }}> mây trắng </Text> Em vào đời bằng
                    <Text style={{ color: 'yellow' }}> nắng xanh</Text>
                </Text>

                <Text style={[styles.baseText, { fontWeight: 'bold', color: 'black' }]}>Em vào đời bằng
                    <Text style={{ color: 'yellow' }}> đại lộ </Text>và con đường đó giờ
                    <Text style={{ color: 'white' }}> vắng anh </Text>
                </Text>
            </View>
        </View>
    )
}

export default Lab31

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        alignSelf: 'center',
        padding: 15
    }, container1: {
        width: '22%',
        
    },
    baseText: {
        fontFamily: 'Cochin',
        color: 'white',
        fontSize: 16,
        marginTop: 10
    },
    boldText: {
        fontWeight: 'bold'
    },
    italicText: {
        fontStyle: 'italic'
    },
    input:{
        borderWidth:1,
        borderColor:'# FF3030',
        borderRadius:10,
        marginVertical:10,
        height:40
    }
})