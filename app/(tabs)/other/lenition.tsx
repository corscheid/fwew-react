import { ResultCount } from "@/components/common/ResultCount";
import { WideLayout } from "@/components/common/WideLayout";
import { ListResults } from "@/components/list/ListResults";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { useList } from "@/hooks/useList";
import { getThemedComponents, getBackground } from "@/themes";
import React, { useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";

export default function LenitionScreen() {
  const { width } = useWindowDimensions();
  const wide = width > 720;
  const { dialect } = useDialectContext();
  const { themeName } = useThemeNameContext();

  var content = (
    <ScrollView>
      <View style={{ padding: 16 }}>
        <LenitionTable />
        <LenPreList />
        <LenAdpList />
      </View>
    </ScrollView>
  );

  if (wide) {
    return (
      <WideLayout
        containerStyle={{ padding: 0 }}
        sidebar={
          <>
            <LenitionTable />
            <LenPreList />
          </>
        }
        main={<LenAdpList />}
      />
    );
  }

  return getBackground(themeName, content, dialect, true);
}

function LenitionTable() {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect).lenition;
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  const lenitionData = [
    { key: "Kx", value: "⇾ K" },
    { key: "Px", value: "⇾ P" },
    { key: "Tx", value: "⇾ T" },
    { key: "K ", value: "⇾ H" },
    { key: "P ", value: "⇾ F" },
    { key: "T ", value: "⇾ S" },
    { key: "Ts", value: "⇾ S" },
    { key: "' ", value: `${ui.glottalStop}` },
  ];

  return (
    <Themed.CardView style={{ padding: 16 }}>
      {lenitionData.map(({ key, value }, i) => (
        <View key={`lt_r_${i}`} style={styles.lenitionRow}>
          <Themed.MonoText style={styles.lenitionKey}>{key}</Themed.MonoText>
          <Themed.MonoText style={styles.lenitionValue}>
            {value}
          </Themed.MonoText>
        </View>
      ))}
    </Themed.CardView>
  );
}

function LenPreList() {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect).lenition;
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  const lenPrefixes = [
    "me+",
    "pxe+",
    "ay+",
    "fìme+",
    "fìpxe+",
    "fay+",
    "\ntsame+",
    "tsapxe+",
    "tsay+",
    "fray+",
    "\npe+",
    "pem(e)+",
    "pep(e)+",
    "pay+",
  ];

  return (
    <View>
      <Themed.BoldText style={styles.header}>
        {ui.lenitingPrefixes}
      </Themed.BoldText>
      <Themed.CardView style={{ padding: 16 }}>
        <Themed.Text style={styles.prefixText}>
          {lenPrefixes.join(", ")}
        </Themed.Text>
      </Themed.CardView>
    </View>
  );
}

function LenAdpList() {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect).lenition;
  const { loading, execute, results } = useList();
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  useEffect(() => {
    void execute("pos has adp. and word ends +");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Themed.BoldText style={styles.header}>
        {ui.lenitingAdpositions}
      </Themed.BoldText>
      <ResultCount
        resultCount={results.length}
        visible={!loading && results.length > 0}
        style={{ paddingBottom: 12 }}
      />
      <ListResults results={results} loading={loading} />
    </View>
  );
}

const styles = StyleSheet.create({
  lenitionRow: {
    flexDirection: "row",
  },
  lenitionKey: {
    fontSize: 18,
    paddingVertical: 8,
  },
  lenitionValue: {
    fontSize: 18,
    padding: 8,
  },
  header: {
    fontSize: 20,
    paddingVertical: 8,
    alignSelf: "center",
  },
  prefixText: {
    fontSize: 18,
    lineHeight: 32,
  },
});
