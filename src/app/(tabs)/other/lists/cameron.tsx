import { reefReplacements } from "@/constants/Cameron";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getThemedComponents } from "@/themes";
import { FlatList, StyleSheet, View } from "react-native";

export default function CameronScreen() {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { cameronWords } = getUI(appLanguage, dialect);

  return (
    <View style={styles.container}>
      <FlatList
        data={cameronWords.data}
        contentContainerStyle={{ gap: 16, padding: 16 }}
        renderItem={({ item }) => <TitleContentCard item={item} />}
        keyExtractor={({ key }, i) => `cw_${key}_${i}`}
      />
    </View>
  );
}

type TCCProps = {
  item: {
    key: string;
    value: string;
  };
};

function TitleContentCard({ item }: TCCProps) {
  const { dialect } = useDialectContext();
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  let newValue = item.value;
  if (dialect === "reef") {
    newValue = "";
    let start = true;
    for (let a of item.value.split(", ", 100)) {
      if (!start) {
        newValue = newValue.concat(", ");
      }
      start = false;
      if (reefReplacements.has(a)) {
        newValue = newValue.concat(reefReplacements.get(a)!); // non-null assertion
      } else {
        newValue = newValue.concat(a);
      }
    }
  }
  return (
    <Themed.CardView style={styles.row}>
      <View style={styles.col}>
        <Themed.Text style={styles.subheader}>{item.key}</Themed.Text>
        <Themed.Text style={styles.words}>{newValue}</Themed.Text>
      </View>
    </Themed.CardView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    padding: 16,
  },
  col: {
    gap: 8,
  },
  subheader: {
    fontSize: 24,
    fontWeight: "bold",
  },
  words: {
    fontSize: 16,
    lineHeight: 32,
  },
});
