import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 70,
    alignItems: "center",
  },
  titleHome: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 40,
  },
  textTitle: {
    fontSize: 40,
    lineHeight: 48,
  },
  subtitleHome: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FF88",
    borderWidth: 2,
    borderRadius: 4,
    width: "90%",
    padding: 15,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: "center",
    width: "100%",
  },
  buttonAdicionar: {
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width:"60%",
    backgroundColor: '#FFE600',
    borderWidth:1,
    paddingTop:12,
    paddingBottom:12,
    marginTop:70,
    marginLeft:80,
    fontSize:13,
},
});

export default styles;
