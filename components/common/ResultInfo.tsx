import { Button } from "@/components/common/Button";
import {
  BoldText,
  ItalicText,
  UnderlinedText,
} from "@/components/common/StyledText";
import { PlainCardView, GradientCardView, Text } from "@/components/common/Themed";
import { Affixes } from "@/constants/Affixes";
import Colors from "@/constants/Colors";
import { LenitingAdpositions } from "@/constants/Lenition";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useFavoritesContext } from "@/context/FavoritesContext";
import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import { useSound } from "@/hooks/useSound";
import { ReefMe } from "@/lib/dialect";
import { Romanize } from "@/lib/romanize";
import { useTheme } from "@react-navigation/native";
import { fwewSimple, type LanguageCode, type Word } from "fwew.js";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Autolink from "react-native-autolink";
import { getTheme } from "@/hooks/useAuxtheme";

type ResultInfoProps = {
  word: Word;
};

export function ResultInfo({ word }: ResultInfoProps) {
  const auxtheme = getTheme();
  const { playSound, disabled } = useSound();
  const { resultsLanguage } = useResultsLanguageContext();
  const local = word[resultsLanguage.toUpperCase() as Uppercase<LanguageCode>];
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);
  const forestNavi = word.Navi;
  const { reefNavi, reefInfixDots, reefInfixSlots } = ReefMe(
    word.IPA,
    forestNavi
  );

  return (
    <PlainCardView style={styles.container}>
      <PlainCardView style={[styles.buttonContainer, {marginBottom: 16}]}>
        <View style={styles.audioButton}>
        {auxtheme.ButtonBackground(<Button
          onPress={() => playSound(word.ID)}
          disabled={disabled || (dialect === "reef" && forestNavi !== reefNavi)}
          icon="volume-up"
          text={ui.search.audio}
          style={styles.audioButton}
          textStyle={{ color: Colors.dark.text }}
        />)}
        </View>
        <View style={styles.audioButton}>
        <FavoriteButton word={word} />
        </View>
      </PlainCardView>
      <DetailItem
        label={ui.search.navi}
        value={dialect === "reef" ? reefNavi : forestNavi}
      />
      <DetailItem
        label={ui.search.partOfSpeech}
        value={`${word.PartOfSpeech} (${
          ui.common.partOfSpeech[word.PartOfSpeech]
        })`}
      />
      <DetailItem label={ui.search.definition} value={local} />
      <Pronunciation {...word} />
      {word.PartOfSpeech.startsWith("v") && (
        <>
          <DetailItem
            label={ui.search.infixDots}
            value={dialect === "reef" ? reefInfixDots : word.InfixDots}
          />
          <DetailItem
            label={ui.search.infixSlots}
            value={dialect === "reef" ? reefInfixSlots : word.InfixLocations}
          />
        </>
      )}
      {word.Affixes.Prefix && (
        <AffixDetail
          label={ui.search.prefixes}
          value={word.Affixes.Prefix}
          type="prefix"
        />
      )}
      {word.Affixes.Infix && (
        <AffixDetail
          label={ui.search.infixes}
          value={word.Affixes.Infix}
          type="infix"
        />
      )}
      {word.Affixes.Suffix && (
        <AffixDetail
          label={ui.search.suffixes}
          value={word.Affixes.Suffix}
          type="suffix"
        />
      )}
      {word.Affixes.Lenition && (
        <DetailItem
          label={ui.search.lenition}
          value={word.Affixes.Lenition.join(", ")}
        />
      )}
      {word.Affixes.Comment && (
        <DetailItem
          label={ui.search.comment}
          value={word.Affixes.Comment.join(", ")}
        />
      )}
      <DetailItem link label={ui.search.source} value={word.Source} />
    </PlainCardView>
  );
}

function FavoriteButton({ word }: { word: Word }) {
  const theme = useTheme();
  const { isFavorite, toggleFavorite } = useFavoritesContext();
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);

  const faved = isFavorite(word);
  return (
    <Button
      onPress={() => toggleFavorite(word)}
      icon={faved ? "heart" : "heart-o"}
      text={ui.search.favorite}
      style={{
        ...styles.audioButton,
        backgroundColor: faved
          ? theme.colors?.primary
          : Colors[theme.dark ? "dark" : "light"].innerCard,
      }}
      textStyle={{ color: Colors.dark.text }}
    />
  );
}

type AffixDetailProps = {
  label: string;
  value: string[];
  type: "prefix" | "infix" | "suffix";
};

