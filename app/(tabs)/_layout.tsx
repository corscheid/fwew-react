import { ActionButtons } from "@/components/common/ActionButtons";
import { Logo } from "@/components/common/Logo";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useThemeNameContext } from "@/context/ThemeNameContext";
import { getColorExtension, getThemedComponents, getTopbar, getBottombar } from "@/themes";
import type { FAIconName } from "@/types/icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useTheme } from "@react-navigation/native";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { useActiveWindowContext } from "@/context/ActiveWindowContext";

type TabBarIconProps = {
  name: FAIconName;
  color: string;
};

function TabBarIcon(props: TabBarIconProps) {
  // https://icons.expo.fyi/
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { themeName } = useThemeNameContext();
  const colorExtension = getColorExtension(themeName);
  const colors = colorExtension[colorScheme ?? "light"];
  const theme = useTheme();
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { screens } = getUI(appLanguage, dialect);
  const Themed = getThemedComponents(themeName);
  const { saveActiveWindow } = useActiveWindowContext();

  const Topbar = getTopbar(themeName, dialect)
  const Bottombar = getBottombar(themeName, dialect)

  return (
    <Tabs
      screenOptions={{
        //headerStyle: { backgroundColor: theme.colors.primary },
        headerTintColor: colorExtension.dark.text,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: colors.placeholder,
        headerLeft: () => <Logo />,
        headerRight: () => <ActionButtons />,
        headerBackground: () => Topbar,
        tabBarBackground: () => Bottombar,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: screens.search,
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
        listeners={() => ({
          focus: () => {
            saveActiveWindow("search")
          }
        })}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: screens.list,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="list-ol" color={color} />
          ),
        }}
        listeners={() => ({
          focus: () => {
            saveActiveWindow("list")
          }
        })}
      />
      <Tabs.Screen
        name="random"
        options={{
          title: screens.random,
          tabBarIcon: ({ color }) => <TabBarIcon name="random" color={color} />,
        }}
        listeners={() => ({
          focus: () => {
            saveActiveWindow("random")
          }
        })}
      />
      <Tabs.Screen
        name="numbers"
        options={{
          title: screens.numbers,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="calculator" color={color} />
          ),
        }}
        listeners={() => ({
          focus: () => {
            saveActiveWindow("numbers")
          }
        })}
      />
      <Tabs.Screen
        name="other"
        options={{
          title: screens.other,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ellipsis-h" color={color} />
          ),
          headerShown: false,
        }}
        listeners={() => ({
          focus: () => {
            saveActiveWindow("other")
          }
        })}
      />
    </Tabs>
  );
}
