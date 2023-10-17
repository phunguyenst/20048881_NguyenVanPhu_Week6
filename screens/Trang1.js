import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Button
} from "react-native";
import React from "react";
import { Appbar, TextInput } from "react-native-paper";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from '@expo/vector-icons';

export default function Trang1() {
  var listProduct = [
    {
      id: 1,
      image: "img1.jpg",
      name: "Ca nấu lẩu, nấu mì",
      shop: "shop Devang",
    },
    {
      id: 2,
      image: "img2.jpg",
      name: "Ca nấu lẩu, nấu mì",
      shop: "shop Devang",
    },
    {
      id: 3,
      image: "img3.jpg",
      name: "Ca nấu lẩu, nấu mì",
      shop: "shop Devang",
    },
    {
      id: 4,
      image: "img4.jpg",
      name: "Ca nấu lẩu, nấu mì",
      shop: "shop Devang",
    },
    {
      id: 5,
      image: "img5.jpg",
      name: "Ca nấu lẩu, nấu mì",
      shop: "shop Devang",
    },
    {
      id: 6,
      image: "img6.jpg",
      name: "Ca nấu lẩu, nấu mì",
      shop: "shop Devang",
    },
    {
      id: 7,
      image: "img7.jpg",
      name: "Ca nấu lẩu, nấu mì",
      shop: "shop Devang",
    },
    {
      id: 7,
      image: "img7.jpg",
      name: "Ca nấu lẩu, nấu mì",
      shop: "shop Devang",
    },

    
  ];
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "#1BA9FF",
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Entypo name="back" size={24} color="black" />
        <Text>Chat</Text>
        <MaterialCommunityIcons name="cart-check" size={24} color="black" />
      </View>
      <View style={styles.view_product}>
        <View style={{ backgroundColor: "#e5e5e5", paddingHorizontal: 25 }}>
          <Text style = {{fontSize: 14}}>
            Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
          </Text>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
          <ScrollView style={{ height: "100%" }} nestedScrollEnabled>
            <FlatList
              data={listProduct}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return (
                  <View style={styles.viewItem}>
                    <Image
                      style={{ flex: 1, height: 75, width: 75 }}
                      source={require(`../assets/${item.image}`)}
                    />
                    <View style= {{flex: 2, marginHorizontal:10, height:"50%"}}>
                        <Text style = {styles.textItem} >{item.name}</Text>
                        <Text style = {styles.textItem}>{item.shop}</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <TouchableOpacity
                        style={{
                          height: 40,
                          width: 84,
                          backgroundColor: "#F31111",
                          justifyContent:"center",
                          
                        }}
                      >
                        <Text style ={{textAlign: "center", fontSize: 16, color:"#fff"}}>Chat</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
            ></FlatList>
          </ScrollView>
        </View>
        <View style={{flex:0.5, backgroundColor:"#33ffff"}}>
        <Appbar.Header
          actions = {[
            <Button
              title="Menu"
              icon={<SimpleLineIcons name="menu" size={24} color="black" />}
            ></Button>,
            <Button
              title="Home"
              icon={<SimpleLineIcons name="home" size={24} color="black" />}
            ></Button>,
            <Button
              title="Back"
              icon={<Entypo name="back" size={24} color="black" />}
            ></Button>
          ]}
        >

        </Appbar.Header>

        </View>
      
      </View>

      {/* <View style= {{backgroundColor:"yellow", flex:8}}>
                <View style= {{flexDirection: "column"}}>
                    <View style={{flex:1.5,width:"100%", flexDirection:"row", justifyContent:"space-between",}}>
                        <Image
                            style = {{height: 74, width: 74}}
                            source={require("../assets/img1.jpg")}
                            resizeMode='contain'
                        ></Image>
                        <View >
                            <Text>Ca nấu lẩu, nấu mì mini</Text>
                           <span>Shop</span>
                        </View>
                        
                        <TouchableOpacity style ={{height: 33, width: 84, backgroundColor:"#F31111", marginTop:17}}>
                            <Text>Chat</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1.5,width:"100%", height: 40, flexDirection:"row", justifyContent:"space-between",}}>
                        <Image
                            style = {{height: 74, width: 74}}
                            source={require("../assets/img1.jpg")}
                            resizeMode='contain'
                        ></Image>
                        <Text>Ca nấu lẩu, nấu mì mini</Text>
                        <TouchableOpacity style ={{height: 33, width: 84, backgroundColor:"#F31111", marginTop:17}}>
                            <Text>Chat</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1.5,width:"100%", height: 40, flexDirection:"row", justifyContent:"space-between",}}>
                        <Image
                            style = {{height: 74, width: 74}}
                            source={require("../assets/img1.jpg")}
                            resizeMode='contain'
                        ></Image>
                        <Text>Ca nấu lẩu, nấu mì mini</Text>
                        <TouchableOpacity style ={{height: 33, width: 84, backgroundColor:"#F31111", marginTop:17}}>
                            <Text>Chat</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1.5,width:"100%", height: 40, flexDirection:"row", justifyContent:"space-between",}}>
                        <Image
                            style = {{height: 74, width: 74}}
                            source={require("../assets/img1.jpg")}
                            resizeMode='contain'
                        ></Image>
                        <Text>Ca nấu lẩu, nấu mì mini</Text>
                        <TouchableOpacity style ={{height: 33, width: 84, backgroundColor:"#F31111", marginTop:17}}>
                            <Text>Chat</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:1,width:"100%", height: 40, flexDirection:"row", justifyContent:"space-between",}}>
                        <Image
                            style = {{height: 74, width: 74}}
                            source={require("../assets/img1.jpg")}
                            resizeMode='contain'
                        ></Image>
                        <Text>Ca nấu lẩu, nấu mì mini</Text>
                        <TouchableOpacity style ={{height: 33, width: 84, backgroundColor:"#F31111", marginTop:17}}>
                            <Text>Chat</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  view_product: {
    flex: 15,
  },
  viewItem: {
    backgroundColor: "#c4c4c4",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
 
    marginBottom:5
    
  },
});
