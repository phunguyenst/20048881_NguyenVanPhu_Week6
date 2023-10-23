import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { TextInput } from "react-native-paper";

export default function Trang2() {
  const data = [
    {
      id: 1,
      name: "Cáp chuyển từ Cổng USB sang PS2...",
      image: "usb1.jpg",
      rating: "rating.png",
      price: "69.000 đ",
      countStar: 15,
      discount: "-39%"
    },
    {
      id: 2,
      name: "Cáp chuyển từ Cổng USB sang PS2...",
      image: "usb2.jpg",
      rating: "rating.png",
      price: "69.000 đ",
      countStar: 15,
      discount: "-39%"
    },
    {
      id: 3,
      name: "Cáp chuyển từ Cổng USB sang PS2...",
      image: "usb3.jpg",
      rating: "rating.png",
      price: "69.000 đ",
      countStar: 15,
      discount: "-39%"
    },
    {
      id: 4,
      name: "Cáp chuyển từ Cổng USB sang PS2...",
      image: "usb4.jpg",
      rating: "rating.png",
      price: "69.000 đ",
      countStar: 15,
      discount: "-39%"
    },
    {
      id: 5,
      name: "Cáp chuyển từ Cổng USB sang PS2...",
      image: "usb5.jpg",
      rating: "rating.png",
      price: "69.000 đ",
      countStar: 15,
      discount: "-39%"
    },
    {
      id: 6,
      name: "Cáp chuyển từ Cổng USB sang PS2...",
      image: "usb6.jpg",
      rating: "rating.png",
      price: "69.000 đ",
      countStar: 15,
      discount: "-39%"
    },
  ];
  return (
    <View style={styles.container}>
      <View
        style={{ flex: 1, flexDirection: "row", backgroundColor: "#1BA9FF" }}
      >
        <AntDesign name="arrowleft" size={20} color="black" />
        
        <View style = {{flex: 1}}>
        <TextInput
          left={<TextInput.Icon name="search" size="24" color="black" />}
          placeholder="Dây cáp usb"
          style={{ height: "30px", width: 250 }}
        />
      
        </View>
       
        <AntDesign name="shoppingcart" size={24} color="white" />
        <AntDesign name="ellipsis1" size={24} color="white" />
      </View>
      <View style={{ flex: 9 }}>
        <ScrollView nestedScrollEnabled>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <View
                  style={{ margin: 5, padding: 10, width: "50%", flex:1 }}
                >
                   <Image
                      source={require(`../assets/${item.image}`)}
                      style={{ height: 90, width: 150 }}
                    ></Image>
                    <Text>{item.name}</Text>
                    <View style={{ flexDirection: "row" }}>
                      <Image
                        source={require(`../assets/${item.rating}`)}
                        style={{ height: 20, width: 150 }}
                      ></Image>
                      <Text>({item.countStar})</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text>{item.price}</Text>
                      <Text>({item.discount})</Text>
                  </View>
                </View>
              );
            }}
            numColumns={2}
          ></FlatList>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
