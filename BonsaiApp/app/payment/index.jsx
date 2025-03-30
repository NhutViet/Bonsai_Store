import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Colors, fontWeight } from "../../constants/Colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AxiosInstance from "@/helper/AxiosInstance";

const Payment = () => {
  const [fullName, setFullName] = useState("name");
  const [email, setEmail] = useState("email");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [err, setErr] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [selectedWallet, setSelectedWallet] = useState(null);

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
        } else {
          Alert.alert("Lỗi", "Không lấy được thông tin người dùng");
        }
      } catch (error) {
        console.error("Lỗi lấy thông tin người dùng:", error);
      }
    };

    fetchUser();
  }, []);

  const handleAddress = (text) => {
    setAddress(text);
    setErr(false); // Khi nhập, setErr thành true
  };

  const handlePhoneNumber = (text) => {
    setPhoneNumber(text);
    setErr(false); // Khi nhập, setErr thành true
  };

  const handlePayment = () => {
    if (!phoneNumber || !address) {
      setErr(true);
    } else {
      setErr(false);
    }
  };

  const handleChoose = (method) => {
    setSelectedMethod(method);
  };

  const handleWallet = (type) => {
    setSelectedWallet(type);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header name="left" title="Thanh toán" />
      <View style={styles.content}>
        <Text style={styles.txtInforCustomer}>Thông tin khách hàng</Text>
        <View style={styles.line} />
        <TextInput
          style={styles.input}
          value={fullName}
          onChangeText={setFullName}
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
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={handleAddress}
          placeholder="Địa chỉ"
          placeholderTextColor={Colors.gray}
        />
        <View style={styles.line} />
        {err && <Text style={styles.err}>Vui lòng nhập Địa chỉ</Text>}
        <TextInput
          style={styles.input}
          value={phoneNumber}
          onChangeText={handlePhoneNumber}
          placeholder="Số Điện thoại"
          placeholderTextColor={Colors.gray}
        />
        <View style={styles.line} />
        {err && <Text style={styles.err}>Vui lòng nhập Số điện thoại</Text>}
        <Text style={styles.txtPaymentMethod}>Phương thức vận chuyển</Text>
        <TouchableOpacity
          style={styles.btnChoose}
          onPress={() => handleChoose("Fast")}
        >
          <View>
            <Text
              style={[
                styles.txtChoose,
                selectedMethod === "Fast" && styles.txtChose,
              ]}
            >
              Giao hàng Nhanh - 15.000VND
            </Text>
            <Text style={styles.txtChoosesChedule}>
              Dự kiến giao hàng 5-7/9
            </Text>
          </View>
          {selectedMethod === "Fast" && (
            <Image
              style={styles.imageTick}
              source={require("../../assets/images/tick.png")}
            />
          )}
        </TouchableOpacity>
        <View style={styles.line} />

        <TouchableOpacity
          style={styles.btnChoose}
          onPress={() => handleChoose("COD")}
        >
          <View>
            <Text
              style={[
                styles.txtChoose,
                selectedMethod === "COD" && styles.txtChose,
              ]}
            >
              Giao hàng COD - 20.000VNĐ
            </Text>
            <Text style={styles.txtChoosesChedule}>
              Dự kiến giao hàng 4-8/9
            </Text>
          </View>
          {selectedMethod === "COD" && (
            <Image
              style={styles.imageTick}
              source={require("../../assets/images/tick.png")}
            />
          )}
        </TouchableOpacity>
        <View style={styles.line} />

        <Text style={styles.txtPaymentMethod}>Hình thức thanh toán</Text>
        <TouchableOpacity
          style={styles.btnChoose}
          onPress={() => handleWallet("CASH")}
        >
          <Text
            style={[
              styles.txtChoose,
              selectedWallet === "CASH" && styles.txtChose,
            ]}
          >
            Tiền mặt
          </Text>
          {selectedWallet === "CASH" && (
            <Image
              style={styles.imageTick}
              source={require("../../assets/images/tick.png")}
            />
          )}
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity
          style={styles.btnChoose}
          onPress={() => handleWallet("ATM")}
        >
          <Text
            style={[
              styles.txtChoose,
              selectedWallet === "ATM" && styles.txtChose,
            ]}
          >
            Thẻ ATM
          </Text>
          {selectedWallet === "ATM" && (
            <Image
              style={styles.imageTick}
              source={require("../../assets/images/tick.png")}
            />
          )}
        </TouchableOpacity>
        <View style={styles.line} />
      </View>
      <View style={styles.bottom}>
        <View style={styles.viewBottom}>
          <Text style={styles.txtChoosesChedule}>Tạm tính</Text>
          <Text>500.000VND</Text>
        </View>
        <View style={styles.viewBottom}>
          <Text style={styles.txtChoosesChedule}>Phí vận chuyển</Text>
          <Text>500.000VND</Text>
        </View>
        <View style={styles.viewBottom}>
          <Text style={styles.txtChoosesChedule}>Tổng cộng</Text>
          <Text style={styles.total}>500.000VND</Text>
        </View>
        <TouchableOpacity style={styles.btnPayment} onPress={handlePayment}>
          <Text>Thanh Toán</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Payment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.while,
  },
  content: {
    flex: 1,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 40,
  },
  bottom: {
    marginLeft: 40,
    marginRight: 40,
    marginBottom: 10,
  },
  txtInforCustomer: {
    fontSize: 16,
    fontWeight: fontWeight.l500,
    color: Colors.black,
  },
  txtPaymentMethod: {
    fontSize: 16,
    fontWeight: fontWeight.l500,
    color: Colors.black,
    marginTop: 30,
  },
  input: {
    width: "100%",
    height: 20,
    color: Colors.gray,
    marginTop: 15,
    fontSize: 14,
    fontWeight: fontWeight.m400,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.border,
    marginTop: 5,
  },
  err: {
    fontSize: 14,
    fontWeight: fontWeight.l400,
    color: "#FF0000",
    marginTop: 5,
  },
  btnChoose: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txtChoose: {
    fontSize: 14,
    fontWeight: fontWeight.l500,
    color: "#221F1F",
  },
  txtChose: {
    fontSize: 14,
    fontWeight: fontWeight.l500,
    color: Colors.backgroundColor,
  },
  imageTick: {
    width: 16,
    height: 16,
  },
  txtChoosesChedule: {
    fontSize: 14,
    fontWeight: fontWeight.m400,
    color: Colors.gray,
    marginTop: 5,
  },
  viewBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnPayment: {
    width: "100%",
    height: 50,
    backgroundColor: "#ABABAB",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
  },
  total: {
    color: Colors.backgroundColor,
  },
});
