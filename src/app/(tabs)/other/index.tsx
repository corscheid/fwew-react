import { IndexList } from "@/components/common/IndexList";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import type { LinkType } from "@/types/common";
import type { NamesStrings, ScreenStrings } from "@/types/i18n";
import LenitionScreen from "./lenition";
import AllScreen from "./lists/all";
import CameronScreen from "./lists/cameron";
import HomonymsScreen from "./lists/homonyms";
import MultiIPAScreen from "./lists/multi-ipa";
import OddballsScreen from "./lists/oddballs";
import ProfanityScreen from "./lists/profanity";
import ThatScreen from "./lists/that";
import NameAluScreen from "./names/name-alu";
import NameFullScreen from "./names/name-full";
import NameSingleScreen from "./names/name-single";
import StatsScreen from "./stats";
import ValidScreen from "./valid";

export default function OtherScreen() {
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { screens, names } = getUI(appLanguage, dialect);
  const links = getOtherLinks(screens, names);

  return <IndexList links={links} />;
}

function getOtherLinks(screens: ScreenStrings, names: NamesStrings): LinkType[] {
  return [
    {
      href: "/(tabs)/other/lenition",
      title: screens.lenition,
      Component: LenitionScreen,
    },
    {
      href: "/(tabs)/other/stats",
      title: screens.stats,
      Component: StatsScreen,
    },
    {
      href: "/(tabs)/other/valid",
      title: screens.valid,
      Component: ValidScreen,
    },
    {
      href: "/(tabs)/other/lists",
      title: screens.lists,
      links: [
        {
          href: "/(tabs)/other/lists/all",
          title: screens.allWords,
          Component: AllScreen,
        },
        {
          href: "/(tabs)/other/lists/cameron",
          title: screens.cameronWords,
          Component: CameronScreen,
        },
        {
          href: "/(tabs)/other/lists/homonyms",
          title: screens.homonyms,
          Component: HomonymsScreen,
        },
        {
          href: "/(tabs)/other/lists/multi-ipa",
          title: screens.multiIPA,
          Component: MultiIPAScreen,
        },
        {
          href: "/(tabs)/other/lists/oddballs",
          title: screens.oddballs,
          Component: OddballsScreen,
        },
        {
          href: "/(tabs)/other/lists/profanity",
          title: screens.profanity,
          Component: ProfanityScreen,
        },
        {
          href: "/(tabs)/other/lists/that",
          title: screens.that,
          Component: ThatScreen,
        },
      ],
    },
    {
      href: "/(tabs)/other/names",
      title: screens.names,
      links: [
        {
          href: "/(tabs)/other/names/name-full",
          title: names.full,
          Component: NameFullScreen,
        },
        {
          href: "/(tabs)/other/names/name-single",
          title: names.single,
          Component: NameSingleScreen,
        },
        {
          href: "/(tabs)/other/names/name-alu",
          title: names.alu,
          Component: NameAluScreen,
        },
      ],
    },
  ];
}
