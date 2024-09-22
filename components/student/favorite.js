import React from 'react'; 
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FavoritePage = () => {
  const favorites = [
    {
      title: 'Accommodation 1 (Parrow)',
      description: 'Beautiful room in a shared house, close to UWC.',
      image: 'https://via.placeholder.com/200',
    },
    {
      title: 'Accommodation 2 (Parrow)',
      description: 'Spacious apartment with all amenities included.',
      image: 'https://via.placeholder.com/200',
    },
  ];

  const handleReviews = (index) => {
    console.log(`View reviews for accommodation ${index + 1}`);
  };

  const handleEnquire = (index) => {
    console.log(`Enquire about accommodation ${index + 1}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      <ScrollView style={styles.scrollContainer}>
        {favorites.map((accommodation, index) => (
          <View key={index} style={styles.card}>
            <Image source={{ uri: accommodation.image }} style={styles.image} />
            <Text style={styles.accommodationTitle}>{accommodation.title}</Text>
            <Text style={styles.accommodationDescription}>{accommodation.description}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => handleReviews(index)}>
                <Icon name="star" size={20} color="#fff" />
                <Text style={styles.buttonText}>Reviews</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => handleEnquire(index)}>
                <Icon name="chatbubble-ellipses" size={20} color="#fff" />
                <Text style={styles.buttonText}>Enquire</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F0F4F8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,  // Increased marginTop to move the title down
    marginBottom: 20,
    color: '#003366',
  },
  scrollContainer: {
    width: '100%',
  },
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    width: '100%',
    alignItems: 'center',
  },
  image: {
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
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#003366',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    marginLeft: 5,
  },
});

export default FavoritePage;
