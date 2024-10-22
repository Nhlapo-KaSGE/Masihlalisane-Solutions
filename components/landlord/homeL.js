import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importing Material Icons
import { useNavigation } from '@react-navigation/native'; // Importing useNavigation

// Get the screen width
const screenWidth = Dimensions.get('window').width;

// LandlordHomePage component
const LandlordHomePage = () => {
  const navigation = useNavigation(); // Initialize useNavigation

  const handleManagePropertyPress = () => {
    navigation.navigate('ManagePropertyPage'); // Navigate to ManagePropertyPage
  };
  const handleLandlordReviewsPagePress = () => {
    navigation.navigate('LandlordReviewsPage'); // Navigate to ReviewsPage
  };
  const handleLandlordChatsPagePress = () => {
    navigation.navigate('LandlordChatsPage'); // Navigate to ReviewsPage
  };

  return (
    <View style={styles.dashboardContainer}>
      {/* Property Info Section */}
      <View style={styles.propertyInfoContainer}>
        <Icon name="home" size={30} color="#0056b3" />
        <View style={styles.propertyTextContainer}>
          <Text style={styles.propertyName}>Beautiful 2-Bedroom Apartment</Text>
          <View style={styles.addressContainer}>
            <Icon name="location-on" size={18} color="#0056b3" />
            <Text style={styles.propertyAddress}>1234 Elm Street, Cape Town</Text>
          </View>
        </View>
      </View>

      {/* Cards Section */}
      <View style={[styles.cardContainer]}>
        <TouchableOpacity style={styles.card} onPress={handleManagePropertyPress}>
          <View style={styles.cardContent}>
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>Manage Property</Text>
              <Text style={styles.cardDescription}>Edit & Manage Property</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="edit" size={40} color="#ffffff" />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={handleLandlordReviewsPagePress}>
          <View style={styles.cardContent}>
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>Reviews</Text>
              <Text style={styles.cardDescription}>View & Manage Reviews</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="rate-review" size={40} color="#ffffff" />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={handleLandlordChatsPagePress}>
          <View style={styles.cardContent}>
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>Chat</Text>
              <Text style={styles.cardDescription}>Chat with Interested Students</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="chat" size={40} color="#ffffff" />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <View style={styles.cardContent}>
            <View style={styles.textContainer}>
              <Text style={styles.cardTitle}>Suggested Tenants</Text>
              <Text style={styles.cardDescription}>View Suggested Tenants</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="people" size={40} color="#ffffff" />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      {/* Exit & Settings buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.smallButton}>
          <Icon name="exit-to-app" size={24} color="#ffffff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.smallButton}>
          <Icon name="settings" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>

      {/* Footer Section */}
      <Text style={styles.footer}>Powered by Masihlalisane Solutions</Text>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  dashboardContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f9f9f9',
  },
  propertyInfoContainer: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 20,
    marginTop: 45,
    paddingTop: 10, // Increased padding to move it down from the top
    borderRadius: 12,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: '100%',
    maxWidth: '100%',
  },
  propertyTextContainer: {
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'center',
  },
  propertyName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0056b3',
    marginBottom: 8,
    textAlign: 'left',
  },
  addressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  propertyAddress: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  cardContainer: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    gap: 5, // Reduced gap to save space
  },
  card: {
    backgroundColor: '#007bff',
    borderRadius: 15,
    padding: 18, // Slightly reduced padding
    width: '90%',
    maxWidth: 400,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18, // Reduced margin to save space
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  textContainer: {
    flex: 3,
    paddingRight: 10,
    alignItems: 'flex-start',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: '#e0e0e0',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 70, // Positioned above the footer
    width: '60%',
    alignItems: 'center',
  },
  smallButton: {
    backgroundColor: '#007bff',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 10, // Ensure footer stays at the bottom without scrolling
    fontSize: 14,
    color: '#007bff',
    textAlign: 'center',
    paddingVertical: 10,
    borderTopWidth: 1, // Top border to separate it from the content above
    borderTopColor: '#e0e0e0', // Light gray color for the top border
  },
});

export default LandlordHomePage;
