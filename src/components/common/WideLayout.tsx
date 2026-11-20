import { ColorValue, RefreshControl, ScrollView, StyleSheet, useWindowDimensions, View, ViewStyle } from "react-native";

type Props = {
  sidebar: React.ReactNode;
  header?: React.ReactNode;
  main: React.ReactNode;
  flexRatio?: number;
  refresh?: {
    loading: boolean;
    getData?: () => void;
    colors?: ColorValue[];
  };
  containerStyle?: ViewStyle;
  sidebarStyle?: ViewStyle;
  mainStyle?: ViewStyle;
};

export function WideLayout({
  sidebar,
  header,
  main,
  flexRatio,
  refresh,
  containerStyle,
  sidebarStyle,
  mainStyle,
}: Props) {
  const { width } = useWindowDimensions();

  let ratio = 1;

  if (flexRatio !== undefined) {
    ratio = flexRatio;
  } else {
    ratio =
      [
        { breakpoint: 1280, value: 3 },
        { breakpoint: 950, value: 2 },
        { breakpoint: 720, value: 1 },
      ].filter((b) => width >= b.breakpoint)[0]?.value ?? 1;
  }

  return (
    <View style={[styles.containerLandscape, containerStyle]}>
      <ScrollView style={{ flex: 1 }}>
        <View style={[styles.bottomPadded, sidebarStyle]}>{sidebar}</View>
      </ScrollView>
      <View style={{ flex: ratio }}>
        {header}
        <ScrollView
          keyboardShouldPersistTaps="always"
          refreshControl={
            refresh && (
              <RefreshControl refreshing={refresh.loading} onRefresh={refresh.getData} colors={refresh.colors} />
            )
          }
        >
          <View style={[styles.bottomPadded, mainStyle]}>{main}</View>
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
