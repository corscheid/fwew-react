import de from "@/constants/i18n/de";
import en from "@/constants/i18n/en";
import eo from "@/constants/i18n/eo";
import es from "@/constants/i18n/es";
import et from "@/constants/i18n/et";
import fr from "@/constants/i18n/fr";
import hu from "@/constants/i18n/hu";
import it from "@/constants/i18n/it";
import ko from "@/constants/i18n/ko";
import nl from "@/constants/i18n/nl";
import nx0 from "@/constants/i18n/nx0";
import nx1 from "@/constants/i18n/nx1";
import pl from "@/constants/i18n/pl";
import pt from "@/constants/i18n/pt";
import ru from "@/constants/i18n/ru";
import sv from "@/constants/i18n/sv";
import tr from "@/constants/i18n/tr";
import uk from "@/constants/i18n/uk";
import { Dialect, ExtendedLanguageCode } from "@/types/common";
import type { I18N } from "@/types/i18n";

const i18n: I18N = {
  de,
  en,
  eo,
  es,
  et,
  fr,
  hu,
  it,
  ko,
  nl,
  nx0,
  nx1,
  pl,
  pt,
  ru,
  sv,
  tr,
  uk,
};

export function getUI(languageCode: ExtendedLanguageCode, dialect: Dialect) {
  const uiNavi = dialect === "forest" ? nx0 : nx1;

  if (languageCode === "nx0") {
    return uiNavi;
  }

  if (languageCode in i18n) {
    return i18n[languageCode];
  }

  return i18n.en;
}

export default i18n;
