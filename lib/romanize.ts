/**
 * Turn forest IPA into a syllable breakdown
 *
 * @param {string} IPA forest IPA
 * @returns {string} Phonetic breakdown
 */
export function Romanize(IPA: string): string {
  let ipa = IPA.replaceAll("·", "");

  // now Romanize the reef IPA
  let word = ipa.split(" ");

  let breakdown = "";

  for (let s of word) {
    if (s === "or") {
      breakdown = breakdown.concat("or ");
      continue;
    }

    let syllables = s.split(".");

    // Onset
    for (let a of syllables) {
      a = a.replaceAll("]", "");
      a = a.replaceAll("[", "");

      let syllables = a.split(".");

      // Onset
      for (let syllable of syllables) {
        syllable = syllable.replaceAll("·", "");
        syllable = syllable.replaceAll("ˈ", "");
        syllable = syllable.replaceAll("ˌ", "");

        breakdown = breakdown.concat("-");

        let runes = [...syllable];

        const romanize: { [id: string]: string } = {
          ʔ: "'",
          l: "l",
          ɾ: "r",
          h: "h",
          m: "m",
          n: "n",
          ŋ: "ng",
          v: "v",
          w: "w",
          j: "y",
          z: "z",
          b: "b",
          d: "d",
          g: "g",
          ʃ: "sy", // "syawm" only
          ʒ: "ch", // "Jakesully" only (even though we caught it above)
          ṛ: "rr",
          ḷ: "ll",
          a: "a",
          i: "i",
          ɪ: "ì",
          o: "o",
          ɛ: "e",
          u: "u",
          æ: "ä",
          ʊ: "u", // we're doing forest here
          "p'": "px",
          "t'": "tx",
          "k'": "kx",
          p: "p",
          t: "t",
          k: "k",
        };

        // tsy
        if (syllable.startsWith("tʃ")) {
          breakdown = breakdown.concat("ch");
          syllable = syllable.slice("tʃ".length);
        } else if (syllable.length >= 4 && syllable.startsWith("t͡s")) {
          // ts
          breakdown = breakdown.concat("ts");
          syllable = syllable.slice("t͡s".length);

          let unvoiced_plosive = ["p", "t", "k"];
          let clusterable = ["l", "ɾ", "m", "n", "ŋ", "w", "j"];
          runes = [...syllable];
          // tsp
          if (unvoiced_plosive.includes(runes[0])) {
            breakdown = breakdown.concat(romanize[runes[0]]);
            syllable = syllable.slice(runes[0].length);
            if (runes[1] === "'") {
              syllable = syllable.slice("'".length);
              breakdown = breakdown.concat("x");
            }
          } else if (clusterable.includes(runes[0])) {
            breakdown = breakdown.concat(romanize[runes[0]]);
            syllable = syllable.slice(runes[0].length);
          }
        } else if (["f", "s"].includes(runes[0])) {
          breakdown = breakdown.concat(syllable[0]);
          syllable = syllable.slice(syllable[0].length);

          let unvoiced_plosive = ["p", "t", "k"];
          let clusterable = ["l", "ɾ", "m", "n", "ŋ", "w", "j"];
          runes = [...syllable];
          // tsp
          if (unvoiced_plosive.includes(runes[0])) {
            breakdown = breakdown.concat(romanize[runes[0]]);
            syllable = syllable.slice(runes[0].length);
            if (runes[1] === "'") {
              // f/s + ejective onset
              syllable = syllable.slice("'".length);
              breakdown = breakdown.concat("x");
            }
          } else if (clusterable.includes(runes[0])) {
            // f/s + other consonant
            breakdown = breakdown.concat(romanize[runes[0]]);
            syllable = syllable.slice(runes[0].length);
          }
        } else if (["p", "t", "k"].includes(runes[0])) {
          breakdown = breakdown.concat(romanize[runes[0]]);
          syllable = syllable.slice(runes[0].length);
          if (runes[1] === "'") {
            // f/s + ejective onset
            syllable = syllable.slice("'".length);
            breakdown = breakdown.concat("x");
          }
        } else if (
          [
            "ʔ",
            "l",
            "ɾ",
            "h",
            "m",
            "n",
            "ŋ",
            "v",
            "w",
            "j",
            "z",
            "b",
            "d",
            "g",
            "ʃ",
            "ʒ",
            "b",
            "d",
            "g",
          ].includes(runes[0])
        ) {
          // other normal onset
          breakdown = breakdown.concat(romanize[runes[0]]);
          syllable = syllable.slice(runes[0].length);
        }

        // Nucleus
        runes = [...syllable];

        if (runes.length > 1 && ["j", "w"].includes(runes[1])) {
          //diphthong
          breakdown = breakdown.concat(romanize[runes[0]]);
          breakdown = breakdown.concat(romanize[runes[1]]);
          let diphthong = romanize[runes[0]];
          diphthong = diphthong.concat(romanize[runes[1]]);
          syllable = syllable.slice(diphthong.length);
        } else if (syllable.includes("ḷ")) {
          //psuedovowel
          breakdown = breakdown.concat("ll");
          continue; // psuedovowels can't coda
        } else if (syllable.includes("ṛ")) {
          //psuedovowel
          breakdown = breakdown.concat("rr");
          continue; // psuedovowels can't coda
        } else {
          // vowel
          breakdown = breakdown.concat(romanize[runes[0]]);
          syllable = syllable.slice(runes[0].length);
        }

        // Coda
        runes = [...syllable];

        if (syllable.length > 0) {
          if (runes[0] === "s") {
            breakdown = breakdown.concat("sss"); // oìsss only
          } else {
            if (syllable === "k̚") {
              breakdown = breakdown.concat("k");
            } else if (syllable === "p̚") {
              breakdown = breakdown.concat("p");
            } else if (syllable === "t̚") {
              breakdown = breakdown.concat("t");
            } else if (syllable === "ʔ̚") {
              breakdown = breakdown.concat("'");
            } else {
              if (runes[0] === "k" && syllable.length > 1) {
                breakdown = breakdown.concat("kx");
              } else {
                breakdown = breakdown.concat(romanize[syllable]);
              }
            }
          }
        }
      }
    }

    breakdown = breakdown.concat(" ");
  }

  breakdown = breakdown.replaceAll(" -", " ");
  breakdown = breakdown.trim();
  breakdown = breakdown.slice("-".length);
  while (breakdown[0] === "-") {
    breakdown = breakdown.slice("-".length);
  }

  return breakdown;
}
