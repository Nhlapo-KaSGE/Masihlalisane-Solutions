import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Importing Ionicons for icons
import Carousel from 'react-native-snap-carousel';

const { width: screenWidth } = Dimensions.get('window');

const accommodations = [
  {
    title: 'Accommodation 1',
    description: 'Beautiful room in a shared house, close to UWC.',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Accommodation 2',
    description: 'Spacious apartment with all amenities included.',
    image: 'https://via.placeholder.com/300',
  },
  {
    title: 'Accommodation 3',
    description: 'Modern studio, 10 minutes from campus.',
    image: 'https://via.placeholder.com/300',
  },
];

const StudentHomePage = ({ route }) => {
  const { username = 'Welcome!' } = route.params || {}; // Fallback for username

  const renderAccommodationItem = ({ item }) => (
    <View style={styles.accommodationCard}>
      <Image source={{ uri: item.image }} style={styles.accommodationImage} />
      <Text style={styles.accommodationTitle}>{item.title}</Text>
      <Text style={styles.accommodationDescription}>{item.description}</Text>
    </View>
  );

  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Styled Name Container */}
        <View style={styles.nameContainer}>
          <Text style={styles.title}>{username}</Text>
        </View>

        {/* Icon Navigation Bar */}
        <View style={styles.quickNav}>
          <TouchableOpacity style={styles.navButton} onPress={() => alert('Search Accommodations')}>
            <Ionicons name="search" size={30} color="#FFF" />
            <Text style={styles.navText}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => alert('Favorites')}>
            <Ionicons name="heart" size={30} color="#FFF" />
            <Text style={styles.navText}>Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => alert('Messages')}>
            <Ionicons name="chatbubbles" size={30} color="#FFF" />
            <Text style={styles.navText}>Messages</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navButton} onPress={() => alert('Profile')}>
            <Ionicons name="person" size={30} color="#FFF" />
            <Text style={styles.navText}>Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Styled Accommodation Listings */}
        <Text style={styles.sectionTitle}>Recommended Accommodations</Text>
        <Carousel
          data={accommodations}
          renderItem={renderAccommodationItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth * 0.8} // Adjust as needed
          layout="default"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  nameContainer: {
    backgroundColor: '#00509E',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  quickNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '100%',
  },
  navButton: {
    backgroundColor: '#00509E',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  navText: {
    color: '#FFF',
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  accommodationCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
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
    height: 200, // Increased image size
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
  },
});

export default StudentHomePage;
