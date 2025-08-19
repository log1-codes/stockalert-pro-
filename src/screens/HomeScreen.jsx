import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import AllItems from './AllItems';
import CreateScreen from './CreateScreen';
import { useState } from 'react';
const data = [
    {id: 1, name: "Wheat", stock: 5, unit: "kg"},
    {id: 2, name: "Rice Basmati", stock: 12, unit: "kg"},
    {id: 3, name: "Sugar", stock: 8, unit: "kg"},
    {id: 4, name: "Salt", stock: 15, unit: "kg"},
    {id: 5, name: "Cooking Oil", stock: 3, unit: "liters"},
    {id: 6, name: "Onions", stock: 25, unit: "kg"},
    {id: 7, name: "Potatoes", stock: 18, unit: "kg"},
    {id: 8, name: "Tomatoes", stock: 7, unit: "kg"},
    {id: 9, name: "Milk Packets", stock: 20, unit: "pieces"},
    {id: 10, name: "Bread Loaves", stock: 6, unit: "pieces"},
    {id: 11, name: "Eggs", stock: 4, unit: "dozen"},
    {id: 12, name: "Chicken", stock: 9, unit: "kg"},
    {id: 13, name: "Fish", stock: 2, unit: "kg"},
    {id: 14, name: "Tea Leaves", stock: 11, unit: "kg"},
    {id: 15, name: "Coffee Powder", stock: 3, unit: "kg"},
    {id: 16, name: "Biscuits Pack", stock: 14, unit: "pieces"},
    {id: 17, name: "Soap Bars", stock: 22, unit: "pieces"},
    {id: 18, name: "Shampoo Bottles", stock: 8, unit: "pieces"},
    {id: 19, name: "Toothpaste", stock: 12, unit: "pieces"},
    {id: 20, name: "Detergent Powder", stock: 5, unit: "kg"},
    {id: 21, name: "Lentils (Dal)", stock: 16, unit: "kg"},
    {id: 22, name: "Chickpeas", stock: 10, unit: "kg"},
    {id: 23, name: "Coconut Oil", stock: 4, unit: "liters"},
    {id: 24, name: "Garlic", stock: 7, unit: "kg"},
    {id: 25, name: "Ginger", stock: 3, unit: "kg"}
];
const HomeScreen = () => {
  const [view, setView] = useState(0);
  const [data, setData]= useState([
    {id: 1, name: "Wheat", stock: 5, unit: "kg"},
    {id: 2, name: "Rice Basmati", stock: 12, unit: "kg"},
    {id: 3, name: "Sugar", stock: 8, unit: "kg"},
    {id: 4, name: "Salt", stock: 15, unit: "kg"},
    {id: 5, name: "Cooking Oil", stock: 3, unit: "liters"},
    {id: 6, name: "Onions", stock: 25, unit: "kg"},
    {id: 7, name: "Potatoes", stock: 18, unit: "kg"},
    {id: 8, name: "Tomatoes", stock: 7, unit: "kg"},
    {id: 9, name: "Milk Packets", stock: 20, unit: "pieces"},
    {id: 10, name: "Bread Loaves", stock: 6, unit: "pieces"},
    {id: 11, name: "Eggs", stock: 4, unit: "dozen"},
    {id: 12, name: "Chicken", stock: 9, unit: "kg"},
    {id: 13, name: "Fish", stock: 2, unit: "kg"},
    {id: 14, name: "Tea Leaves", stock: 11, unit: "kg"},
    {id: 15, name: "Coffee Powder", stock: 3, unit: "kg"},
    {id: 16, name: "Biscuits Pack", stock: 14, unit: "pieces"},
    {id: 17, name: "Soap Bars", stock: 22, unit: "pieces"},
    {id: 18, name: "Shampoo Bottles", stock: 8, unit: "pieces"},
    {id: 19, name: "Toothpaste", stock: 12, unit: "pieces"},
    {id: 20, name: "Detergent Powder", stock: 5, unit: "kg"},
    {id: 21, name: "Lentils (Dal)", stock: 16, unit: "kg"},
    {id: 22, name: "Chickpeas", stock: 10, unit: "kg"},
    {id: 23, name: "Coconut Oil", stock: 4, unit: "liters"},
    {id: 24, name: "Garlic", stock: 7, unit: "kg"},
    {id: 25, name: "Ginger", stock: 3, unit: "kg"}
])


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.button,
            view === 0 ? { backgroundColor: 'green' } : null,
          ]}
          onPress={() => setView(0)}
        >
          <Text
            style={[styles.buttonText, view === 0 ? { color: 'white' } : null]}
          >
            All Items
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setView(1)}
          style={[
            styles.button,
            view === 1 ? { backgroundColor: 'green' } : null,
          ]}
        >
          <Text
            style={[styles.buttonText, view === 1 ? { color: 'white' } : null]}
          >
            Low Stock
          </Text>
        </Pressable>
        <Pressable
          style={[
            styles.button,
            view === 2 ? { backgroundColor: 'green' } : null,
          ]}
          onPress={() => setView(2)}
        >
          <Text
            style={[
              styles.buttonText,
              ,
              view === 2 ? { color: 'white' } : null,
            ]}
          >
            create Item
          </Text>
        </Pressable>
      </View>

      {view === 0 && <AllItems data={data} />}
      {view === 1 && <AllItems data={data.filter((item)=>item.stock<15)}/>}
      {view === 2 && <CreateScreen data={data} setData={setData}/>}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    padding: '4%',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginVertical: 10,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth: 0.8,
    borderColor: 'green',
  },
  buttonText: {
    color: 'green',
    fontSize: 14,
  },
});
