import { Button } from "@/components/common/Button";
import { Affixes } from "@/constants/Affixes";
import { LenitingAdpositions } from "@/constants/Lenition";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useFavoritesContext } from "@/context/FavoritesContext";
import { useResultsLanguageContext } from "@/context/ResultsLanguageContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { useSound } from "@/hooks/useSound";
import { ReefMe } from "@/lib/dialect";
import { Romanize } from "@/lib/romanize";
import { getColorExtension, getThemedComponents, getButtonBackground } from "@/themes";
import { useTheme } from "@react-navigation/native";
import { fwewSimple, type LanguageCode, type Word } from "fwew.js";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Autolink from "react-native-autolink";

type ResultInfoProps = {
  word: Word;
};

export function ResultInfo({ word }: ResultInfoProps) {
  const { playSound, disabled } = useSound();
  const { resultsLanguage } = useResultsLanguageContext();
  const local = word[resultsLanguage.toUpperCase() as Uppercase<LanguageCode>];
  const { dialect } = useDialectContext();
  const ui = getUI(resultsLanguage, dialect);
  const { themeName } = useThemeNameContext();
  const colorExtension = getColorExtension(themeName);
  const Themed = getThemedComponents(themeName);
  const forestNavi = word.Navi;
  const { reefNavi, reefInfixDots, reefInfixSlots } = ReefMe(
    word.IPA,
    forestNavi
  );
  const { abbr, name } = ui.common.partOfSpeech[word.PartOfSpeech];

  return (
    <View style={styles.container}>
      {/* Part Of Speech, Definition */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Themed.BoldText style={styles.title}>
          <Themed.ItalicText>
            {abbr} ({name})
          </Themed.ItalicText>{" "}
          — {local}
        </Themed.BoldText>
      </View>
      {/* IPA, Breakdown */}
      <Pronunciation {...word} />
      {/* Buttons */}
      <View style={styles.buttonContainer}>
        {/* Audio Button */}
        {getButtonBackground(themeName, (styles.audioButton), (<Button
          onPress={() => playSound(word.ID)}
          disabled={disabled || (dialect === "reef" && forestNavi !== reefNavi)}
          icon="volume-up"
          text={ui.search.audio}
          textStyle={{ color: colorExtension.dark.text }}
        />), dialect, true)}
        {/* Favorite Button */}
        <FavoriteButton word={word} />
      </View>
      {/* Prefixes */}
      {word.Affixes.Prefix && (
        <AffixDetail
          label={ui.search.prefixes}
          value={word.Affixes.Prefix}
          type="prefix"
        />
      )}
      {/* Infixes */}
      {word.PartOfSpeech.startsWith("v") && (
        <AffixDetail
          label={ui.search.infixes}
          value={word.Affixes.Infix}
          type="infix"
        >
          <View
            style={{
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "space-between",
            }}
          >
            {/* Infix Locations */}
            {word.PartOfSpeech.startsWith("v") && (
              <>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  {/* Dots */}
                  <Themed.Text style={styles.value}>
                    {dialect === "reef" ? reefInfixDots : word.InfixDots}
                  </Themed.Text>
                  <Themed.Text>/</Themed.Text>
                  {/* Brackets */}
                  <Themed.Text style={styles.value}>
                    {dialect === "reef" ? reefInfixSlots : word.InfixLocations}
                  </Themed.Text>
                </View>
              </>
            )}
          </View>
        </AffixDetail>
      )}
      {/* Suffixes */}
      {word.Affixes.Suffix && (
        <AffixDetail
          label={ui.search.suffixes}
          value={word.Affixes.Suffix}
          type="suffix"
        />
      )}
      {/* Lenition */}
      {word.Affixes.Lenition && (
        <DetailItem
          label={ui.search.lenition}
          value={word.Affixes.Lenition.join(", ")}
        />
      )}
      {/* Comment */}
      {word.Affixes.Comment && (
        <DetailItem
          label={ui.search.comment}
          value={word.Affixes.Comment.join(", ")}
        />
      )}
      {/* Source(s) */}
      <Themed.BoldText style={styles.label}>{ui.search.source}</Themed.BoldText>
      {word.Source.split(" | ").map((src, i) => {
        let [source, date] = src.split("(");
        date = date ? date.replace(")", "") : "";
        return (
          <View
            key={`src_${word.ID}_${i}`}
            style={{
              justifyContent: "center",
              gap: 8,
            }}
          >
            {/* Source Date */}
            {date && (
              <Themed.MonoText style={styles.value}>{date}</Themed.MonoText>
            )}
            {/* Source Text/Link */}
            {source && (
              <Autolink
                url
                text={source}
                style={styles.value}
                component={Themed.Text}
              />
            )}
          </View>
        );
      })}
    </View>
  );
}

function FavoriteButton({ word }: { word: Word }) {
  const theme = useTheme();
  const { isFavorite, toggleFavorite } = useFavoritesContext();
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const ui = getUI(appLanguage, dialect);
  const { themeName } = useThemeNameContext();
  const colorExtension = getColorExtension(themeName);

  const faved = isFavorite(word);
  return getButtonBackground(themeName, ({
    ...styles.audioButton,
  }),
    (<Button
      onPress={() => toggleFavorite(word)}
      icon={faved ? "heart" : "heart-o"}
      text={ui.search.favorite}
      textStyle={{ color: colorExtension.dark.text }}
    />), dialect, faved
  );
}

type AffixDetailProps = {
  label: string;
  value: string[] | null;
  type: "prefix" | "infix" | "suffix";
  children?: React.ReactNode;
};

function AffixDetail({ label, value, type, children }: AffixDetailProps) {
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  if (value == null) {
    value = [];
  }

  const affixes = value.map((v) => Affixes[type][v]);

  return (
    <View style={{ gap: 16 }}>
      <Themed.BoldText style={styles.label}>{label}</Themed.BoldText>
      {children}
      {affixes.map((affix, i) => {
        if (affix?.navi) {
          return (
            <View key={`rip_a_${i}`} style={styles.wrapRow}>
              <Themed.Text style={styles.value}>
                <Themed.BoldText>{affix.navi}</Themed.BoldText>{" "}
                <Themed.ItalicText>{affix.display}</Themed.ItalicText> (
                {affix.productive ? "" : "not "}
                productive{affix.productive ? ` for ${affix.for}` : ""})
              </Themed.Text>
            </View>
          );
        }
        return (
          <View key={`rip_a_${i}`} style={styles.wrapRow}>
            <Themed.Text style={styles.value}>
              <Themed.BoldText>
                -{value[i]}
                {LenitingAdpositions.includes(value[i]) ? "+" : ""}
              </Themed.BoldText>{" "}
              <AdpositionDisplay adposition={value[i]} /> (productive for nouns)
            </Themed.Text>
          </View>
        );
      })}
    </View>
  );
}

function AdpositionDisplay({ adposition }: { adposition: string }) {
  const { resultsLanguage } = useResultsLanguageContext();
  const languageCode = resultsLanguage.toUpperCase() as Uppercase<LanguageCode>;
  const [display, setDisplay] = useState<string>();
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

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
    const result = results[0][1][languageCode];
    setDisplay(result);
  }, [adposition, languageCode]);

  useEffect(() => {
    getWord().then();
  }, [getWord]);

  return (
    <Themed.ItalicText style={styles.value}>
      {display ?? adposition}
    </Themed.ItalicText>
  );
}

