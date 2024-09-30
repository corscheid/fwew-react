import { Accordion } from "@/components/common/Accordion";
import { FilterExpressionBuilderList } from "@/components/common/FilterExpressionBuilderList";
import { NumericTextInput } from "@/components/common/NumericTextInput";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getThemedComponents } from "@/themes";
import type { NumericString } from "@/types/common";
import type { FilterExpressionBuilderValue } from "@/types/list";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

type RandomOptionsProps = {
  numWords: NumericString;
  updateNumWords: (num: NumericString) => void;
  filters: FilterExpressionBuilderValue[];
  add: () => void;
  remove: (index: number) => void;
  update: (index: number, filter: FilterExpressionBuilderValue) => void;
  incomplete: boolean;
};

export function RandomOptions(props: RandomOptionsProps) {
  const { numWords, updateNumWords, filters, add, remove, update, incomplete } =
    props;
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);
  const theme = useTheme();
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  return (
    <Accordion
      closedContent={<Themed.Text>{ui.random.randomOptions}</Themed.Text>}
      openedContent={
        <View style={{ backgroundColor: theme.colors.background }}>
          <Themed.Text style={styles.label}>{ui.random.numWords}</Themed.Text>
          <NumericTextInput
            placeholder={`${ui.random.numWords} (1-100)`}
            onChangeText={updateNumWords}
            value={numWords}
          />
          <FilterExpressionBuilderList
            filters={filters}
            add={add}
            remove={remove}
            update={update}
            disabled={incomplete}
            mode="random"
          />
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  label: {
    paddingVertical: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
});
