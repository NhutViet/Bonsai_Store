import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import AxiosInstance from "@/helper/AxiosInstance";
import { ScrollView } from "react-native";
import { FlashList } from "@shopify/flash-list";
import RenderItemPR from "@/components/RenderItemPR";
import { router } from "expo-router";
import { StylesCategory } from "../../components/StylesApp/StyleApp";

const CategoryProduct = () => {
  const [category, setCategory] = useState([]);
  const [selectID, setSelectID] = useState("67d310d437f14339142107b0");
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await AxiosInstance().get("/categories");
        if (response.status == true) {
          setCategory(response.categories);
        } else {
          console.error("Không tìm thấy danh sách danh mục!");
        }
      } catch (error) {
        console.error("Lỗi khi lấy danh mục:", error.message);
      }
    };
    fetchCategory();
  }, []);

  // Lấy danh sách sản phẩm theo danh mục
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await AxiosInstance().get(
          `/products/categories?categoryId=${selectID}`
        );
        if (response.success) {
          setProduct(response.data);
        } else {
          console.error("Không tìm thấy sản phẩm:", response.message);
        }
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error.message);
      }
    };

    fetchProduct();
  }, [selectID]);

  const handleSelectCategory = (id) => {
    setSelectID(id); // Cập nhật ID của danh mục đã chọn
  };
  const RenderItemCategory = ({ item }) => {
    const isSelected = item._id === selectID;

    return (
      <TouchableOpacity
        style={[
          StylesCategory.btnCategory,
          isSelected && StylesCategory.btnCategorySelected,
        ]}
        onPress={() => handleSelectCategory(item._id)}
      >
        <Text
          style={[
            StylesCategory.btnText,
            isSelected && StylesCategory.btnTextSelected,
          ]}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={StylesCategory.container}>
      <View style={StylesCategory.content}>
        <Header name="left" title="Sản phẩm" icon="shoppingcart" />

        <ScrollView
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          style={StylesCategory.viewContent}
        >
          <View style={{ flex: 1 }}>
            <FlatList
              horizontal
              data={category}
              renderItem={RenderItemCategory}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View style={{ flex: 1 }}>
            <FlashList
              data={product}
              renderItem={({ item }) => (
                <RenderItemPR
                  _id={item._id}
                  imagePR={item.imagePR}
                  namePR={item.namePR}
                  traitPR={item.traitPR}
                  pricePR={item.pricePR}
                  quantity={item.quantity}
                />
              )}
              numColumns={2}
              estimatedItemSize={200}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CategoryProduct;
