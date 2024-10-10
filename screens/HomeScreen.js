import React from 'react';
import { View, Text, Image, ScrollView, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Footer from '../components/Footer'; // Import the Footer component

const categories = [
  { id: '1', name: 'Electronics', icon: require('../assets/img/mobile.png') },
  { id: '2', name: 'Fashion', icon: require('../assets/img/shoes.png') },
  { id: '3', name: 'Beauty', icon: require('../assets/img/lipstick.png') },
  { id: '4', name: 'Fresh Food', icon: require('../assets/img/traibo.png') },
];

const deals = [
  { id: '1', name: 'Shoes', discount: '50%', image: require('../assets/img/jordan.png') },
];

const recommendations = [
  { id: '1', name: 'Shoes', price: '$299', rating: 4.5, image: require('../assets/img/shoes1.png') },
  { id: '2', name: 'Tablet', price: '$499', rating: 4.5, image: require('../assets/img/ipad.png') },
  { id: '3', name: 'Pear', price: '$2', rating: 4.5, image: require('../assets/img/traibo.png') },
];

const redBoxImages = [
  require('../assets/img/handbag_rec.jpg'),
  require('../assets/img/ipad.png'),
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>All Deals</Text>
          <Image source={require('../assets/img/ava1.png')} style={styles.profileImage} />
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search for product"
            style={styles.searchInput}
          />
        </View>

        {/* Categories */}
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.categoryContainer}>
              <View style={styles.circleContainer}>
                <Image source={item.icon} style={styles.categoryIcon} resizeMode="contain" />
              </View>
              <Text style={styles.categoryText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          style={styles.categoryList}
        />

        {/* Featured Deals */}
        <View style={styles.dealsContainer}>
          {deals.map((deal) => (
            <View key={deal.id} style={styles.dealItem}>
              <View style={styles.dealCard}>
                <View style={styles.dealContent}>
                  <Text style={styles.dealTitle}>{deal.name}</Text>
                  <Text style={styles.dealDiscount}>{deal.discount} off</Text>
                  <TouchableOpacity style={styles.buyNowButton}>
                    <Text style={styles.buyNowText}>Buy now</Text>
                  </TouchableOpacity>
                </View>
                <Image source={deal.image} style={styles.dealImage} />
              </View>
            </View>
          ))}
        </View>

        {/* Red Boxes */}
        <View style={styles.redContainer}>
          {redBoxImages.map((image, index) => (
            <View key={index} style={styles.redBox}>
              <Image source={image} style={styles.redBoxImage} />
            </View>
          ))}
        </View>

        {/* Recommended for You */}
        <View style={styles.recommendationsContainer}>
          <View style={styles.recommendationsHeader}>
            <Text style={styles.recommendationsTitle}>Recommended for you</Text>
            <Text style={styles.viewAll}>View all</Text>
          </View>
          <FlatList
            data={recommendations}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.recommendationItem}>
                <Image source={item.image} style={styles.recommendationImage} />
                <Text style={styles.recommendationTitle}>{item.name}</Text>
                <Text>{item.price}</Text>
                <Text>{`Rating: ${item.rating}`}</Text>
              </View>
            )}
          />
        </View>
      </ScrollView>

      {/* Footer */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
  },
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchContainer: {
    marginHorizontal: 36,
    marginVertical: 10,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  categoryList: {
    marginHorizontal: 26,
  },
  categoryContainer: {
    alignItems: 'center',
    marginHorizontal: 12,
  },
  circleContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 5,
  },
  categoryIcon: {
    width: 50,
    height: 50,
  },
  categoryText: {
    textAlign: 'center',
  },
  dealsContainer: {
    marginHorizontal: 16,
    marginVertical: 10,
  },
  dealItem: {
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dealCard: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  dealImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginLeft: 16,
  },
  dealContent: {
    flex: 1,
    paddingLeft: 16,
  },
  dealTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f97316',
  },
  dealDiscount: {
    fontSize: 18,
    marginVertical: 4,
    color: '#555',
  },
  buyNowButton: {
    backgroundColor: '#000',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    width: 96,
    height: 36,
  },
  buyNowText: {
    color: '#fff',
    fontSize: 16,
  },
  redContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 36,
    marginVertical: 0,
  },
  redBox: {
    width: '48%',
    height: 150,
    backgroundColor: 'red',
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  redBoxImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  recommendationsContainer: {
    marginHorizontal: 36,
    marginVertical: 36,
  },
  recommendationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  recommendationsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewAll: {
    color: 'blue',
  },
  recommendationItem: {
    marginHorizontal: 10,
  },
  recommendationImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  recommendationTitle: {
    fontSize: 16,
  },
});
