import { WideLayout } from "@/components/common/WideLayout";
import { About } from "@/components/settings/About";
import { AppLanguageSelect } from "@/components/settings/AppLanguageSelect";
import { DialectSelect } from "@/components/settings/DialectSelect";
import { ResultsLanguageSelect } from "@/components/settings/ResultsLanguageSelect";
import { ThemeSelect } from "@/components/settings/ThemeSelect";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";

export default function SettingsScreen() {
  const { width } = useWindowDimensions();
  const wide = width > 720;

  if (wide) {
    return (
      <WideLayout
        sidebar={
          <View style={{ gap: 16 }}>
            <AppLanguageSelect />
            <ResultsLanguageSelect />
            <DialectSelect />
            <ThemeSelect />
          </View>
        }
        main={<About />}
      />
    );
  }

  return (
    <ScrollView>
      <StatusBar style="light" />
      <View style={styles.container}>
        <AppLanguageSelect />
        <ResultsLanguageSelect />
        <DialectSelect />
        <ThemeSelect />
        <About />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    padding: 16,
  },
  value: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
