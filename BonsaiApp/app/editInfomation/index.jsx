import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AxiosInstance from "@/helper/AxiosInstance";
import { Colors, fontWeight } from "../../constants/Colors";
import Feather from "@expo/vector-icons/Feather";

const EditInfomation = () => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avata, setAvata] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  // lay thong tin
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        if (!userId) return;

        const response = await AxiosInstance().get(`/users/user/${userId}`);
        console.log(response);
        if (response.status === true || response.status === "true") {
          setFullName(response.data.fullName);
          setEmail(response.data.email);
          setPhoneNumber(response.data.phoneNumber);
          setAvata(response.data.avata);
          setPassword(response.data.password);
          setAddress(response.data.address);
        } else {
          Alert.alert("Lỗi", "Không lấy được thông tin người dùng");
        }
      } catch (error) {
        console.error("Lỗi lấy thông tin người dùng:", error);
      }
    };

    fetchUser();
  }, []);

  const handleEditInformation = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      if (!userId) return;
      const body = {
        fullName: fullName,
        email: email,
        phoneNumber: phoneNumber,
        password: password,
        avata: avata,
        address: address,
      };
      const response = await AxiosInstance().put(
        `/users/update/${userId}`,
        body
      );

      if (response.status === true) {
        Alert.alert("Thông bao", "Sửa thông tin thành công");
        setIsEditable(false);
      } else {
        Alert.alert("Thông bao", "Sửa thông tin thất bại");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Hàm kiểm tra nếu có thay đổi
  const checkChanges = (newFullName, newEmail, newPassword, newPhoneNumber) => {
    if (
      newFullName !== fullName ||
      newEmail !== email ||
      newPassword !== password ||
      newPhoneNumber !== phoneNumber
    ) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  };

  return (
    <SafeAreaView style={styles.contianer}>
      <Header name="left" title="Chỉnh sửa thông tin" />
      <View style={styles.header}>
        <Image style={styles.avata} source={{ uri: avata }} />
        <Text style={styles.txtContent}>
          Thông tin sẽ được lưu cho lần mua kế tiếp.{"\n"} Bấm vào thông tin chi
          tiết để chỉnh sửa.
        </Text>
      </View>
      <View style={styles.viewInput}>
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={(text) => {
            setFullName(text);
            checkChanges(text, email, password, phoneNumber);
          }}
          editable={isEditable}
        />
        <View style={styles.line} />
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          editable={isEditable}
        />
        <View style={styles.line} />
        <View style={styles.inputPassWord}>
          <TextInput
            value={password}
            style={styles.input}
            placeholder="Password"
            secureTextEntry={!isPasswordVisible}
            onChangeText={setPassword}
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
        <View style={styles.line} />
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          editable={isEditable}
        />
        <View style={styles.line} />

        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
          editable={isEditable}
        />
        <View style={styles.line} />
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => {
            setIsEditable(true);
          }}
          style={isEditable ? styles.btnAccept : styles.btnEdit}
        >
          <Text style={styles.txtEdit}>Sửa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.btnEdit,
            {
              backgroundColor: isButtonEnabled
                ? Colors.backgroundColor
                : Colors.gray,
            },
          ]}
          onPress={handleEditInformation}
        >
          <Text style={styles.txtEdit}>Đồng ý</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditInfomation;

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    backgroundColor: Colors.while,
  },
  header: {
    alignItems: "center",
  },
  avata: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  txtContent: {
    fontSize: 14,
    fontWeight: fontWeight.m400,
    color: Colors.black,
    marginTop: 40,
  },
  viewInput: {
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    flex: 1,
  },
  input: {
    width: "100%",
    height: 20,
    color: Colors.gray,
    marginTop: 20,
    fontSize: 14,
    fontWeight: fontWeight.m400,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.border,
    marginTop: 5,
  },
  inputPassWord: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 30,
  },
  bottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 15,
  },
  btnEdit: {
    width: "48%",
    height: 50,
    backgroundColor: "#7D7B7B",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  txtEdit: {
    color: Colors.while,
    fontSize: 16,
    fontWeight: fontWeight.l500,
  },
  btnAccept: {
    width: "48%",
    height: 50,
    backgroundColor: Colors.backgroundColor,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
