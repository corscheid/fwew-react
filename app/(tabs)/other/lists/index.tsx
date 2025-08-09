import { IndexList } from "@/components/common/IndexList";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import type { LinkType } from "@/types/common";

export default function ListsScreen() {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { screens } = getUI(appLanguage, dialect);

  const links: LinkType[] = [
    { href: "/other/lists/all", title: screens.allWords },
    { href: "/other/lists/cameron", title: screens.cameronWords },
    { href: "/other/lists/homonyms", title: screens.homonyms },
    { href: "/other/lists/multi-ipa", title: screens.multiIPA },
    { href: "/other/lists/oddballs", title: screens.oddballs },
    { href: "/other/lists/profanity", title: screens.profanity },
    { href: "/other/lists/that", title: screens.that },
  ];

  return <IndexList links={links} />;
}
