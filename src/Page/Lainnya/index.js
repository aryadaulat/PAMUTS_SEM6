import { Text, StyleSheet, View,Modal,Alert } from 'react-native'
import React, { Component } from 'react'

export default class Lainnya extends Component {
	constructor(props) {
    super(props);
    this.state = {
      nama: '',
      selectedLanguage: '',
      modalVisible: true,
    };
  }
	setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };
  render() {
		const {modalVisible} = this.state;
    return (
      <View
			style={{
				backgroundColor: 'white',

				flex: 1}}
			>
				{/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            this.setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
							<View style={{backgroundColor:'orange',padding: 10}}>
							<Text>Pilih Pelabuhan</Text>
							</View>
              
            </View>
          </View>
        </Modal> */}
				<View style={{backgroundColor:'darkblue',padding:30,alignItems:'center',flex:0.04}}>
					<Text style={{color:'white'}}>Daftar Pembatalan</Text>
				</View>
        <View style={{alignItems:'center',justifyContent:'center',flex:0.8}}>
					<View>
						<Text>Menu</Text>
					</View>
					<Text style={{color:'darkblue'}}>Tidak Ada Aktivitas Pembatalan Tiket</Text>
				</View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
	centeredView: {
    flex: 1,
    justifyContent: 'center',
		// backgroundColor:'red',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    // padding: 35,
		// paddingLeft: 15,
		height:180,
		width:260,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})