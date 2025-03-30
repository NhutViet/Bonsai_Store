import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Octicons from "@expo/vector-icons/Octicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Feather from "@expo/vector-icons/Feather";
import AxiosInstance from "@/helper/AxiosInstance";
import { Link, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StylesLogin } from "../components/StylesApp/StyleApp";
import { useDispatch, useSelector } from "react-redux";
import loginUser from "../components/redux-help/slices/AuthSlice";

const Index = () => {
  const { user, token, isLoading, isSuccess, isError, errorMessage } =
    useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");

  const handleLogin = async () => {
    // try {
    //   const body = { email: emailUser, password: passwordUser };
    //   const response = await AxiosInstance().post("/users/login", body);
    //   if (response.status === true || response.status === "true") {
    //     const token = response.token;
    //     // Giải mã token để lấy userId
    //     const payload = JSON.parse(atob(token.split(".")[1])); // Giải mã JWT payload
    //     const user = payload.id;
    //     await AsyncStorage.setItem("token", token); // Lưu token
    //     await AsyncStorage.setItem("userId", user); // Lưu ID người dùng
    //     Alert.alert("Thông báo", "Đăng nhập thành công");
    //     router.push("/(tabs)/Home");
    //   } else {
    //     Alert.alert("Thông báo", response.message || "Đăng nhập thất bại");
    //   }
    // } catch (error) {
    //   console.error("Lỗi đăng nhập:", error.response?.data || error.message);
    //   Alert.alert("Thông báo", "Đăng nhập không thành công. Vui lòng thử lại!");
    // }

    dispatch.loginUser({ emailUser, passwordUser });
  };

  return (
    <View style={StylesLogin.container}>
      <Image
        style={StylesLogin.imgLogin}
        source={require("@/assets/images/imgLogin.png")}
      />
      <Text style={StylesLogin.titleWelcome}>Chào mừng bạn</Text>
      <Text style={StylesLogin.titleLogin}>Đăng nhập tài khoản</Text>
      <View style={StylesLogin.viewLogin}>
        <View style={StylesLogin.inputText}>
          <TextInput
            style={StylesLogin.textInput}
            placeholder="Nhập eamil hoặc số điện thoại"
            onChangeText={setEmailUser}
          />
        </View>
        <View style={StylesLogin.inputText}>
          <TextInput
            style={StylesLogin.textInput}
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
            onChangeText={setPasswordUser}
          />
          <TouchableOpacity
            onPress={() => {
              setIsPasswordVisible(!isPasswordVisible);
            }}
          >
            <Feather
              name={isPasswordVisible ? "eye" : "eye-off"}
              size={24}
              color="#828282"
            />
          </TouchableOpacity>
        </View>

        <View style={StylesLogin.viewForgotPass}>
          <View style={StylesLogin.viewRememberAccount}>
            <Octicons name="verified" size={24} color="#949090" />
            <Text style={StylesLogin.rememberAccount}>Nhớ tài khoản</Text>
          </View>
          <Text>Forgot Password ?</Text>
        </View>
      </View>
      <TouchableOpacity style={StylesLogin.btnLogin} onPress={handleLogin}>
        <Text style={StylesLogin.txtLogin}>Đăng nhập</Text>
      </TouchableOpacity>

      <View style={StylesLogin.viewOr}>
        <View style={StylesLogin.line} />
        <Text style={StylesLogin.txtOr}>Hoặc</Text>
        <View style={StylesLogin.line} />
      </View>

      <View style={StylesLogin.viewLoginSocial}>
        <Image
          style={StylesLogin.imgSocial}
          source={require("@/assets/images/logos_gg.png")}
        />
        <Image
          style={StylesLogin.imgSocial}
          source={require("@/assets/images/logos_facebook.png")}
        />
      </View>

      <Text style={StylesLogin.txtNoAccount}>
        Bạn không có tài khoản{" "}
        <Link href={"/Register"}>
          <Text style={StylesLogin.txtRegister}>Tạo tài khoán</Text>
        </Link>
      </Text>
    </View>
  );
};

export default Index;
