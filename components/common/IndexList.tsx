import { ScreenLinkCard } from "@/components/common/ScreenLinkCard";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getColorExtension, getThemedComponents } from "@/themes";
import type { LinkType } from "@/types/common";
import { useTheme } from "@react-navigation/native";
import { Fragment, useState } from "react";
import {
  Pressable,
  ScrollView,
  useWindowDimensions,
  View
} from "react-native";
import { WideLayout } from "./WideLayout";

export function IndexList({ links }: { links: LinkType[] }) {
  const [Current, setCurrent] = useState<LinkType>(links[0]);
  const theme = useTheme();
  const { width } = useWindowDimensions();
  const wide = width > 720;
  const { themeName } = useThemeNameContext();
  const colorExtension = getColorExtension(themeName);
  const Themed = getThemedComponents(themeName);
  const ratio =
    [
      { breakpoint: 1280, value: 6 },
      { breakpoint: 950, value: 4 },
      { breakpoint: 720, value: 3 },
    ].filter((b) => width >= b.breakpoint)[0]?.value ?? 3;

  if (wide) {
    return (
      <WideLayout
        flexRatio={ratio}
        containerStyle={{ gap: 0, padding: 0 }}
        sidebarStyle={{ paddingBottom: 0 }}
        mainStyle={{ padding: 16 }}
        sidebar={
          <Themed.CardView style={{ padding: 16, borderRadius: 0 }}>
            {links.map((link, i) => (
              <Fragment key={`oig_sb_${i}_${link.title}`}>
                {link.Component ? (
                  <Pressable
                    style={{
                      backgroundColor:
                        Current?.href === link.href
                          ? theme.colors.primary
                          : undefined,
                      borderRadius: 8,
                    }}
                    onPress={() => setCurrent(link)}
                  >
                    {({ pressed }) => (
                      <View style={{ opacity: pressed ? 0.5 : 1 }}>
                        <Themed.Text
                          style={{
                            padding: 16,
                            color:
                              Current?.href === link.href
                                ? colorExtension.dark.text
                                : theme.colors.text,
                          }}
                        >
                          {link.title}
                        </Themed.Text>
                      </View>
                    )}
                  </Pressable>
                ) : (
                  <Themed.BoldText
                    style={{ fontSize: 18, paddingVertical: 16 }}
                  >
                    {link.title}
                  </Themed.BoldText>
                )}
                {link.links?.map((link, j) => (
                  <Pressable
                    style={{
                      backgroundColor:
                        Current?.href === link.href
                          ? theme.colors.primary
                          : undefined,
                      borderRadius: 8,
                    }}
                    key={`oig_sb_${i}_${j}_${link.title}`}
                    onPress={() => setCurrent(link)}
                  >
                    {({ pressed }) => (
                      <View style={{ opacity: pressed ? 0.5 : 1 }}>
                        <Themed.Text
                          style={{
                            padding: 16,
                            color:
                              Current?.href === link.href
                                ? colorExtension.dark.text
                                : theme.colors.text,
                          }}
                        >
                          {link.title}
                        </Themed.Text>
                      </View>
                    )}
                  </Pressable>
                ))}
              </Fragment>
            ))}
          </Themed.CardView>
        }
        header={
          <View
            style={{
              borderRadius: 0,
              backgroundColor: theme.colors.card,
            }}
          >
            <Themed.BoldText
              style={{ fontSize: 20, alignSelf: "center", padding: 16 }}
            >
              {Current?.title}
            </Themed.BoldText>
          </View>
        }
        main={Current?.Component && <Current.Component />}
      />
    );
  }

  return (
    <ScrollView>
      <View style={{ gap: 16, padding: 16 }}>
        {links.map((link) => (
          <ScreenLinkCard key={`oi_${link.title}`} {...link} />
        ))}
      </View>
    </ScrollView>
  );
}
