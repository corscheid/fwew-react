import { IndexList } from "@/components/common/IndexList";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import type { LinkType } from "@/types/common";

export default function NamesScreen() {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { names } = getUI(appLanguage, dialect);

  const links: LinkType[] = [
    { href: "/other/names/name-single", title: names.single },
    { href: "/other/names/name-full", title: names.full },
    { href: "/other/names/name-alu", title: names.alu },
  ];

  return <IndexList links={links} />;
}
