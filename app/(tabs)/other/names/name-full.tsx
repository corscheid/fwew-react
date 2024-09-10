import { Accordion } from "@/components/common/Accordion";
import { Button } from "@/components/common/Button";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { OptionSelect } from "@/components/common/OptionSelect";
import { ResultCount } from "@/components/common/ResultCount";
import { Text, View } from "@/components/common/Themed";
import { NameResults } from "@/components/names/NameResults";
import Colors from "@/constants/Colors";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useNameFull } from "@/hooks/useNameFull";
import { useTheme } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  useColorScheme,
} from "react-native";
import { getTheme } from "@/hooks/useAuxtheme";

export default function NameFullScreen() {
  const auxtheme = getTheme();
  const theme = useTheme();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const {
    names,
    numNames,
    updateNumNames,
    syllables1,
    updateSyllables1,
    syllables2,
    updateSyllables2,
    syllables3,
    updateSyllables3,
    ending,
    setEnding,
    loading,
    execute,
  } = useNameFull();
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { names: uiNames, nameFull: uiNameFull } = getUI(appLanguage, dialect);
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
      <Accordion
        closedContent={<Text>{uiNames.options}</Text>}
        openedContent={
          <View style={styles.optionContainer}>
            <Text style={styles.label}>{uiNames.numNames}</Text>
            <NumericTextInput
              value={numNames}
              onChangeText={updateNumNames}
              placeholder="1-50"
              autoFocus
            />
            <Text style={styles.label}>{uiNameFull.numSyllables1}</Text>
            <OptionSelect
              items={uiNames.syllablesOptions}
              active={(value) => syllables1 === value}
              onSelect={updateSyllables1}
            />
            <Text style={styles.label}>{uiNameFull.numSyllables2}</Text>
            <OptionSelect
              items={uiNames.syllablesOptions}
              active={(value) => syllables2 === value}
              onSelect={updateSyllables2}
            />
            <Text style={styles.label}>{uiNameFull.numSyllables3}</Text>
            <OptionSelect
              items={uiNames.syllablesOptions}
              active={(value) => syllables3 === value}
              onSelect={updateSyllables3}
            />
            <Text style={styles.label}>{uiNameFull.nameEnding}</Text>
            <Text
              style={{ color: colors.placeholder, padding: 10, paddingTop: 0 }}
            >
              {uiNameFull.nameEndingHint}
            </Text>
            <OptionSelect
              items={uiNameFull.nameEndingOptions}
              active={(value) => ending === value}
              onSelect={setEnding}
            />
          </View>
        }
      />
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
