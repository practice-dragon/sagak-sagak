import {RootTabParamList} from "@/types/route";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import React from "react";
import type {PropsWithChildren} from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

import {Colors} from "react-native/Libraries/NewAppScreen";

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === "dark";
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function Home(): React.JSX.Element {
  const navigation = useNavigation<NavigationProp<RootTabParamList>>();

  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Pretendard">
            <Text style={styles.highlight}>Home</Text>
          </Section>
          <Section title="Pretendard">
            <Text style={styles.highlight}>폰트가 잘 될까용</Text>
          </Section>
          <Section title="일반 폰트">
            <Text style={styles.highlight}>일반 폰트의 안녕하세요</Text>
          </Section>
        </View>
        <Pressable onPress={() => navigation.navigate("Settings")}>
          <Text>Go to AAAAA</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: "Pretendard-Black",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontFamily: "Pretendard-thin",
  },
});

export default Home;