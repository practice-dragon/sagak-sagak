import React, {useState, useEffect} from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  TextInput,
  Text,
} from "react-native";
import styled from "styled-components/native";
import PlusIcon from "@/assets/icons/PlusIcon";
import {CategoryType} from "@/types/Profile";
import {useAuth} from "@/context/AuthContext";
import {fetchCategories, addCategory} from "@/lib/supabaseAPI";
import Category from "@/components/Task/Category";
import Calendar from "@/components/Task/Calendar";
import CustomBottomSheet from "@/components/common/BottomSheet";
import Button from "@/components/common/Button";

function Home() {
  const [viewType, setViewType] = useState<"week" | "month">("week");
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const {userProfile} = useAuth();
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");

  useEffect(() => {
    fetchCategoriesData();
  }, []);

  const fetchCategoriesData = async () => {
    if (userProfile) {
      const data = await fetchCategories(userProfile.id.toString());
      setCategories(data);
    }
  };

  const handleAddCategory = async () => {
    if (userProfile && newCategoryName.trim() !== "") {
      const success = await addCategory(
        newCategoryName.trim(),
        userProfile,
        selectedDate,
      );
      if (success) {
        setNewCategoryName("");
        setBottomSheetVisible(false);
        fetchCategoriesData();
      }
    }
  };

  return (
    <SafeAreaView>
      <Container>
        <Calendar
          viewType={viewType}
          setViewType={setViewType}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
        <AddCategoryButton onPress={() => setBottomSheetVisible(true)}>
          <AddCategoryButtonText>카테고리 만들기</AddCategoryButtonText>
          <PlusIcon width={16} height={16} />
        </AddCategoryButton>
        {categories?.map(category => (
          <Category
            selectedDate={selectedDate}
            key={category.id}
            id={category.id}
            text={category.name}
            todos={category.todos}
            user_id={userProfile?.id ?? ""}
          />
        ))}
        <CustomBottomSheet
          visible={bottomSheetVisible}
          onClose={() => setBottomSheetVisible(false)}>
          <BottomSheetBox>
            <BottomSheetTitle>카테고리 만들기</BottomSheetTitle>
            <BottomSheetTextInput
              placeholder="새 카테고리의 이름은?"
              onChangeText={text => setNewCategoryName(text)}
              value={newCategoryName}
            />
          </BottomSheetBox>
          <Button onPress={handleAddCategory} size="lg" text="만들기" />
        </CustomBottomSheet>

        <View style={{height: 100}} />
      </Container>
    </SafeAreaView>
  );
}

export default Home;

const Container = styled.ScrollView`
  background-color: ${({theme}) => theme.colors.background};
  height: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  padding-bottom: 70px;
`;

const AddCategoryButton = styled(TouchableOpacity)`
  background-color: ${({theme}) => theme.colors.card};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  padding: 12px 16px;
`;

const AddCategoryButtonText = styled.Text`
  flex: 1;
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.fonts.p2.fontSize}px;
  font-family: ${({theme}) => theme.fonts.p2.fontFamily};
`;

const BottomSheetBox = styled.View`
  width: 90%;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const BottomSheetTitle = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.fonts.h1.fontSize}px;
  font-family: ${({theme}) => theme.fonts.h1.fontFamily};
`;

const BottomSheetTextInput = styled.TextInput`
  align-self: flex-start;
  background-color: ${({theme}) => theme.colors.card};
  width: 100%;
  border-radius: 10px;
  font-size: ${({theme}) => theme.fonts.p2.fontSize}px;
  font-family: ${({theme}) => theme.fonts.p2.fontFamily};
  color: ${({theme}) => theme.colors.text};
`;
