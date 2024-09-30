import {
  ColorValue,
  RefreshControl,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";

type Props = {
  sidebar: React.ReactNode;
  header?: React.ReactNode;
  main: React.ReactNode;
  refresh?: {
    loading: boolean;
    getData?: () => void;
    colors?: ColorValue[];
  };
};

export function WideLayout({ sidebar, header, main, refresh }: Props) {
  const { width } = useWindowDimensions();

  const ratio =
    [
      { breakpoint: 1280, value: 3 },
      { breakpoint: 950, value: 2 },
      { breakpoint: 720, value: 1 },
    ].filter((b) => width >= b.breakpoint)[0]?.value ?? 1;

  return (
    <View style={styles.containerLandscape}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.bottomPadded}>{sidebar}</View>
      </ScrollView>
      <View style={{ flex: ratio }}>
        {header}
        <ScrollView
          keyboardShouldPersistTaps="always"
          refreshControl={
            refresh && (
              <RefreshControl
                refreshing={refresh.loading}
                onRefresh={refresh.getData}
                colors={refresh.colors}
              />
            )
          }
        >
          <View style={styles.bottomPadded}>{main}</View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerLandscape: {
    flexDirection: "row",
    flex: 1,
    padding: 16,
    paddingBottom: 0,
    gap: 16,
  },
  bottomPadded: {
    paddingBottom: 16,
  },
});
