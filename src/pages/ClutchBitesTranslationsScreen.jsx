import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import ClutchBitesHeader from '../components/ClutchBitesHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <ClutchBitesHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('Six Nations', '02.07 20:00', 'England \n' + 'Ireland')}
        {renderBroadcast('Rugby Championship', '04.07 18:45', 'New Zealand \n' + 'South Africa')}
        {renderBroadcast('Gallagher', '06.07 19:30', 'Leicester Tigers \n' + 'Harlequins')}
        {renderBroadcast('Super Rugby', '08.07 16:00', 'Crusaders \n' + 'Blues')}
        {renderBroadcast('Top 14', '10.07 17:15', 'Toulouse \n' + 'Racing 92')}
        {renderBroadcast('United Rugby', '12.07 19:45', 'Munster \n' + 'Leinster')}
        {renderBroadcast('Rugby World Cup', '14.07 21:00', 'France \n' + 'Argentina')}
        {renderBroadcast('European Cup', '16.07 18:30', 'Saracens \n' + 'Bordeaux')}
        {renderBroadcast('Pro D2', '18.07 20:00', 'Oyonnax \n' + 'Grenoble')}
        {renderBroadcast('Currie Cup', '20.07 19:00', 'Sharks \n' + 'Stormers')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.white,
    elevation: 20,
    paddingLeft: 20,
    borderRadius: 25,
  },
  league: {
    fontSize: 20,
    fontFamily: FONTS.black,
    color: COLORS.black,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 14,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    width: '60%',
    marginLeft: 15,
  },
  teams: {
    textAlign: 'right',
    fontFamily: FONTS.bold,
    fontSize: 20,
    color: COLORS.main,
    marginTop: 5,
    marginRight: 15,
  },
  title: {
    fontSize: 30,
    fontFamily: FONTS.bold,
    color: COLORS.black,
    margin: 20,
    textAlign: 'center',
  },
});
