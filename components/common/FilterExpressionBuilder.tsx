import { AlphaTextInput } from "@/components/common/AlphaTextInput";
import { DropDownSelect } from "@/components/common/DropDownSelect";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getThemedComponents } from "@/themes";
import type {
  FilterExpressionBuilderValue,
  ListMenuCondItem,
  ListMenuWhatItem,
} from "@/types/list";
import { StyleSheet, View } from "react-native";

type FilterExpressionBuilderProps = {
  value: FilterExpressionBuilderValue;
  onChange: (value: FilterExpressionBuilderValue) => void;
};

export function FilterExpressionBuilder(props: FilterExpressionBuilderProps) {
  const { value, onChange } = props;
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { list, common } = getUI(appLanguage, dialect);
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  const whatValues = list.listMenu.whatValues;
  const condValues = value.what
    ? list.listMenu.condValues[value.what.value]
    : [];
  const isExactPosSpec =
    value.what?.value === "pos" &&
    (value.cond?.value === "is" || value.cond?.value === "not-is");
  const isNumericSpec =
    value.what?.value === "words" ||
    value.what?.value === "syllables" ||
    value.what?.value === "stress" ||
    value.what?.value === "length";

  const setWhat = (what: ListMenuWhatItem | undefined) => {
    onChange({
      what,
      cond: undefined,
      spec: value.spec,
    });
  };

  const setCond = (cond: ListMenuCondItem | undefined) => {
    onChange({
      what: value?.what,
      cond,
      spec: value.spec,
    });
  };

  const setSpec = (spec: string) => {
    onChange({
      what: value?.what,
      cond: value?.cond,
      spec,
    });
  };

  const getNumericExample = () => {
    switch (value.what?.value) {
      case "words":
        return "20";
      case "syllables":
        return "2";
      case "stress":
        return "1";
      case "length":
        return "5";
      default:
        return "64";
    }
  };

  return (
    <View style={styles.container}>
      {/* what */}
      <DropDownSelect
        options={whatValues}
        value={value.what}
        initiallyOpen={!value.what}
        renderOption={(option) => (
          <Themed.Text style={styles.text}>{option?.description}</Themed.Text>
        )}
        keyExtractor={(option, i) => `dd_${option?.value}_${i}`}
        onChange={setWhat}
      />
      {/* cond */}
      {value.what && (
        <DropDownSelect
          options={condValues}
          value={value.cond}
          initiallyOpen={!value.cond}
          renderOption={(option) => (
            <Themed.Text style={styles.text}>{option?.description}</Themed.Text>
          )}
          keyExtractor={(option, i) => `dd_${option?.value}_${i}`}
          onChange={setCond}
        />
      )}
      {/* spec pos is, spec pos not-is */}
      {value.what && value.cond && isExactPosSpec && (
        <DropDownSelect
          options={common.partOfSpeechList}
          value={{
            value: value.spec,
            name: common.partOfSpeech[value.spec],
          }}
          initiallyOpen={!value.spec}
          renderOption={(option) => (
            <Themed.Text style={styles.text}>
              {option.value && option.name
                ? `${option.value} (${option.name})`
                : " "}
            </Themed.Text>
          )}
          keyExtractor={(option, i) => `dd_${option}_${i}`}
          onChange={(option) => setSpec(option.value)}
        />
      )}
      {/* spec numeric */}
      {value.what && value.cond && isNumericSpec && !isExactPosSpec && (
        <NumericTextInput
          value={value.spec}
          onChangeText={setSpec}
          placeholder={getNumericExample()}
          autoFocus
        />
      )}
      {/* spec non-numeric */}
      {value.what && value.cond && !isNumericSpec && !isExactPosSpec && (
        <AlphaTextInput
          value={value.spec}
          onChangeText={setSpec}
          placeholder={`${value.what?.description} ${value.cond?.description}...`}
          autoFocus
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  text: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor:"#888"
  },
});
