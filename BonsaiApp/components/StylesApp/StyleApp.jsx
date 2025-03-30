import { StyleSheet } from "react-native";
import { Colors, fontWeight } from "../../constants/Colors";

export const StylesLogin = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.backgroundColor,
  },
  imgLogin: {
    width: "100%",
    height: 400,
  },
  titleWelcome: {
    fontWeight: "700",
    fontSize: 30,
    color: Colors.black,
  },
  titleLogin: {
    fontWeight: fontWeight.m400,
    fontSize: 18,
    color: Colors.black,
    marginTop: 10,
  },
  viewLogin: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
  },
  txtInput: {
    width: 300,
    height: 46,
    borderWidth: 1,
    borderColor: "#8b8b8b",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  inputText: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#8B8B8B",
    borderRadius: 8,
    marginTop: 20,
    paddingHorizontal: 10,
    height: 50,
    width: "100%",
  },
  textInput: {
    flex: 1,
    color: Colors.black,
    height: 48,
    fontSize: 14,
    paddingHorizontal: 10,
  },

  viewForgotPass: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  viewRememberAccount: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberAccount: {
    fontWeight: "700",
    fontSize: 11,
    color: "#949090",
    marginLeft: 5,
  },
  btnLogin: {
    width: 350,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.backgroundColor,
    borderRadius: 15,
  },
  txtLogin: {
    fontWeight: "700",
    fontSize: 20,
    color: Colors.while,
  },
  viewOr: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    width: 130,
    height: 1,
    backgroundColor: "#8c8c8c",
  },
  txtOr: {
    fontWeight: "500",
    fontSize: 12,
    color: Colors.black,
    marginLeft: 10,
    marginRight: 10,
  },
  viewLoginSocial: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  imgSocial: {
    width: 32,
    height: 32,
    marginRight: 20,
    marginLeft: 20,
  },
  txtNoAccount: {
    fontWeight: "400",
    fontSize: 12,
    color: Colors.black,
    marginTop: 20,
  },
  txtRegister: {
    color: "#009245",
  },
});

export const StylesHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.while,
  },
  header: {
    backgroundColor: "#F6F6F6",
    width: "100%",
    paddingTop: 60,
    position: "relative",
  },
  titleHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 30,
    marginRight: 30,
  },
  txtTitleHeader: {
    fontWeight: "300",
    fontSize: 24,
    color: "#221F1F",
  },
  imgTitleHeader: {
    width: 48,
    height: 48,
  },
  headerImg: {
    width: "100%",
    height: 225,
  },
  btnImgHeader: {
    position: "absolute",
    bottom: "50%",
    left: "10%",
    flexDirection: "row",
    alignItems: "center",
  },
  txtBtnHeader: {
    fontWeight: fontWeight.s300,
    fontSize: 16,
    color: Colors.backgroundColor,
    marginRight: 10,
  },
  txtContentHeader: {
    fontWeight: fontWeight.l500,
    fontSize: 24,
    color: "#221F1F",
    marginBottom: 10,
    marginTop: 10,
  },
  content: {
    flex: 1,
    marginTop: 20,
    marginLeft: 30,
    marginRight: 30,
  },
  btnSeeMore: {
    marginTop: 16,
  },
  txtSeeMore: {
    textAlign: "right",
    fontWeight: fontWeight.l500,
    fontSize: 16,
    color: "#221F1F",
    textDecorationLine: "underline",
  },
});

export const StylesProfile = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.while,
  },
  content: {
    marginLeft: 50,
    marginRight: 50,
  },
  txtProfile: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: fontWeight.l500,
    color: Colors.black,
  },
  viewInformation: {
    flexDirection: "row",
    marginTop: 30,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginRight: 20,
  },
  fullName: {
    fontSize: 18,
    fontWeight: fontWeight.l500,
    color: Colors.black,
  },
  email: {
    fontSize: 16,
    fontWeight: fontWeight.m400,
    color: Colors.border,
    marginTop: 5,
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: Colors.border,
  },
  txtHeader: {
    fontSize: 16,
    fontWeight: fontWeight.m400,
    color: Colors.border,
    marginTop: 30,
  },
  btnText: {
    marginTop: 15,
  },
  txtContent: {
    fontSize: 16,
    fontWeight: fontWeight.l500,
    color: Colors.black,
  },
  txtLogOut: {
    fontSize: 16,
    fontWeight: fontWeight.l500,
    color: "red",
  },
});

export const StylesSearch = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    marginLeft: 30,
    marginRight: 30,
    flex: 1,
  },
  viewInput: {
    width: "100%",
    height: 35,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export const StylesCategory = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    marginLeft: 30,
    marginRight: 30,
  },
  viewContent: {
    marginTop: 20,
  },
  btnCategory: {
    marginRight: 10,
    padding: 15,
    color: "red",
    borderRadius: 5,
  },
  btnTextSelected: {
    color: "#fff", // Đổi màu chữ khi được chọn
  },
  btnCategorySelected: {
    backgroundColor: "#4CAF50", // Màu khi được chọn
  },
});

export const StylesDetail = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    marginLeft: 30,
    marginRight: 30,
  },
  product: {
    position: "relative",
    marginTop: 20,
  },
  imgPR: {
    width: "100%",
    height: 270,
  },
  iconLetf: {
    position: "absolute",
    flexDirection: "row",
    top: "50%",
    left: 0,
  },
  iconRight: {
    position: "absolute",
    top: "50%",
    right: 0,
  },
  infoPR: {
    flexDirection: "row",
  },
  btnPlant: {
    width: 100,
    height: 30,
    backgroundColor: "#007537",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginLeft: 10,
    marginTop: 20,
  },
  txtPlant: {
    fontWeight: "400",
    fontSize: 14,
    color: "#fff",
  },
  txtPrice: {
    fontWeight: "500",
    fontSize: 25,
    color: "#007537",
    marginTop: 20,
    marginLeft: 10,
  },
  viewDetailPR: {
    marginLeft: 10,
    marginTop: 20,
  },
  txtHeaderViewDetailPR: {
    fontWeight: "400",
    fontSize: 18,
    color: "#3a3a3a",
  },
  line: {
    width: "100%",
    height: 1,
    backgroundColor: "#8c8c8c",
    marginTop: 5,
  },
  viewtxtViewDetailPR: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  txtViewDetailPR: {
    fontWeight: "300",
    fontSize: 15,
    color: "#3a3a3a",
  },
  viewResutl: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewQuantityPR: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  txtQuantity: {
    marginLeft: 40,
    marginRight: 40,
    fontSize: 16,
    fontWeight: "400",
  },
  txtResutl: {
    fontWeight: "500",
    fontSize: 24,
    color: "#000",
    marginTop: 10,
  },
  btnBuy: {
    width: "100%",
    height: 50,
    backgroundColor: "#007537",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    borderRadius: 8,
  },
  txtBuy: {
    fontWeight: "500",
    fontSize: 16,
    color: "#fff",
  },
});
