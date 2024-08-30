import { ActionButtons } from "@/components/common/ActionButtons";
import { Logo } from "@/components/common/Logo";
import Colors from "@/constants/Colors";
import { getUI } from "@/constants/i18n";
import { useAppLanguageContext } from "@/context/AppLanguageContext";
import { useDialectContext } from "@/context/DialectContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useTheme } from "@react-navigation/native";
import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { View } from "react-native";

type TabBarIconProps = {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
};

function TabBarIcon(props: TabBarIconProps) {
  // https://icons.expo.fyi/
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? "light"];
  const theme = useTheme();
  const { appLanguage } = useAppLanguageContext();
  const { dialect } = useDialectContext();
  const { screens } = getUI(appLanguage, dialect);

  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.primary },
        headerTintColor: Colors.dark.text,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: colors.placeholder,
        headerLeft: () => <Logo />,
        headerRight: () => <ActionButtons />,
        headerBackground: () => (
          <View style={{ height: "100%" }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              //colors={["#55DDFF", "#88FFFF"]}
              colors={[theme.colors.primary, theme.colors.primary]}
              style={{ height: "50%" }}
            />
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              //colors={["#66BBFF", "#55DDFF"]}
              colors={[theme.colors.primary, theme.colors.primary]}
              style={{ height: "50%" }}
            />
          </View>
        ),
        tabBarBackground: () => (
          <View style={{ height: "100%" }}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              //colors={["#00FFFF", "#006699"]}
              colors={[theme.colors.card, theme.colors.card]}
              style={{ height: "50%" }}
            />
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              //colors={["#0044FF", "#00FFFF"]}
              colors={[theme.colors.card, theme.colors.card]}
              style={{ height: "50%" }}
            />
          </View>
        ),
      }}
      
    >
      <Tabs.Screen
        name="index"
        options={{
          title: screens.search,
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: screens.list,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="list-ol" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="random"
        options={{
          title: screens.random,
          tabBarIcon: ({ color }) => <TabBarIcon name="random" color={color} />,
        }}
      />
      <Tabs.Screen
        name="numbers"
        options={{
          title: screens.numbers,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="calculator" color={color} />
          ),
        }}
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
      />
    </Tabs>
  );
}
