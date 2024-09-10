import { Accordion } from "@/components/common/Accordion";
import { ResultInfo } from "@/components/common/ResultInfo";
import Colors from "@/constants/Colors";
import { useDialectContext } from "@/context/DialectContext";
import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import type { LanguageCode, Word } from "fwew.js";
import { useColorScheme } from "react-native";
import { ResultOverview } from "./ResultOverview";
import { GradientCardView } from "./Themed";

type ResultCardProps = {
  word: Word;
};

export function ResultCard({ word }: ResultCardProps) {
  const { resultsLanguage } = useResultsLanguageContext();
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const local = word[resultsLanguage.toUpperCase() as Uppercase<LanguageCode>];
  const { dialect } = useDialectContext();

  return (
    <GradientCardView>
    <Accordion
      closedContent={
        <ResultOverview
          dialect={dialect}
          word={word}
          colors={colors}
          local={local}
        />
      }
      openedContent={<ResultInfo word={word} />}
    />
    </GradientCardView>
  );
}