function AffixDetail({ label, value, type }: AffixDetailProps) {
  if (value.length === 0) return null;

  const affixes = value.map((v) => Affixes[type][v]);

  return (
    <PlainCardView>
      <BoldText style={styles.label}>{label}:</BoldText>
      {affixes.map((affix, i) => {
        if (affix?.navi) {
          return (
            <GradientCardView key={`rip_a_${i}`} style={styles.wrapRow}>
              <Text style={styles.value}>
                <BoldText>{affix.navi}</BoldText>{" "}
                <ItalicText>{affix.display}</ItalicText> (
                {affix.productive ? "" : "not "}
                productive{affix.productive ? ` for ${affix.for}` : ""})
              </Text>
            </GradientCardView>
          );
        }
        return (
          <PlainCardView key={`rip_a_${i}`} style={styles.wrapRow}>
            <Text style={styles.value}>
              <BoldText>
                -{value[i]}
                {LenitingAdpositions.includes(value[i]) ? "+" : ""}
              </BoldText>{" "}
              <AdpositionDisplay adposition={value[i]} /> (productive for nouns)
            </Text>
          </PlainCardView>
        );
      })}
    </PlainCardView>
  );
}

function AdpositionDisplay({ adposition }: { adposition: string }) {
  const { resultsLanguage } = useResultsLanguageContext();
  const languageCode = resultsLanguage.toUpperCase() as Uppercase<LanguageCode>;
  const [display, setDisplay] = useState<string>();

  const getWord = useCallback(async () => {
    const results = await fwewSimple(adposition);
    if (
      !results ||
      results.length === 0 ||
      !results[0] ||
      results[0].length === 0
    ) {
      return;
    }
    const result = results[0][0][languageCode];
    setDisplay(result);
  }, [adposition, languageCode]);

  useEffect(() => {
    getWord().then();
  }, [getWord]);

  return <ItalicText style={styles.value}>{display ?? adposition}</ItalicText>;
}

type DetailItemProps = {
  label: string;
  value: string;
  link?: boolean;
};

function DetailItem({ label, value, link }: DetailItemProps) {
  return (
    <PlainCardView>
      <BoldText style={[styles.label, { userSelect: "text" }]}>
        {label}:
      </BoldText>
      {link ? (
        <Autolink url text={value} style={styles.value} component={Text} />
      ) : (
        <Text style={styles.value}>{value}</Text>
      )}
    </PlainCardView>
  );
}

type PronunciationProps = Pick<Word, "IPA" | "Stressed" | "Navi">;

function Pronunciation({ IPA, Stressed, Navi }: PronunciationProps) {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);
  let { reefIPA, reefSyllables } = ReefMe(IPA, Navi);
  let forestIPA = IPA.replaceAll("ʊ", "u");
  let ForestSyllables = Romanize(forestIPA);

  return (
    <>
      <DetailItem
        label={ui.search.ipa}
        value={`[${dialect === "reef" ? reefIPA : forestIPA}]`}
      />
      <PlainCardView>
        <BoldText style={[styles.label, { userSelect: "text" }]}>
          {ui.search.breakdown}:
        </BoldText>
        <Text style={styles.value}>
          {dialect === "reef" ? (
            <Breakdown
              IPA={reefIPA}
              Stressed={Stressed}
              Syllables={reefSyllables}
            />
          ) : (
            <Breakdown
              IPA={IPA}
              Stressed={Stressed}
              Syllables={ForestSyllables}
            />
          )}
        </Text>
      </PlainCardView>
    </>
  );
}

type BreakdownProps = Pick<Word, "IPA" | "Stressed" | "Syllables">;

function Breakdown({ IPA, Stressed, Syllables }: BreakdownProps) {
  const stressedIndex = +Stressed - 1;
  const individualWord = Syllables.toLowerCase().split(" ");
  // Get stress markers out of the IPA
  let stressed = [];
  let splitIPA = IPA.replaceAll(" ", ".").split(".");
  for (let a of splitIPA) {
    if (a.includes("ˈ")) {
      stressed.push(true);
    } else {
      stressed.push(false);
    }
  }

  let everything = [];
  // split by spaces first
  let superH = 0;
  for (let h = 0; h < individualWord.length; ) {
    // then split by hyphens
    let syllables = individualWord[h].split("-");
    if (individualWord[h] === "or") {
      if (stressedIndex === -1) {
        return everything; // don't continue for same word different stress
      }
      superH++;
      everything.push("or ");
      h++;
      continue;
    }
    if (syllables.length === 1 && individualWord.length === 1) {
      return <Text style={styles.value}>{syllables[0]}</Text>;
    }
    for (let i = 0; i < syllables.length; i++) {
      if (i !== 0) {
        everything.push("-");
      }
      if (stressed[superH] && stressedIndex !== -1) {
        // underlined
        everything.push(
          <UnderlinedText key={`srl_${h}${i}`}>
            {syllables[i].toUpperCase()}
          </UnderlinedText>
        );
      } else {
        // not underlined
        everything.push(syllables[i]);
      }
      superH++;
    }
    h++;
    if (h < individualWord.length && stressedIndex !== -1) {
      everything.push(" ");
    }
  }

  return everything;
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  label: {
    fontSize: 18,
  },
  value: {
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
    userSelect: "text",
  },
  audioButton: {
    flex: 1,
    borderRadius: 8,
  },
  wrapRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
