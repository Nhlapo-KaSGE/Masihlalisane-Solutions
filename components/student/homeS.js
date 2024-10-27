import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const homeS = ({ navigation }) => {
  const accommodations = [
    {
      title: 'Accommodation 1 (Parrow)',
      description: 'Beautiful room in a shared house, close to UWC.',
      images: [
        'https://drive.google.com/file/d/1yLH_riWYi8HvK9jDgxaHc4Mre3v2jpur/view?usp=drive_link',
        'https://drive.google.com/file/d/1UwsQGUDtqdruDS8F4aoiMTXd9oaLwdgy/view?usp=drive_link',
        'https://drive.google.com/file/d/1_wwBimdD8e-LGPdx3vqc46188dCBmd-h/view?usp=drive_link'
      ]
    },
    {
      title: 'Accommodation 2 (Parrow)',
      description: 'Spacious apartment with all amenities included.',
      images: [
        'https://drive.google.com/file/d/17xeW5BAtpOvzvQldOzWhY92t34COiSwR/view?usp=drive_link',
        'https://drive.google.com/file/d/1mcXzCNnDfAxCHBrMPmGLN766PWBOSSxQ/view?usp=drive_link',
        'https://drive.google.com/file/d/1-C8LKPZquAr6c_11yji3otXelUYfEtsR/view?usp=drive_link',
        'https://drive.google.com/file/d/1J5UQoi4LMbofeBZC2WGQYK01uwZ49IuY/view?usp=drive_link',
        'https://drive.google.com/file/d/1T_tD_-yoo5AcV5v_Me_tXXNL3MP3nisL/view?usp=drive_link'
      ]
    },
    {
      title: 'Accommodation 3 (Parrow)',
      description: 'Cozy flat close to shops.',
      images: [
        'https://drive.google.com/file/d/1Fsk0LKYRM5Qnk_lWLo2-dnXS8TXMlB6F/view?usp=drive_link',
        'https://drive.google.com/file/d/1oIhIll30r5yxWNus8-ODSGiCJWf7UiaL/view?usp=drive_link',
        'https://drive.google.com/file/d/18xvu-yNT2myn9GUyImi77UsjyyUuXatO/view?usp=drive_link',
        'https://drive.google.com/file/d/1bihX-v9fvPm4Bu1CW-CfAKpADwtkqssM/view?usp=drive_link'
      ]
    },
    {
      title: 'Accommodation 4 (Belhar)',
      description: 'Modern studio, 10 minutes from campus.',
      images: [
        'https://drive.google.com/file/d/1209UxUqGIjMvrzXgJSegFXakrJvoom5Z/view?usp=drive_link',
        'https://drive.google.com/file/d/12cJUoJ0rdXSOgYQvVeeX2XNPkh2o3PEI/view?usp=drive_link',
        'https://drive.google.com/file/d/1r2IWtaNeU_kEmhrNkYkAosgW54TMY6ao/view?usp=drive_link',
        'https://drive.google.com/file/d/1nwHKxHhV5UVILxjCDKEmBfpsM--2C6OL/view?usp=drive_link',
        'https://drive.google.com/file/d/1GXbeX94QL_YITDonZod_PRtEPYDOKQOc/view?usp=drive_link'
      ]
    },
    {
      title: 'Accommodation 5 (Belhar)',
      description: 'Large house with a garden.',
      images: [
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200'
      ]
    },
    {
      title: 'Accommodation 6 (Belhar)',
      description: 'Newly renovated apartment.',
      images: [
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200'
      ]
    },
    {
      title: 'Accommodation 7 (Belhar)',
      description: 'Quiet room in a family home.',
      images: [
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200'
      ]
    },
    {
      title: 'Accommodation 8 (Bellville South)',
      description: 'Shared house with friendly roommates.',
      images: [
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200'
      ]
    },
    {
      title: 'Accommodation 9 (Bellville South)',
      description: 'Safe and comfortable living space.',
      images: [
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200'
      ]
    },
    {
      title: 'Accommodation 10 (Kuilsriver)',
      description: 'Spacious bedroom with balcony.',
      images: [
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200',
        'https://via.placeholder.com/200'
      ]
    }
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

  const handleProfileButtonPress = () => {
    navigation.navigate('Pros');
  };

  const handleFavouritesPagePress = () => {
    navigation.navigate('FavoritePage');
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    const filtered = accommodations.filter((accommodation) =>
      accommodation.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredAccommodations(filtered);
  };

  const handleStudentsChatsPagePress = () => {
    navigation.navigate('Chat'); // Navigate to ChatPage
  };

  const handleStudentChatPress = () => {
    navigation.navigate('MSL'); // Navigate to MSL
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
                  handleFavouritesPagePress();
                } else if (navItem === 'Messages') {
                  handleStudentsChatsPagePress();
                } else if (navItem === 'Profile') {
                  handleProfileButtonPress();
                } else {
                  alert(navItem);
                }
              }}
            >
              <Ionicons
                name={
                  navItem === 'Search'
                    ? 'search'
                    : navItem === 'Favorites'
                    ? 'heart'
                    : navItem === 'Messages'
                    ? 'chatbubbles'
                    : 'person'
                }
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
            onChangeText={handleSearch}
          />
        )}
      </View>

      <ScrollView style={[styles.container, isSearchVisible && styles.searchVisibleContainer]}>
        <Text style={styles.sectionTitle}>Available Accommodations</Text>
        <View style={styles.accommodationList}>
          {filteredAccommodations.map((item, index) => (
            <View key={index} style={styles.accommodationCard}>
              {/* Image Carousel */}
              <ScrollView
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                style={styles.carousel}
              >
                {item.images.map((imageUri, imgIndex) => (
                  <Image key={imgIndex} source={{ uri: imageUri }} style={styles.accommodationImage} />
                ))}
              </ScrollView>

              <Text style={styles.accommodationTitle}>{item.title}</Text>
              <Text style={styles.accommodationDescription}>{item.description}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => toggleFavorite(index)}>
                  <Ionicons name="heart" size={16} color={favoriteStates[index] ? 'red' : '#FFF'} />
                  <Text style={styles.buttonText}>Favorites</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleStudentChatPress}>
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
  carousel: {
    marginBottom: 10,
  },
  accommodationImage: {
    width: Dimensions.get('window').width - 40,
    height: 180,
    borderRadius: 10,
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

export default homeS;