type DetailItemProps = {
  label: string;
  value: string;
  link?: boolean;
};

function DetailItem({ label, value, link }: DetailItemProps) {
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);
  return (
    <View>
      <Themed.BoldText style={[styles.label, { userSelect: "text" }]}>
        {label}:
      </Themed.BoldText>
      {link ? (
        <Autolink
          url
          text={value}
          style={styles.value}
          component={Themed.Text}
        />
      ) : (
        <Themed.Text style={styles.value}>{value}</Themed.Text>
      )}
    </View>
  );
}

type PronunciationProps = Pick<Word, "IPA" | "Stressed" | "Navi">;

function Pronunciation({ IPA, Stressed, Navi }: PronunciationProps) {
  const { dialect } = useDialectContext();
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

  let { reefIPA, reefSyllables } = ReefMe(IPA, Navi);
  let forestIPA = IPA.replaceAll("ʊ", "u");
  let ForestSyllables = Romanize(forestIPA);

  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
      <Themed.Text style={styles.value}>
        {`[${dialect === "reef" ? reefIPA : forestIPA}]`}
      </Themed.Text>
      <Themed.Text>/</Themed.Text>
      <Themed.Text style={styles.value}>
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
      </Themed.Text>
    </View>
  );
}

type BreakdownProps = Pick<Word, "IPA" | "Stressed" | "Syllables">;

function Breakdown({ IPA, Stressed, Syllables }: BreakdownProps) {
  const { themeName } = useThemeNameContext();
  const Themed = getThemedComponents(themeName);

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
      return <Themed.Text style={styles.value}>{syllables[0]}</Themed.Text>;
    }
    for (let i = 0; i < syllables.length; i++) {
      if (i !== 0) {
        everything.push("-");
      }
      if (stressed[superH] && stressedIndex !== -1) {
        // underlined
        everything.push(
          <Themed.UnderlinedText key={`srl_${h}${i}`}>
            {syllables[i].toUpperCase()}
          </Themed.UnderlinedText>
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
    gap: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  title: {
    fontSize: 20,
  },
  label: {
    fontSize: 18,
  },
  value: {
    fontSize: 16,
    userSelect: "text",
  },
  audioButton: {
    flex: 1,
    marginBottom: 16,
    borderRadius: 8,
  },
  wrapRow: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
