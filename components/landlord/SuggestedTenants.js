import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

// Mock data for suggested tenants
const tenantData = [
  { id: '1', name: 'Somila Dumi', age: 20, description: 'Looking for a 2-bedroom apartment.' },
  { id: '2', name: 'Ivan Mtshweni', age: 19, description: 'I want a quiet space close to the city.' },
  { id: '3', name: 'Linathi Nhlapo', age: 22, description: 'I prefer a furnished housing with good amenities.' },
  { id: '4', name: 'Ntsele Dumisani', age: 21, description: 'I would like a pet-friendly accommodation.' },
];

// SuggestedTenants component
const SuggestedTenants = () => {
  const renderTenantItem = ({ item }) => (
    <View style={styles.tenantCard}>
      <Image source={{ uri: item.profilePic }} style={styles.profilePic} />
      <View style={styles.tenantInfo}>
        <Text style={styles.tenantName}>{item.name}, {item.age}</Text>
        <Text style={styles.tenantDescription}>{item.description}</Text>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Suggested Tenants</Text>
      <FlatList
        data={tenantData}
        renderItem={renderTenantItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

// Styles for the SuggestedTenants Page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 20,
  },
  listContent: {
    paddingBottom: 20,
  },
  tenantCard: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  tenantInfo: {
    flex: 1,
  },
  tenantName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  tenantDescription: {
    fontSize: 14,
    color: '#666',
    marginVertical: 5,
  },
  contactButton: {
    alignSelf: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  contactButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default SuggestedTenants;
