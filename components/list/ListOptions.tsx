import { Accordion } from "@/components/common/Accordion";
import { FilterExpressionBuilderList } from "@/components/common/FilterExpressionBuilderList";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getThemedComponents } from "@/themes";
import type { FilterExpressionBuilderValue } from "@/types/list";
import { useTheme } from "@react-navigation/native";
import { View } from "react-native";

type ListOptionsProps = {
  filters: FilterExpressionBuilderValue[];
  add: () => void;
  remove: (index: number) => void;
  update: (index: number, filter: FilterExpressionBuilderValue) => void;
  incomplete: boolean;
  initiallyOpen?: boolean;
};

export function ListOptions(props: ListOptionsProps) {
  const { filters, add, remove, update, incomplete, initiallyOpen } = props;
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);
  const theme = useTheme();
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  return (
    <Accordion
      initiallyOpen={initiallyOpen}
      closedContent={<Themed.Text>{ui.list.listOptions}</Themed.Text>}
      openedContent={
        <View>
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
