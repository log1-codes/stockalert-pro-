import {
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    FlatList,
    View,
    Keyboard,
    Alert,
  } from 'react-native';
  import { useState } from 'react';
  
  const CreateScreen = ({ data, setData }) => {
    const [itemname, setItemname] = useState('');
    const [stockAmount, setStockAmount] = useState('');
  
    const [isEditing, setIsEditing] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
  
    const handleAddItem = () => {
      if (itemname.trim() === '' || stockAmount.trim() === '') {
        Alert.alert('Missing Information', 'Please fill out both fields.');
        return;
      }
      const newDataItem = {
        id: Date.now().toString(),
        name: itemname,
        stock: parseInt(stockAmount, 10) || 0,
      };
      setData(currentData => [...currentData, newDataItem]);
      setItemname('');
      setStockAmount('');
      Keyboard.dismiss();
    };
  
    const handleEdit = (item) => {
      setIsEditing(true);
      setCurrentItem(item);
      setItemname(item.name);
      setStockAmount(item.stock.toString());
    };
  
    const handleUpdateItem = () => {
      if (itemname.trim() === '' || stockAmount.trim() === '') {
        Alert.alert('Missing Information', 'Please fill out both fields.');
        return;
      }
  
      const updatedData = data.map(item =>
        item.id === currentItem.id
          ? { ...item, name: itemname, stock: parseInt(stockAmount, 10) || 0 }
          : item
      );
      setData(updatedData);
  
      setIsEditing(false);
      setCurrentItem(null);
      setItemname('');
      setStockAmount('');
      Keyboard.dismiss();
    };
    
    const handleCancelEdit = () => {
      setIsEditing(false);
      setCurrentItem(null);
      setItemname('');
      setStockAmount('');
      Keyboard.dismiss();
    };
  
    const handleDeleteItem = (id) => {
      Alert.alert(
        "Delete Item",
        "Are you sure you want to delete this item?",
        [
          { text: "Cancel", style: "cancel" },
          { text: "OK", onPress: () => {
            setData(currentData => currentData.filter(item => item.id !== id));
          }}
        ]
      );
    };
  
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter an item name..."
          placeholderTextColor="#999"
          value={itemname}
          onChangeText={setItemname}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter stock amount..."
          placeholderTextColor="#999"
          value={stockAmount}
          onChangeText={setStockAmount}
          keyboardType="numeric"
        />
        
        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={isEditing ? handleUpdateItem : handleAddItem}
        >
          <Text style={styles.buttonText}>
            {isEditing ? 'UPDATE ITEM' : 'ADD ITEM IN STOCK'} 
          </Text>
        </Pressable>
  
        {isEditing && (
          <Pressable
            style={({ pressed }) => [
              styles.button,
              styles.cancelButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={handleCancelEdit}
          >
            <Text style={styles.cancelButtonText}>CANCEL EDIT</Text>
          </Pressable>
        )}
  
        <View style={{ marginTop: 20 }}>
          <Text style={styles.headingText}>All Items in the Stock</Text>
        </View>
  
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.itemContainer,
                { backgroundColor: item.stock < 15 ? '#FFCCCC' : '#D7F6BF' },
              ]}
            >
              <View style={styles.itemInfo}>
                <Text style={styles.itemTextName}>{item.name}</Text>
                <Text style={styles.itemText}>In Stock: {item.stock}</Text>
              </View>
              <View style={styles.actionsContainer}>
                <Pressable onPress={() => handleEdit(item)}>
                  <Text style={styles.actionTextEdit}>Edit</Text>
                </Pressable>
                <Pressable onPress={() => handleDeleteItem(item.id)}>
                  <Text style={styles.actionTextDelete}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
          contentContainerStyle={{ gap: 14, paddingBottom: 20 }}
        />
      </View>
    );
  };
  
  export default CreateScreen;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: '4%',
    },
    input: {
      borderWidth: 2,
      borderColor: 'green',
      paddingHorizontal: 15,
      paddingVertical: 12,
      borderRadius: 7,
      fontSize: 16,
      marginBottom: 10,
    },
    button: {
      backgroundColor: '#CABFEEFF',
      padding: 15,
      borderRadius: 7,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 5,
    },
    buttonPressed: {
      opacity: 0.8,
    },
    buttonText: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 16,
    },
    cancelButton: {
      backgroundColor: '#d3d3d3', 
    },
    cancelButtonText: {
      color: '#333',
      fontWeight: 'bold',
      fontSize: 16,
    },
    headingText: {
      fontWeight: '600',
      fontSize: 18,
      marginBottom: 10,
    },
    itemContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      borderRadius: 7,
    },
    itemInfo: {
      flex: 1,
    },
    itemTextName: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 4,
    },
    itemText: {
      fontWeight: '400',
      fontSize: 14,
    },
    actionsContainer: {
      flexDirection: 'row',
      gap: 20,
      alignItems: 'center',
    },
    actionTextEdit: {
      color: '#007BFF',
      fontWeight: 'bold',
    },
    actionTextDelete: {
      color: '#DC3545',
      fontWeight: 'bold',
    },
  });