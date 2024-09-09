import { MonoText } from "@/components/common/StyledText";
import { PlainCardView, GradientCardView, Text, View } from "@/components/common/Themed";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import type { FwewError, FwewNumber } from "fwew.js";
import { StyleSheet } from "react-native";

type NumberResultCardProps = {
  result: FwewNumber | FwewError | null;
};

export function NumberResultCard({ result }: NumberResultCardProps) {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);

  if (!result) {
    return null;
  }

  if ("message" in result) {
    return (
      <View style={styles.container}>
        <Text>{ui.common.noResults}</Text>
      </View>
    );
  }

  return (
    <GradientCardView style={styles.container}>
      <Text style={styles.navi}>{result.name}</Text>
      <PlainCardView
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          padding: 16,
          gap: 16,
        }}
      >
        <PlainCardView style={{ alignItems: "flex-end" }}>
          <Text style={styles.text}>{ui.numbers.octal}</Text>
          <Text style={styles.text}>{ui.numbers.decimal}</Text>
        </PlainCardView>
        <PlainCardView style={{ alignItems: "flex-end" }}>
          <MonoText style={styles.text}>{result.octal}</MonoText>
          <MonoText style={styles.text}>{result.decimal}</MonoText>
        </PlainCardView>
      </PlainCardView>
      <Scientific result={result} />
    </GradientCardView>
  );
}

function Scientific({ result }: { result: FwewNumber }) {
  const octalDigits = result.octal
    .split("")
    .slice(1)
    .map((digit, i, a) => {
      if (i === 0) {
        return (
          <Power
            key={`nrp_${digit}_${i}`}
            base={`${digit}×8`}
            exponent={`${a.length - i - 1}`}
          />
        );
      }
      return (
        <Power
          key={`nrp_${digit}_${i}`}
          base={` + ${digit}×8`}
          exponent={`${a.length - i - 1}`}
        />
      );
    });
  return <PlainCardView style={{ flexDirection: "row" }}>{octalDigits}</PlainCardView>;
}

function Power({ base, exponent }: { base: string; exponent: string }) {
  return (
    <PlainCardView style={{ flexDirection: "row" }}>
      <MonoText style={{ fontSize: 18 }}>{base}</MonoText>
      <MonoText style={{ fontSize: 12 }}>{exponent}</MonoText>
    </PlainCardView>
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
