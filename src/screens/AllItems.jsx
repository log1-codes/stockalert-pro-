import { FlatList, StyleSheet, Text, View } from 'react-native';

const AllItems = ({ data }) => {
  return (
    <View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Qunatity</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer , {backgroundColor :item.stock < 15 ?"#FFCCCC" :"#D7F6BF"}]}>
            <Text style={styles.itemText}>{item.name}</Text>
            <Text style={styles.itemText}>{item.stock}</Text>
          </View>
        )}
        contentContainerStyle={{gap:14}}
      />
    </View>
  );
};

export default AllItems;

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical:15
  },
  headingText: {
    fontWeight: '500',
    fontSize: 16,
  },
  itemContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical:10,
    borderRadius:7

  },
  itemText:{
    fontWeight:"400",
    fontSize:14
  }
});
