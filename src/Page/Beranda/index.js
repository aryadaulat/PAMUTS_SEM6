import { Text, StyleSheet, View, TextInput, Image } from 'react-native'
import React, { Component, } from 'react'
import { kapal } from '../../Asset';

export default class Beranda extends Component {
    constructor(props){
		super(props);
		this.state={
			nama:'',
		}
	}
	onChangeText = (namaState, value) => {
    this.setState({
      [namaState]: value,
    });
  };
  render() {
    return (
      <View style = {{backgroundColor:'#d5d8de',margin:20}}>
          <View style = {{alignItems:'center', marginBottom: 30}}>
              <Text style = {{color:'#6495ED',fontSize:35}}>Kapalzy</Text>
          </View>
          <View style = {{marginLeft: 15}}>
              <Text style = {{color: 'grey',fontSize:20}}>Pelabuhan Awal</Text>
          </View>
          <View style = {{flexDirection:'row',marginLeft: 15}}>
            <Image
            source={kapal}
            style={{height:50,width:50}}
            />
          <TextInput
            placeholder="PILIH"
            style={styles.TextInput}
            value={this.state.nama}
            onChangeText={text => this.onChangeText('nama', text)}
						color="black"
            placeholderTextColor="red"
          />
          </View>
          <View style = {{marginLeft: 15,marginTop:25}}>
              <Text style = {{color: 'grey',fontSize:20}}>Pelabuhan Tujuan</Text>
          </View>
          <View style = {{flexDirection:'row',marginLeft: 15}}>
            <Image
            source={kapal}
            style={{height:50,width:50}}
            />
          <TextInput
            placeholder="PILIH"
            style={styles.TextInput}
            value={this.state.nama}
            onChangeText={text => this.onChangeText('nama', text)}
						color="black"
            placeholderTextColor="red"
          />
          </View>
          <View style = {{marginLeft: 15,marginTop:25}}>
              <Text style = {{color: 'grey',fontSize:20}}>Kelas Layanan</Text>
          </View>
          <View style = {{flexDirection:'row',marginLeft: 15}}>
            <Image
            source={kapal}
            style={{height:50,width:50}}
            />
          <TextInput
            placeholder="PILIH"
            style={styles.TextInput}
            value={this.state.nama}
            onChangeText={text => this.onChangeText('nama', text)}
						color="black"
            placeholderTextColor="red"
          />
          </View>
          <View style = {{marginLeft: 15,marginTop:25}}>
              <Text style = {{color: 'grey',fontSize:20}}>Tanggal Masuk Pelabuhan</Text>
          </View>
          <View style = {{flexDirection:'row',marginLeft: 15}}>
            <Image
            source={kapal}
            style={{height:50,width:50}}
            />
          <TextInput
            placeholder="PILIH"
            style={styles.TextInput}
            value={this.state.nama}
            onChangeText={text => this.onChangeText('nama', text)}
						color="black"
            placeholderTextColor="red"
          />
          </View>
          <View style = {{marginLeft: 15,marginTop:25,}}>
              <Text style = {{color: 'grey',fontSize:20}}>Jam Masuk Pelabuhan</Text>
          </View>
          <View style = {{flexDirection:'row',marginLeft: 15}}>
            <Image
            source={kapal}
            style={{height:50,width:50}}
            />
          <TextInput
            placeholder="PILIH"
            style={styles.TextInput}
            value={this.state.nama}
            onChangeText={text => this.onChangeText('nama', text)}
						color="black"
            placeholderTextColor="red"
          />
          </View>
          <View style = {{padding:20,backgroundColor:'#bac3d1',marginHorizontal:20,marginTop:25,flexDirection:'row'}}>
            <Text style={{color:'black',justifyContent:'flex-end'}}>Dewasa</Text>
            <Text style = {{textAlign:'right'}}>1</Text>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    TextInput: {
        padding: 10,
        marginBottom: 1,
        // backgroundColor:'white',
        borderColor: 'black',
        borderBottomWidth: 3,
      },
})
   