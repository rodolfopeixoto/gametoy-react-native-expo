import React from "react";
import { StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";
import Text from "../Text";

export default function GameScreen({ route, navigation }) {
  const { game } = route.params;

  const renderStars = () => {
    let stars = [];

    for (let star = 1; star <= 5; star++) {
      stars.push(
        <Ionicons
          key={star}
          name="ios-star"
          size={16}
          style={{ marginRight: 5 }}
          color={Math.floor(game.rating) >= star ? "#819ee5" : "#434958"}
        />
      );
    }

    return <Stars>{stars}</Stars>;
  };

  return (
    <GameContainer>
      <StatusBar barStyle="light-content" />
      <GameArtContainer>
        <GameArt source={game.cover} />
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="ios-close" size={30} color="#fff" />
        </BackButton>
      </GameArtContainer>

      <GameInfoContainer>
        <GameThumbContainer>
          <GameThumb source={game.cover} />
        </GameThumbContainer>

        <GameInfo>
          <Text heavy small>
            {game.title}
          </Text>
          <Text color="#9a9a9a">{game.teaser}</Text>
        </GameInfo>

        <Download>
          <Ionicons name="md-cloud-download" size={24} color="#fff" />
        </Download>
      </GameInfoContainer>

      <GameStatsContainer>
        {renderStars()}
        <Text heavy color="#9a9a9a">
          {game.rating}
        </Text>
        <Text bold color="#9a9a9a">
          {game.category[0]}
        </Text>
        <Text bold color="#9a9a9a">
          {game.age}
        </Text>
        <Text bold color="#9a9a9a">
          Game of the day
        </Text>
      </GameStatsContainer>

      <ScreenShotsContainer>
        <ScreenShots horizontal={true} showHorizontalScrollIndicator={false}>
          {game.screenshots.map((screenshot, index) => {
            return (
              <ScreenShotContainer key={index}>
                <ScreenShot source={screenshot} />
              </ScreenShotContainer>
            );
          })}
        </ScreenShots>
      </ScreenShotsContainer>

      <Description small color="#9a9a9a">{game.description}</Description>
    </GameContainer>
  );
}

export const GameContainer = styled.View`
  background-color: #545454;
  flex: 1;
`;
export const GameArtContainer = styled.View`
  position: relative;
`;
export const GameArt = styled.Image`
  width: 100%;
  height: 200px;
  border-bottom-right-radius: 32px;
  border-bottom-left-radius: 32px;
`;
export const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 10px;
  left: 16px;
`;
export const GameInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
  margin: 8px 16px;
`;
export const GameThumbContainer = styled.View`
  shadow-color: #000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.5;
  shadow-radius: 2px;
`;
export const GameThumb = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 16px;
`;
export const GameInfo = styled.View`
  width: 0;
  flex-grow: 1;
  margin: 0 8px 0 16px;
`;
export const Download = styled.View`
  background-color: #819ee5;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

export const GameStatsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 0 16px;
`;

export const Stars = styled.View`
  flex-direction: row;
`;

export const ScreenShotsContainer = styled.View`
  margin: 8px 0;
`;
export const ScreenShots = styled.ScrollView``;
export const ScreenShotContainer = styled.View`
  padding: 16px;
  shadow-color: #000;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.5;
  shadow-radius: 5px;
`;
export const ScreenShot = styled.Image`
  height: 200px;
  width: 300px;
  border-radius: 12px;
`;

export const Description = styled(Text)`
  margin: 0 16px;
  line-height: 22px;
`;
