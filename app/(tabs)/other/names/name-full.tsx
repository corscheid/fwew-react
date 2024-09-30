import { Accordion } from "@/components/common/Accordion";
import { Button } from "@/components/common/Button";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { OptionSelect } from "@/components/common/OptionSelect";
import { ResultCount } from "@/components/common/ResultCount";
import { WideLayout } from "@/components/common/WideLayout";
import { NameResults } from "@/components/names/NameResults";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { useNameFull } from "@/hooks/useNameFull";
import { getColorExtension, getThemedComponents } from "@/themes";
import { useTheme } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  useColorScheme,
  useWindowDimensions,
  View,
} from "react-native";

export default function NameFullScreen() {
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
  const theme = useTheme();
  const resultsVisible = numNames.length > 0 && names.length > 0;
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);
  const colorExtension = getColorExtension(themeName);
  const colorScheme = useColorScheme();
  const colors = colorExtension[colorScheme ?? "light"];
  const { width } = useWindowDimensions();
  const wide = width > 720;

  const copyAll = async () => {
    await Clipboard.setStringAsync(names.join("\n"));
  };

  const copy = async (text: string) => {
    await Clipboard.setStringAsync(text);
  };

  if (wide) {
    return (
      <WideLayout
        sidebar={
          <>
            <Accordion
              closedContent={<Themed.Text>{uiNames.options}</Themed.Text>}
              openedContent={
                <View
                  style={[
                    styles.optionContainer,
                    { backgroundColor: theme.colors.background },
                  ]}
                >
                  <Themed.Text style={styles.label}>
                    {uiNames.numNames}
                  </Themed.Text>
                  <NumericTextInput
                    value={numNames}
                    onChangeText={updateNumNames}
                    placeholder="1-50"
                    autoFocus
                  />
                  <Themed.Text style={styles.label}>
                    {uiNameFull.numSyllables1}
                  </Themed.Text>
                  <OptionSelect
                    items={uiNames.syllablesOptions}
                    active={(value) => syllables1 === value}
                    onSelect={updateSyllables1}
                  />
                  <Themed.Text style={styles.label}>
                    {uiNameFull.numSyllables2}
                  </Themed.Text>
                  <OptionSelect
                    items={uiNames.syllablesOptions}
                    active={(value) => syllables2 === value}
                    onSelect={updateSyllables2}
                  />
                  <Themed.Text style={styles.label}>
                    {uiNameFull.numSyllables3}
                  </Themed.Text>
                  <OptionSelect
                    items={uiNames.syllablesOptions}
                    active={(value) => syllables3 === value}
                    onSelect={updateSyllables3}
                  />
                  <Themed.Text style={styles.label}>
                    {uiNameFull.nameEnding}
                  </Themed.Text>
                  <Themed.Text
                    style={{
                      color: colors.placeholder,
                      padding: 10,
                      paddingTop: 0,
                    }}
                  >
                    {uiNameFull.nameEndingHint}
                  </Themed.Text>
                  <OptionSelect
                    items={uiNameFull.nameEndingOptions}
                    active={(value) => ending === value}
                    onSelect={setEnding}
                  />
                </View>
              }
            />
            <View style={styles.buttonContainerLandscape}>
              <Button
                icon="clipboard"
                text={uiNames.copyAll}
                onPress={copyAll}
                disabled={!resultsVisible}
              />
              <Button icon="refresh" onPress={execute} disabled={loading} />
            </View>
          </>
        }
        header={
          <ResultCount
            visible={resultsVisible}
            resultCount={names.length}
            style={styles.resultCount}
          />
        }
        main={<NameResults names={names} copyName={copy} />}
        refresh={{
          loading,
          getData: execute,
          colors: [theme.colors.primary],
        }}
      />
    );
  }

  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={execute}
          colors={[theme.colors.primary]}
        />
      }
    >
      <View style={styles.container}>
        <Accordion
          closedContent={<Themed.Text>{uiNames.options}</Themed.Text>}
          openedContent={
            <View
              style={[
                styles.optionContainer,
                { backgroundColor: theme.colors.background },
              ]}
            >
              <Themed.Text style={styles.label}>{uiNames.numNames}</Themed.Text>
              <NumericTextInput
                value={numNames}
                onChangeText={updateNumNames}
                placeholder="1-50"
                autoFocus
              />
              <Themed.Text style={styles.label}>
                {uiNameFull.numSyllables1}
              </Themed.Text>
              <OptionSelect
                items={uiNames.syllablesOptions}
                active={(value) => syllables1 === value}
                onSelect={updateSyllables1}
              />
              <Themed.Text style={styles.label}>
                {uiNameFull.numSyllables2}
              </Themed.Text>
              <OptionSelect
                items={uiNames.syllablesOptions}
                active={(value) => syllables2 === value}
                onSelect={updateSyllables2}
              />
              <Themed.Text style={styles.label}>
                {uiNameFull.numSyllables3}
              </Themed.Text>
              <OptionSelect
                items={uiNames.syllablesOptions}
                active={(value) => syllables3 === value}
                onSelect={updateSyllables3}
              />
              <Themed.Text style={styles.label}>
                {uiNameFull.nameEnding}
              </Themed.Text>
              <Themed.Text
                style={{
                  color: colors.placeholder,
                  padding: 10,
                  paddingTop: 0,
                }}
              >
                {uiNameFull.nameEndingHint}
              </Themed.Text>
              <OptionSelect
                items={uiNameFull.nameEndingOptions}
                active={(value) => ending === value}
                onSelect={setEnding}
              />
            </View>
          }
        />
        <View style={styles.buttonContainer}>
          <Button
            icon="clipboard"
            text={uiNames.copyAll}
            onPress={copyAll}
            disabled={!resultsVisible}
          />
          <Button icon="refresh" onPress={execute} disabled={loading} />
        </View>
        <ResultCount
          visible={resultsVisible}
          resultCount={names.length}
          style={styles.resultCount}
        />
        <NameResults names={names} copyName={copy} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  optionContainer: {},
  label: {
    paddingVertical: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainerLandscape: {
    gap: 16,
    paddingTop: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    paddingTop: 16,
  },
  resultCount: {
    padding: 16,
  },
});
