import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const StudentHomePage = ({ navigation }) => {
  const accommodations = [
    { title: 'Accommodation 1 (Parrow)', description: 'Beautiful room in a shared house, close to UWC.', image: 'https://via.placeholder.com/200' },
    { title: 'Accommodation 2 (Parrow)', description: 'Spacious apartment with all amenities included.', image: 'https://via.placeholder.com/200' },
    { title: 'Accommodation 3 (Parrow)', description: 'Cozy flat close to shops.', image: 'https://via.placeholder.com/200' },
    { title: 'Accommodation 4 (Belhar)', description: 'Modern studio, 10 minutes from campus.', image: 'https://via.placeholder.com/200' },
    { title: 'Accommodation 5 (Belhar)', description: 'Large house with a garden.', image: 'https://via.placeholder.com/200' },
    { title: 'Accommodation 6 (Belhar)', description: 'Newly renovated apartment.', image: 'https://via.placeholder.com/200' },
    { title: 'Accommodation 7 (Belhar)', description: 'Quiet room in a family home.', image: 'https://via.placeholder.com/200' },
    { title: 'Accommodation 8 (Bellville South)', description: 'Shared house with friendly roommates.', image: 'https://via.placeholder.com/200' },
    { title: 'Accommodation 9 (Bellville South)', description: 'Safe and comfortable living space.', image: 'https://via.placeholder.com/200' },
    { title: 'Accommodation 10 (Kuilsriver)', description: 'Spacious bedroom with balcony.', image: 'https://via.placeholder.com/200' },
  ];

  const [favoriteStates, setFavoriteStates] = useState(Array(accommodations.length).fill(false));
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [filteredAccommodations, setFilteredAccommodations] = useState(accommodations);

  const toggleFavorite = (index) => {
    const updatedFavorites = [...favoriteStates];
    updatedFavorites[index] = !updatedFavorites[index];
    setFavoriteStates(updatedFavorites);
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = accommodations.filter(accommodation =>
      accommodation.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredAccommodations(filtered);
  };

  return (
    <View style={styles.scrollContainer}>
      <View style={styles.fixedNav}>
        <View style={styles.quickNav}>
          {['Search', 'Favorites', 'Messages', 'Profile'].map((navItem, index) => (
            <TouchableOpacity
              key={index}
              style={styles.navButton}
              onPress={() => {
                if (navItem === 'Search') {
                  setIsSearchVisible(!isSearchVisible);
                } else if (navItem === 'Favorites') {
                  navigation.navigate('favoritePage');
                } else {
                  alert(navItem);
                }
              }}
            >
              <Ionicons
                name={navItem === 'Search' ? 'search' : navItem === 'Favorites' ? 'heart' : navItem === 'Messages' ? 'chatbubbles' : 'person'}
                size={24}
                color="#FFF"
              />
              <Text style={styles.navText}>{navItem}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {isSearchVisible && (
          <TextInput
            style={styles.searchInput}
            placeholder="Search by area"
            value={searchQuery}
            onChangeText={handleSearch} // Call handleSearch directly on text change
          />
        )}
      </View>

      <ScrollView style={[styles.container, isSearchVisible && styles.searchVisibleContainer]}>
        <Text style={styles.sectionTitle}>Available Accommodations</Text>
        <View style={styles.accommodationList}>
          {filteredAccommodations.map((item, index) => (
            <View key={index} style={styles.accommodationCard}>
              <Image source={{ uri: item.image }} style={styles.accommodationImage} />
              <Text style={styles.accommodationTitle}>{item.title}</Text>
              <Text style={styles.accommodationDescription}>{item.description}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => toggleFavorite(index)}>
                  <Ionicons name="heart" size={16} color={favoriteStates[index] ? 'red' : '#FFF'} />
                  <Text style={styles.buttonText}>Favorites</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChatPage')}>
                  <Ionicons name="chatbubbles" size={16} color="#FFF" />
                  <Text style={styles.buttonText}>Message</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ReviewsPage')}>
                  <Ionicons name="star" size={16} color="#FFF" />
                  <Text style={styles.buttonText}>Review</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  fixedNav: {
    backgroundColor: '#00509E',
    paddingVertical: 10,
    paddingTop: 50,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 1000,
  },
  quickNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  navButton: {
    alignItems: 'center',
  },
  navText: {
    color: '#FFF',
    fontSize: 12,
  },
  searchInput: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  container: {
    marginTop: 120,
    padding: 20,
  },
  searchVisibleContainer: {
    marginTop: 180,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 10,
    textAlign: 'center',
    width: '100%',
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderColor: '#00509E',
  },
  accommodationList: {
    width: '100%',
  },
  accommodationCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    width: '100%',
  },
  accommodationImage: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
  },
  accommodationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 5,
  },
  accommodationDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#00509E',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    width: '30%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 12,
    marginLeft: 5,
  },
});

export default StudentHomePage;
