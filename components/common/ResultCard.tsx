import { Accordion } from "@/components/common/Accordion";
import { ResultInfo } from "@/components/common/ResultInfo";
import { useDialectContext } from "@/context/DialectContext";
import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import type { LanguageCode, Word } from "fwew.js";
import { ResultOverview } from "./ResultOverview";
import { getThemedComponents } from "@/themes";
import { useThemeNameContext } from "@/context/ThemeNameContext";

type ResultCardProps = {
  word: Word;
};

export function ResultCard({ word }: ResultCardProps) {
  const { resultsLanguage } = useResultsLanguageContext();
  const local = word[resultsLanguage.toUpperCase() as Uppercase<LanguageCode>];
  const { dialect } = useDialectContext();
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  return (
    <Themed.CardView>
    <Accordion
      closedContent={
        <ResultOverview dialect={dialect} word={word} local={local} />
      }
      openedContent={<ResultInfo word={word} />}
    />
    </Themed.CardView>
  );
}
