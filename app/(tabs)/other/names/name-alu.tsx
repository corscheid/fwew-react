import { Accordion } from "@/components/common/Accordion";
import { Button } from "@/components/common/Button";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { OptionSelect } from "@/components/common/OptionSelect";
import { ResultCount } from "@/components/common/ResultCount";
import { Text, View } from "@/components/common/Themed";
import { NameResults } from "@/components/names/NameResults";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useNameAlu } from "@/hooks/useNameAlu";
import { useTheme } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";
import { RefreshControl, ScrollView, StyleSheet } from "react-native";
import { getTheme } from "@/hooks/useAuxtheme";
import { GradientCardView } from "@/components/common/Themed";

export default function NameAluScreen() {
  const auxtheme = getTheme();
  const theme = useTheme();
  const {
    names,
    numNames,
    updateNumNames,
    numSyllables,
    updateNumSyllables,
    nounMode,
    setNounMode,
    adjMode,
    setAdjMode,
    loading,
    execute,
  } = useNameAlu();
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { names: uiNames, nameAlu: uiNameAlu } = getUI(appLanguage, dialect);
  const resultsVisible = numNames.length > 0 && names.length > 0;

  const copyAll = async () => {
    await Clipboard.setStringAsync(names.join("\n"));
  };

  const copy = async (text: string) => {
    await Clipboard.setStringAsync(text);
  };

  return auxtheme.Background(
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="always"
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={execute}
          colors={[theme.colors.primary]}
        />
      }
    >
      <GradientCardView style={styles.optionContainer}>
        <Accordion
          closedContent={<Text>{uiNames.options}</Text>}
          openedContent={
            <>
              <Text style={styles.label}>{uiNames.numNames}</Text>
              <NumericTextInput
                value={numNames}
                onChangeText={updateNumNames}
                placeholder="1-50"
                autoFocus
              />
              <Text style={styles.label}>{uiNameAlu.numSyllables}</Text>
              <OptionSelect
                items={uiNames.syllablesOptions}
                active={(value) => numSyllables === value}
                onSelect={updateNumSyllables}
              />
              <Text style={styles.label}>{uiNameAlu.nounMode}</Text>
              <OptionSelect
                items={uiNameAlu.nounModes}
                active={(value) => nounMode === value}
                onSelect={setNounMode}
              />
              <Text style={styles.label}>{uiNameAlu.adjMode}</Text>
              <OptionSelect
                items={uiNameAlu.adjModes}
                active={(value) => adjMode === value}
                onSelect={setAdjMode}
              />
            </>
          }
        />
      </GradientCardView>
      <View style={styles.buttonContainer}>
      {auxtheme.ButtonBackground(<Button
          icon="clipboard"
          text={uiNames.copyAll}
          onPress={copyAll}
          disabled={!resultsVisible}
        />)}
        {auxtheme.ButtonBackground(<Button icon="refresh" text="" onPress={execute} disabled={loading} />)}
      </View>
      <ResultCount
        visible={resultsVisible}
        resultCount={names.length}
        style={styles.resultCount}
      />
      <NameResults names={names} copyName={copy} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  optionContainer: {
    paddingTop: 4,
  },
  label: {
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    paddingTop: 16,
    height: 75,
  },
  resultCount: {
    padding: 16,
  },
});
