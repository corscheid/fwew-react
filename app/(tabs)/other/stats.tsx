import { useThemeNameContext } from "@/context/ThemeNameContext";
import { useStats } from "@/hooks/useStats";
import { getThemedComponents, getBackground } from "@/themes";
import { useTheme } from "@react-navigation/native";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";
import { useDialectContext } from "@/context/DialectContext";

export default function StatsScreen() {
  const { wordCount, phonemeGrid, clusterName, clusterMap, loading } =
    useStats();
  const { colors } = useTheme();
  const { width, height } = useWindowDimensions();
  const landscape = width > height;
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);
  const { dialect } = useDialectContext();

  if (loading) {
    return getBackground(
      themeName, (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={colors.text} size="large" />
      </View>), dialect
    );
  }

  return getBackground(
    themeName, (
    <ScrollView>
      <View
        style={[
          styles.container,
          {
            flexDirection: landscape ? "row" : "column",
            flexWrap: landscape ? "wrap" : undefined,
            paddingTop: landscape ? 16 : 0,
          },
        ]}
      >
        <View style={{ alignItems: "center" }}>
          <Themed.Text style={styles.header}>{wordCount}</Themed.Text>
          <PhonemeTable data={phonemeGrid} />
        </View>

        <View style={{ alignItems: "center" }}>
          {clusterMap.length > 0 && (
            <Themed.Text style={styles.header}>{clusterName}</Themed.Text>
          )}
          <ClusterTable data={clusterMap} />
        </View>
      </View>
    </ScrollView>), dialect
  );
}

function PhonemeTable({ data }: { data: string[][] }) {
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);
  return (
    <Themed.CardView style={styles.phonemeTable}>
      {data.map((row, index) => {
        if (index === 0) {
          return <PhonemeTableHeaderRow key={`pthr_r${index}`} row={row} />;
        }
        return <PhonemeTableRow key={`ptr_r${index}`} row={row} />;
      })}
    </Themed.CardView>
  );
}

function PhonemeTableHeaderRow({ row }: { row: string[] }) {
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);
  return (
    <View style={styles.row}>
      {row.map((col, i) => {
        return (
          <Themed.Text key={`pthr_c${i}`} style={styles.phonemeHeader}>
            {col}
          </Themed.Text>
        );
      })}
    </View>
  );
}

function PhonemeTableRow({ row }: { row: string[] }) {
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);
  return (
    <View style={styles.row}>
      {row.map((col, i) => {
        const [phoneme, frequency] = col.split(" ");
        return (
          <View key={`ptr_c${i}`} style={styles.phonemeCol}>
            <Themed.Text style={styles.phoneme}>{phoneme}</Themed.Text>
            <Themed.Text>{frequency}</Themed.Text>
          </View>
        );
      })}
    </View>
  );
}

function ClusterTable({ data }: { data: string[][] }) {
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);
  return (
    <Themed.CardView style={styles.clusterTable}>
      {data.map((row, index) => {
        if (index === 0) {
          return <ClusterTableHeaderRow key={`cthr_r${index}`} row={row} />;
        }
        return <ClusterTableRow key={`ctr_r${index}`} row={row} />;
      })}
    </Themed.CardView>
  );
}

function ClusterTableHeaderRow({ row }: { row: string[] }) {
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);
  return (
    <View style={styles.row}>
      {row.map((col, i) => {
        return (
          <View key={`cthr_c${i}`} style={styles.clusterCol}>
            <Themed.Text style={styles.clusterHeading}>{col}</Themed.Text>
          </View>
        );
      })}
    </View>
  );
}

function ClusterTableRow({ row }: { row: string[] }) {
  return (
    <View style={styles.row}>
      {row.map((col, i) => {
        if (i === 0) {
          return <ClusterTableHeaderCol key={`ctr_c${i}`} col={col} />;
        }
        return <ClusterTableCol key={`ctr_c${i}`} col={col} />;
      })}
    </View>
  );
}

function ClusterTableHeaderCol({ col }: { col: string }) {
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);
  return (
    <View style={styles.clusterCol}>
      <Themed.Text style={styles.clusterHeading}>{col}</Themed.Text>
    </View>
  );
}

function ClusterTableCol({ col }: { col: string }) {
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);
  return (
    <View style={styles.clusterCol}>
      <Themed.Text style={styles.clusterCell}>{col}</Themed.Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "stretch",
    width: "80%",
    gap: 32,
    paddingBottom: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    padding: 16,
  },
  subheader: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  words: {
    fontSize: 16,
  },
  phonemeTable: {
    minWidth: 320,
    alignSelf: "center",
    gap: 16,
    padding: 32,
  },
  clusterTable: {
    minWidth: 256,
    alignSelf: "center",
    padding: 32,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  phonemeHeader: {
    fontSize: 16,
    fontWeight: "bold",
  },
  phonemeCol: {
    width: 48,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  phoneme: {
    fontWeight: "bold",
  },
  clusterCol: {
    width: 48,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  clusterHeading: {
    padding: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  clusterCell: {
    padding: 8,
  },
});
