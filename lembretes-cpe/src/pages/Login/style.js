import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 120,
  },
  form: {
    alignItems: "center",
  },
  formLabel: {
    fontFamily: "Roboto",
    color: "#ffe600",
    fontSize: 18,
    paddingLeft: 20,
    marginTop: 10,
  },
  textInput: {
    fontFamily: "Roboto",
    width: "90%",
    backgroundColor: "#fff",
    height: 40,
    paddingLeft: 10,
    borderBottomWidth: 1,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonEntrar: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width:"70%",
    backgroundColor: '#FFE600',
    paddingTop:12,
    paddingBottom:12,
    marginLeft:12,
    margin:30,
    fontSize:13,
},
});

export default styles;
