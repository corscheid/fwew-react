import { IndexGrid } from "@/components/common/IndexGrid";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getBackground } from "@/themes";
import type { LinkType } from "@/types/common";

export default function NamesScreen() {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { names } = getUI(appLanguage, dialect);
  const { themeName } = useThemeNameContext();

  const links: LinkType[] = [
    { href: "/other/names/name-single", title: names.single },
    { href: "/other/names/name-full", title: names.full },
    { href: "/other/names/name-alu", title: names.alu },
  ];

  return getBackground(themeName, <IndexGrid links={links} />, dialect);
}
