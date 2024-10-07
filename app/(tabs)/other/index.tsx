import { IndexGrid } from "@/components/common/IndexGrid";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import type { LinkType } from "@/types/common";

export default function OtherScreen() {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { screens } = getUI(appLanguage, dialect);

  const links: LinkType[] = [
    { href: "/(tabs)/other/names", title: screens.names },
    { href: "/(tabs)/other/lists", title: screens.lists },
    { href: "/(tabs)/other/stats", title: screens.stats },
    { href: "/(tabs)/other/valid", title: screens.valid },
    { href: "/(tabs)/other/lenition", title: screens.lenition },
  ];

  return (<IndexGrid links={links} />);
}
