import { ItalicText } from "@/components/common/StyledText";
import { CardView, Text, View } from "@/components/common/Themed";
import i18n from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { Link } from "expo-router";
import { useStats } from "@/hooks/useStats";
import { StyleSheet } from "react-native";
import React from "react"

function makeTableHTML(myArray: String[][], double: boolean) {
  var result = "";
  for(var i=0; i<myArray.length; i++) {
      result += "<tr>";
      for(var j=0; j<myArray[i].length; j++){
          if (double) {
            var splitted = myArray[i][j].split(" ")
            for(var k=0; k<2; k++) {
              if (k < splitted.length) {
                result += "<td>"+splitted[k]+"</td>";
              } else {
                result += "<td></td>";
              }
            }
          } else {
            result += "<td>"+myArray[i][j]+"</td>";
          }
      }
      result += "</tr>";
  }

  return result;
}

export default function StatsScreen() {
  const {
    wordCount,
    phonemeGrid,
    clusterMap,
    loading,
  } = useStats();
  const { appLanguage } = useAppLanguageContext();
  const { names } = i18n[appLanguage];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{wordCount}</Text>
      <table><tbody>{makeTableHTML(phonemeGrid, true)}</tbody></table>
      <table><tbody>{makeTableHTML(clusterMap, false)}</tbody></table>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 32,
  },
  card: {
    padding: 32,
    width: 256,
    height: 128,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  text: {
    fontSize: 24,
  },
});
