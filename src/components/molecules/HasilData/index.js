import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Chart, TabRiwayat } from '../../atoms'

const HasilData = ({ datas }) => {
  console.log("Datas from props", datas)
    return (
    <View style={styles.page}>
      <View style={styles.tab}>
        <TabRiwayat text='Weekly'/>
        <TabRiwayat text='Monthly'/>
        <TabRiwayat text='6 Months'/>
        <TabRiwayat text='Annual'/>
      </View>
      <Chart/>
      <View style={styles.content1}>
        <Text style={styles.text3}>Alat</Text>
        <Text style={styles.text4}>:</Text>
        <Text style={{fontSize: 14}}>{datas?.alat || "Tidak tersedia"}</Text>
      </View>
      <View style={styles.content1}>
        <Text style={styles.text3}>Lokasi</Text>
        <Text style={styles.text4}>:</Text>
        <Text style={{fontSize: 14}}>{datas?.lokasi || "Tidak tersedia"}</Text>
      </View>
      <View style={styles.content1}>
        <Text style={styles.text3}>Merk</Text>
        <Text style={styles.text4}>:</Text>
        <Text style={{fontSize: 14}}>{datas?.merk || "Tidak tersedia"}</Text>
      </View>
      <View style={styles.content1}>
        <Text style={styles.text3}>Tahun</Text>
        <Text style={styles.text4}>:</Text>
        <Text style={{fontSize: 14}}>{datas?.tahun || "Tidak tersedia"}</Text>
      </View>
    </View>
    )
}

export default HasilData

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#E8E8E8',
        flex: 1
      },
      tab: {
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      content1: {
        flexDirection: 'row',
        marginVertical: 3,
        marginHorizontal: 20,
      },
      text3: {
        fontSize: 14,
        marginRight: 10,
        width: 50,
      },
      text4: {
        marginRight: 10,
        fontSize: 14,
      },
})
