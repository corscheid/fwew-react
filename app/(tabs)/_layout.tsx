import { ActionButtons } from "@/components/common/ActionButtons";
import { Logo } from "@/components/common/Logo";
import Colors from "@/constants/Colors";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import { useActiveWindowContext } from "@/context/ActiveWindowContext";
//import { useAuxthemeContext } from "@/context/AuxthemeContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useTheme } from "@react-navigation/native";
import { Tabs } from "expo-router";
import { Platform, useColorScheme, View, StyleSheet } from "react-native";
import { getTheme } from "@/hooks/useAuxtheme";
import { ActiveWindow } from "@/types/common";

type TabBarIconProps = {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
};

function TabBarIcon(props: TabBarIconProps) {
  // https://icons.expo.fyi/
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

type RouteToWindow = {
  [id: string]: ActiveWindow
}

type RouteToWindow = {
  [id: string]: ActiveWindow
}

export default function TabLayout() {
  const auxtheme = getTheme()
  const colorScheme = useColorScheme();
  const theme = useTheme();
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { screens } = getUI(appLanguage, dialect);
  const { saveActiveWindow } = useActiveWindowContext();
  const routeConv: RouteToWindow = {};
  routeConv['index'] = 'search'
  routeConv['list'] = 'list'
  routeConv['random'] = 'random'
  routeConv['numbers'] = 'number'
  routeConv['other'] = 'other'
  const { activeWindow, saveActiveWindow } = useActiveWindowContext();
  const routeConv: RouteToWindow = {};
  routeConv['index'] = 'search'
  routeConv['list'] = 'list'
  routeConv['random'] = 'random'
  routeConv['numbers'] = 'number'
  routeConv['other'] = 'other'

  const frutiger = dialect === "reef" ? [["#44BBBB", "#227A92"],["#006A6A", "#44BBBB"]] : [["#2288FF", "#2244FF"],["#004499", "#2288FF"]]
  const plainHeader = [theme.colors.primary,theme.colors.primary]
  const plainFooter = [theme.colors.card,theme.colors.card]

  const inactiveTint = colorScheme === "light" ? auxtheme.bottomButtonColor : auxtheme.bottomButtonColorDark

  return (
    <View>
      <Tabs
        screenOptions={{
          headerTintColor: Colors.dark.text,
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: inactiveTint,
          headerLeft: () => <Logo />,
          headerRight: () => (
            <ActionButtons />
          ),
          headerBackground: () => (auxtheme.Topbar()),
          tabBarBackground: () => (auxtheme.Bottombar(auxtheme.highlight())),
        }}
        screenListeners={({route}) => ({
        tabPress: () => {
          saveActiveWindow(routeConv[route.name])
        }
      })}
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
              saveActiveWindow("number")
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
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginLeft: 0,
    marginRight: Platform.OS === "web" ? 0 : 16,
  },
  actionButton: {
    marginRight: Platform.OS === "web" ? 0 : -16,
  },
});
