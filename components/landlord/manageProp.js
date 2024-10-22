import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, Alert, ScrollView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { launchImageLibrary } from 'react-native-image-picker'; // Importing image picker

// Get the screen width
const screenWidth = Dimensions.get('window').width;

// ManagePropertyPage component
const ManagePropertyPage = () => {
    const [photos, setPhotos] = useState([
        'https://drive.google.com/uc?export=view&id=1xF2SBSNDYk1pABW-ETZ4iU--JpqE-aRV',
        'https://drive.google.com/uc?export=view&id=1xJQarAWa-D6urOpeCZK0-IV8AgP06MtT',
        'https://drive.google.com/uc?export=view&id=1wvOkaLvfpkB7ZwLg9OIKgCNi9HDz6waY',
        'https://drive.google.com/uc?export=view&id=1xBApdacB83LYDgxaxVStN6lK89peaFAY',
        'https://drive.google.com/uc?export=view&id=1xCOEhDYWydRG5avYdEnYvDyM4IN-Fwqs'
    ]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    // Function to handle image upload
    const handleImageUpload = () => {
        const options = {
            mediaType: 'photo',
            maxWidth: 300,
            maxHeight: 300,
            quality: 0.8,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                Alert.alert('Cancelled', 'Image selection was cancelled.');
            } else if (response.errorCode) {
                Alert.alert('Error', response.errorMessage);
            } else {
                setPhotos((prevPhotos) => [...prevPhotos, response.assets[0].uri]);
            }
        });
    };

    const openImageModal = (photoUri) => {
        setSelectedPhoto(photoUri);
        setModalVisible(true);
    };

    const closeImageModal = () => {
        setSelectedPhoto(null);
        setModalVisible(false);
    };

    return (
        <ScrollView style={styles.container}>
            {/* Property Management Section */}
            <View style={styles.photoContainer}>
                <Text style={styles.sectionTitle}>Property Management</Text>
                <TouchableOpacity style={styles.editButton} onPress={() => Alert.alert("Edit Property")}>
                    <Icon name="edit" size={20} color="#ffffff" />
                    <Text style={styles.buttonText}>Edit Property</Text>
                </TouchableOpacity>
                <View style={styles.photos}>
                    {photos.length > 0 ? (
                        photos.map((photoUri, index) => (
                            <TouchableOpacity key={index} onPress={() => openImageModal(photoUri)} style={styles.photoWrapper}>
                                <Image source={{ uri: photoUri }} style={styles.photo} />
                            </TouchableOpacity>
                        ))
                    ) : (
                        <Text style={styles.noPhotosText}>No photos uploaded</Text>
                    )}
                </View>
            </View>

            {/* Availability Details Section */}
            <View style={styles.infoContainer}>
                <Text style={styles.sectionTitle}>Property Information</Text>
                <View style={styles.infoItem}>
                    <Icon name="hotel" size={24} color="#0056b3" />
                    <Text style={styles.infoText}>Bedspaces Available: 3</Text>
                </View>
                <View style={styles.infoItem}>
                    <Icon name="single-bed" size={24} color="#0056b3" />
                    <Text style={styles.infoText}>Single Rooms Available: 2</Text>
                </View>
                <View style={styles.infoItem}>
                    <Icon name="group" size={24} color="#0056b3" />
                    <Text style={styles.infoText}>Double Rooms Available: 1</Text>
                </View>
                <View style={styles.infoItem}>
                    <Icon name="place" size={24} color="#0056b3" />
                    <Text style={styles.infoText}>Distance from Campus: 1.2 km</Text>
                </View>
                {/* Additional Information */}
                <View style={styles.infoItem}>
                    <Icon name="wifi" size={24} color="#0056b3" />
                    <Text style={styles.infoText}>Free Wi-Fi Available</Text>
                </View>
                <View style={styles.infoItem}>
                    <Icon name="local-laundry-service" size={24} color="#0056b3" />
                    <Text style={styles.infoText}>Laundry Facilities Available</Text>
                </View>
            </View>

            {/* Image Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={closeImageModal}
            >
                <View style={styles.modalView}>
                    <TouchableOpacity style={styles.closeButton} onPress={closeImageModal}>
                        <Text style={styles.closeText}>×</Text>
                    </TouchableOpacity>
                    <Image source={{ uri: selectedPhoto }} style={styles.modalImage} resizeMode="contain" />
                </View>
            </Modal>
        </ScrollView>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f9f9f9',
    },
    photoContainer: {
        marginTop: 25,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#0056b3',
        marginBottom: 10,
    },
    photos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: 15,
    },
    photoWrapper: {
        width: '48%', // Slightly less than half for spacing
        marginBottom: 10,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 3, // Shadow effect
        backgroundColor: '#ffffff',
    },
    photo: {
        width: '100%',
        height: 100, // Reduced height for more space
        borderRadius: 10,
    },
    noPhotosText: {
        color: '#666',
        textAlign: 'center',
        fontStyle: 'italic',
    },
    infoContainer: {
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 20,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        marginBottom: 20,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        paddingVertical: 5,
    },
    infoText: {
        fontSize: 16,
        marginLeft: 10,
        color: '#333',
    },
    editButton: {
        backgroundColor: '#007bff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        marginBottom: 15,
    },
    buttonText: {
        color: '#ffffff',
        marginLeft: 5,
        fontSize: 14,
        fontWeight: 'bold',
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    modalImage: {
        width: '100%',
        height: '100%',
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 10,
    },
    closeText: {
        fontSize: 24,
        color: '#000',
    },
});

export default ManagePropertyPage;
