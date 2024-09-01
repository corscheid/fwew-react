import { Button } from "@/components/common/Button";
import { FilterExpressionBuilder } from "@/components/common/FilterExpressionBuilder";
import { SmallButton } from "@/components/common/SmallButton";
import { GradientCardView, Text, View } from "@/components/common/Themed";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { FilterExpressionBuilderValue } from "@/types/list";
import { useTheme } from "@react-navigation/native";
import { StyleSheet } from "react-native";

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

  const getHeaderText = () => {
    switch (mode) {
      case "list":
        return "";
      case "random":
        return random.where;
      default:
        return "";
    }
  };

  return (
    <GradientCardView>
      {filters.map((_, i) => (
        <View key={`feb_${i}`}>
          <View style={styles.febHeader}>
            <Text style={styles.label}>
              {i > 0 ? list.and : getHeaderText()}
            </Text>
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
        <Button onPress={add} icon="plus" disabled={disabled} />
      </View>
    </GradientCardView>
  );
}

const styles = StyleSheet.create({
  febHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    padding: 16,
    fontWeight: "bold",
  },
});
