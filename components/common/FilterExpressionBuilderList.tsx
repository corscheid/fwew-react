import { Button } from "@/components/common/Button";
import { FilterExpressionBuilder } from "@/components/common/FilterExpressionBuilder";
import { SmallButton } from "@/components/common/SmallButton";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getButtonBackground, getThemedComponents } from "@/themes";
import { FilterExpressionBuilderValue } from "@/types/list";
import { useTheme } from "@react-navigation/native";
import { StyleSheet, View } from "react-native";

type FilterExpressionBuilderListProps = {
  filters: FilterExpressionBuilderValue[];
  add: () => void;
  remove: (index: number) => void;
  update: (index: number, expression: FilterExpressionBuilderValue) => void;
  disabled: boolean;
  mode?: "list" | "random";
};

export function FilterExpressionBuilderList(
  props: FilterExpressionBuilderListProps
) {
  const { filters, add, remove, update, disabled, mode = "list" } = props;
  const { colors } = useTheme();
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { list, random } = getUI(appLanguage, dialect);
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  const getHeaderText = (index: number) => {
    if (index > 0) return list.and;
    if (mode === "random") return random.where;
    return "";
  };

  return (
    <View>
      {filters.map((_, i) => (
        <View key={`feb_${i}`}>
          <View
            style={[styles.febHeader]}
          >
            <Themed.Text style={styles.label}>{getHeaderText(i)}</Themed.Text>
            <SmallButton
              onPress={() => remove(i)}
              icon="trash"
              color={colors.notification}
            />
          </View>
          <FilterExpressionBuilder
            value={filters[i]}
            onChange={(value) => update(i, value)}
          />
        </View>
      ))}
      <View style={{ paddingTop: 10 }}>
        {getButtonBackground(themeName, ({
          ...styles.audioButton,
        }),
          (<Button onPress={add} icon="plus" disabled={disabled} />), dialect, true
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  febHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    paddingVertical: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
});
