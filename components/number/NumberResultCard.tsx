import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getThemedComponents } from "@/themes";
import type { FwewError, FwewNumber } from "fwew.js";
import { StyleSheet, View } from "react-native";

type NumberResultCardProps = {
  result: FwewNumber | FwewError | null;
};

export function NumberResultCard({ result }: NumberResultCardProps) {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  if (!result) {
    return null;
  }

  if ("message" in result) {
    return (
      <View style={styles.container}>
        <Themed.Text>{ui.common.noResults}</Themed.Text>
      </View>
    );
  }

  return (
    <Themed.CardView style={styles.container}>
      <Themed.Text style={styles.navi}>{result.name}</Themed.Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
          gap: 16,
        }}
      >
        <View style={{ alignItems: "flex-end" }}>
          <Themed.Text style={styles.text}>{ui.numbers.octal}</Themed.Text>
          <Themed.Text style={styles.text}>{ui.numbers.decimal}</Themed.Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Themed.MonoText style={styles.text}>{result.octal}</Themed.MonoText>
          <Themed.MonoText style={styles.text}>{result.decimal}</Themed.MonoText>
        </View>
      </View>
      <Scientific result={result} />
    </Themed.CardView>
  );
}

function Scientific({ result }: { result: FwewNumber }) {
  const octalDigits = result.octal
    .split("")
    .slice(1)
    .map((digit, i, a) => {
      if (i === 0) {
        return <Power key={`nrp_${digit}_${i}`} base={`${digit}×8`} exponent={`${a.length - i - 1}`} />;
      }
      return <Power key={`nrp_${digit}_${i}`} base={` + ${digit}×8`} exponent={`${a.length - i - 1}`} />;
    });
  return <View style={{ flexDirection: "row" }}>{octalDigits}</View>;
}

function Power({ base, exponent }: { base: string; exponent: string }) {
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  return (
    <View style={{ flexDirection: "row" }}>
      <Themed.MonoText style={{ fontSize: 18 }}>{base}</Themed.MonoText>
      <Themed.MonoText style={{ fontSize: 12 }}>{exponent}</Themed.MonoText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  navi: {
    fontSize: 24,
    userSelect: "text",
  },
  text: {
    fontSize: 18,
    padding: 8,
    userSelect: "text",
  },
});
