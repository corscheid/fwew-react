import { getUI } from "@/constants/i18n";
import { reefReplacements } from "@/constants/That";
import { useDialectContext } from "@/context/DialectContext";
import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getThemedComponents, getBackground } from "@/themes";
import { useTheme } from "@react-navigation/native";
import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";

export default function ThatScreen() {
  const { width, height } = useWindowDimensions();
  const landscape = width > height;
  const { themeName } = useThemeNameContext();
  const { dialect } = useDialectContext();

  if (landscape) {
    return getBackground(
      themeName, (
      <ScrollView>
        <View style={[styles.container, styles.rowContainer]}>
          <View style={styles.tableContainer}>
            <ThatTable1 />
          </View>
          <Divider vertical />
          <View style={styles.tableContainer}>
            <ThatTable2 />
          </View>
        </View>
      </ScrollView>), dialect
    );
  }

  return getBackground(
    themeName, (
    <ScrollView>
      <View style={styles.container}>
        <ThatTable1 />
        <Divider />
        <ThatTable2 />
      </View>
    </ScrollView>), dialect
  );
}

type ThatTableProps = {
  data: string[][];
  renderItem: (value: string, row: number, col: number) => JSX.Element;
};

function ThatTable({ data, renderItem }: ThatTableProps) {
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  return (
    <Themed.CardView
      style={{
        gap: 16,
        padding: 16,
      }}
    >
      {data.map((row, r) => (
        <View key={`tt2_r${r}`} style={styles.tableRow}>
          {row.map((col, c) => renderItem(col, r, c))}
        </View>
      ))}
    </Themed.CardView>
  );
}

function ThatTable1() {
  const { resultsLanguage } = useResultsLanguageContext();
  const { dialect } = useDialectContext();
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);
  const ui = getUI(resultsLanguage, dialect);

  return (
    <ThatTable
      data={ui.that.table1Data}
      renderItem={(col, r, c) => (
        <Themed.Text
          key={`tt1_r${r}_c${c}`}
          style={{
            flex: c > 0 ? 1 : 1.5,
            fontWeight: r < 2 ? "bold" : "normal",
          }}
        >
          {dialect === "reef" && reefReplacements.get(col)
            ? reefReplacements.get(col)
            : col}
        </Themed.Text>
      )}
    />
  );
}

function ThatTable2() {
  const { resultsLanguage } = useResultsLanguageContext();
  const { dialect } = useDialectContext();
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);
  const ui = getUI(resultsLanguage, dialect);

  return (
    <ThatTable
      data={ui.that.table2Data}
      renderItem={(col, r, c) => (
        <Themed.Text
          key={`tt2_r${r}_c${c}`}
          style={{
            flex: 1,
            fontStyle: c === 1 ? "italic" : "normal",
          }}
        >
          {dialect === "reef" && reefReplacements.get(col)
            ? reefReplacements.get(col)
            : col}
        </Themed.Text>
      )}
    />
  );
}

function Divider({ vertical }: { vertical?: boolean }) {
  const theme = useTheme();

  return (
    <View
      style={{
        backgroundColor: theme.colors.text,
        height: vertical ? 360 : 1,
        maxHeight: vertical ? "93%" : 1,
        width: vertical ? 1 : 360,
        maxWidth: vertical ? 1 : "93%",
        alignSelf: "center",
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 32,
    padding: 16,
  },
  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  tableContainer: {
    flex: 1,
  },
  tableRow: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
