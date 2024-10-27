import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MSL = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hello! How can I help you?', sender: 'other' },
    { id: '2', text: 'Hello Mr Kearns', sender: 'user' },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  // Separate the first message from other messages
  const receiverFirstMessage = messages.find((message) => message.sender === 'other');
  const otherMessages = messages.filter((message) => message !== receiverFirstMessage);

  // Function to handle sending a message
  const handleSend = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: Date.now().toString(),
        text: inputMessage,
        sender: 'user',
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
    }
  };

  // Render each message
  const renderMessageItem = ({ item }) => (
    <View style={[styles.messageContainer, item.sender === 'user' ? styles.userMessage : styles.otherMessage]}>
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>Abraham Kearns</Text>
      </View>

      {/* Display receiver's first message */}
      {receiverFirstMessage && (
        <View style={[styles.messageContainer, styles.otherMessage]}>
          <Text style={styles.messageText}>{receiverFirstMessage.text}</Text>
        </View>
      )}

      {/* Display other messages */}
      <FlatList
        data={otherMessages}
        renderItem={renderMessageItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chatList}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Type your message..."
          value={inputMessage}
          onChangeText={setInputMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Icon name="send" size={24} color='#00509E' />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

// Styles for the MSL Chat Page
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  banner: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#00509E', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  chatList: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  messageContainer: {
    maxWidth: '75%',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#00509E',
  },
  otherMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#00509E',
  },
  messageText: {
    fontSize: 16,
    color: '#fff',
    
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  textInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  sendButton: {
    marginLeft: 10,
  },
});

export default MSL;
