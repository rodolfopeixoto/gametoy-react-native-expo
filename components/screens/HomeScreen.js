import React, { useRef, useState } from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import categoryList from "../../fixtures/category";
import Text from "../Text";
import brand from "./../../assets/brand.png";
import games from "./../../fixtures/gameData";
export const HomeScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const gameRef = useRef();

  const changeCategory = (category) => {
    setSelectedCategory(category);
    gameRef.current.scrollToOffset({x: 0, y: 0});
  };

  const GameItem = (game) => {
    return (
      <Game>
        <GameCover source={game.cover} />
        <GameInfo backgroundColor={game.backgroundColor}>
          <GameImage source={game.cover} />
          <GameTitle>
            <Text medium bold>
              {game.title}
            </Text>
            <Text small>{game.teaser}</Text>
          </GameTitle>
        </GameInfo>
      </Game>
    );
  };

  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Header>
        <Text large>
          Hello{" "}
          <Text large bold>
            DevAdv,
          </Text>
          {"\n"}
          <Text large bold>
            Best games for today
          </Text>
        </Text>

        <Avatar source={brand} />
      </Header>

      <Categories horizontal={true}>
        {categoryList.map((category, index) => {
          return (
            <Category key={index} onPress={() => changeCategory(category)}>
              <CategoryName
                selected={selectedCategory === category ? true : false}
              >
                {category}
              </CategoryName>
              {selectedCategory === category && <CategoryDot />}
            </Category>
          );
        })}
      </Categories>

      <Games
        data={games.filter((game) => {
          return (
            game.category.includes(selectedCategory) ||
            selectedCategory === "All"
          );
        })}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => GameItem(item)}
        ref={gameRef}
      />
    </Container>
  );
};

export default HomeScreen;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #343434;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 16px 32px 0 32px;
`;

const Avatar = styled.Image`
  width: 40px;
  height: 40px;
`;

const Categories = styled.ScrollView`
  margin-top: 32px;
  flex-grow: 0;
`;

const Category = styled.TouchableOpacity`
  align-items: center;
  margin: 0 16px;
  height: 32px;
`;

const CategoryName = styled(Text)`
  color: ${(props) => (props.selected ? "#819ee5" : "#9c9c9a")};
  font-weight: ${(props) => (props.selected ? "700" : "500")};
`;

const Games = styled.FlatList`
  margin-top: 12px;
  flex: 1;
`;

const CategoryDot = styled.View`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: #819ee5;
`;

const Game = styled.TouchableOpacity`
  margin-bottom: 32px;
`;
const GameCover = styled.Image`
  width: 100%;
  height: 300px;
`;
const GameInfo = styled.View`
  margin: -50px 16px 0 16px;
  padding: 16px;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
`;

const GameImage = styled.Image`
  width: 56px;
  height: 40px;
  border-radius: 5px;
`;
const GameTitle = styled.View`
  margin: 0 50px;
`;
