import { GradientCardView, Text, View } from "@/components/common/Themed";
import { useStats } from "@/hooks/useStats";
import { useTheme } from "@react-navigation/native";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
} from "react-native";

export default function StatsScreen() {
  const { wordCount, phonemeGrid, clusterName, clusterMap, loading } =
    useStats();
  const { colors } = useTheme();
  const { width, height } = useWindowDimensions();
  const landscape = width > height;

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={colors.text} size="large" />
      </View>
    );
  }

  return (
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
          <Text style={styles.header}>{wordCount}</Text>
          <PhonemeTable data={phonemeGrid} />
        </View>

        <View style={{ alignItems: "center" }}>
          {clusterMap.length > 0 && (
            <Text style={styles.header}>{clusterName}</Text>
          )}
          <ClusterTable data={clusterMap} />
        </View>
      </View>
    </ScrollView>
  );
}

function PhonemeTable({ data }: { data: string[][] }) {
  return (
    <GradientCardView style={styles.phonemeTable}>
      {data.map((row, index) => {
        if (index === 0) {
          return <PhonemeTableHeaderRow key={`pthr_r${index}`} row={row} />;
        }
        return <PhonemeTableRow key={`ptr_r${index}`} row={row} />;
      })}
    </GradientCardView>
  );
}

function PhonemeTableHeaderRow({ row }: { row: string[] }) {
  return (
    <GradientCardView style={styles.row}>
      {row.map((col, i) => {
        return (
          <Text key={`pthr_c${i}`} style={styles.phonemeHeader}>
            {col}
          </Text>
        );
      })}
    </GradientCardView>
  );
}

function PhonemeTableRow({ row }: { row: string[] }) {
  return (
    <GradientCardView style={styles.row}>
      {row.map((col, i) => {
        const [phoneme, frequency] = col.split(" ");
        return (
          <GradientCardView key={`ptr_c${i}`} style={styles.phonemeCol}>
            <Text style={styles.phoneme}>{phoneme}</Text>
            <Text>{frequency}</Text>
          </GradientCardView>
        );
      })}
    </GradientCardView>
  );
}

function ClusterTable({ data }: { data: string[][] }) {
  return (
    <GradientCardView style={styles.clusterTable}>
      {data.map((row, index) => {
        if (index === 0) {
          return <ClusterTableHeaderRow key={`cthr_r${index}`} row={row} />;
        }
        return <ClusterTableRow key={`ctr_r${index}`} row={row} />;
      })}
    </GradientCardView>
  );
}

function ClusterTableHeaderRow({ row }: { row: string[] }) {
  return (
    <GradientCardView style={styles.row}>
      {row.map((col, i) => {
        return (
          <GradientCardView key={`cthr_c${i}`} style={styles.clusterCol}>
            <Text style={styles.clusterHeading}>{col}</Text>
          </GradientCardView>
        );
      })}
    </GradientCardView>
  );
}

function ClusterTableRow({ row }: { row: string[] }) {
  return (
    <GradientCardView style={styles.row}>
      {row.map((col, i) => {
        if (i === 0) {
          return <ClusterTableHeaderCol key={`ctr_c${i}`} col={col} />;
        }
        return <ClusterTableCol key={`ctr_c${i}`} col={col} />;
      })}
    </GradientCardView>
  );
}

function ClusterTableHeaderCol({ col }: { col: string }) {
  return (
    <GradientCardView style={styles.clusterCol}>
      <Text style={styles.clusterHeading}>{col}</Text>
    </GradientCardView>
  );
}

function ClusterTableCol({ col }: { col: string }) {
  return (
    <GradientCardView style={styles.clusterCol}>
      <Text style={styles.clusterCell}>{col}</Text>
    </GradientCardView>
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
