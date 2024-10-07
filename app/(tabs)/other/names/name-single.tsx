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
import useNameSingle from "@/hooks/useNameSingle";
import { getBackground, getThemedComponents } from "@/themes";
import { useTheme } from "@react-navigation/native";
import * as Clipboard from "expo-clipboard";
import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";

export default function NameSingleScreen() {
  const {
    names,
    numNames,
    updateNumNames,
    numSyllables,
    updateNumSyllables,
    loading,
    execute,
  } = useNameSingle();
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { names: uiNames, nameSingle: uiNameSingle } = getUI(
    appLanguage,
    dialect
  );
  const theme = useTheme();
  const resultsVisible = numNames.length > 0 && names.length > 0;
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);
  const { width } = useWindowDimensions();
  const wide = width > 720;

  const copyAll = async () => {
    await Clipboard.setStringAsync(names.join("\n"));
  };

  const copy = async (text: string) => {
    await Clipboard.setStringAsync(text);
  };

  var content = (
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
      <Themed.CardView>
        <Accordion
          closedContent={<Themed.Text>{uiNames.options}</Themed.Text>}
          openedContent={
            <View
              style={[
                styles.optionContainer,
              ]}
            >
              <Themed.Text style={styles.label}>{uiNames.numNames}</Themed.Text>
              <NumericTextInput
                placeholder={`${uiNames.numNames} (1-50)`}
                value={numNames}
                onChangeText={updateNumNames}
                autoFocus
              />
              <Themed.Text style={styles.label}>
                {uiNameSingle.numSyllables}
              </Themed.Text>
              <OptionSelect
                items={uiNames.syllablesOptions}
                active={(value) => numSyllables === value}
                onSelect={updateNumSyllables}
              />
            </View>
          }
        />
        </Themed.CardView>
        <View style={styles.buttonContainer}>
          <Button
            icon="clipboard"
            text={uiNames.copyAll}
            onPress={copyAll}
            disabled={!resultsVisible}
            selected={true}
          />
          <Button selected={true} icon="refresh" onPress={execute} disabled={loading} />
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

  if (wide) {
    content = (
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
                    placeholder={`${uiNames.numNames} (1-50)`}
                    value={numNames}
                    onChangeText={updateNumNames}
                    autoFocus
                  />
                  <Themed.Text style={styles.label}>
                    {uiNameSingle.numSyllables}
                  </Themed.Text>
                  <OptionSelect
                    items={uiNames.syllablesOptions}
                    active={(value) => numSyllables === value}
                    onSelect={updateNumSyllables}
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
                selected={true}
              />
              <Button selected={true} icon="refresh" onPress={execute} disabled={loading} />
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

  return getBackground(themeName, content, dialect);
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
