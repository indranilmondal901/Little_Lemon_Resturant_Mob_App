{
  /* FLAT LIST */
}

// import { StyleSheet, Text, View, FlatList } from "react-native";
// import React from "react";

// export default function MenuItems() {
//   const menuItemsToDisplay = [
//     { name: "Hummus", price: "$5.00", id: "1A" },
//     { name: "Moutabal", price: "$5.00", id: "2B" },
//     { name: "Falafel", price: "$7.50", id: "3C" },
//     { name: "Marinated Olives", price: "$5.00", id: "4D" },
//     { name: "Kofta", price: "$5.00", id: "5E" },
//     { name: "Eggplant Salad", price: "$8.50", id: "6F" },
//     { name: "Lentil Burger", price: "$10.00", id: "7G" },
//     { name: "Smoked Salmon", price: "$14.00", id: "8H" },
//     { name: "Kofta Burger", price: "$11.00", id: "9I" },
//     { name: "Turkish Kebab", price: "$15.50", id: "10J" },
//     { name: "Fries", price: "$3.00", id: "11K" },
//     { name: "Buttered Rice", price: "$3.00", id: "12L" },
//     { name: "Bread Sticks", price: "$3.00", id: "13M" },
//     { name: "Pita Pocket", price: "$3.00", id: "14N" },
//     { name: "Lentil Soup", price: "$3.75", id: "15O" },
//     { name: "Greek Salad", price: "$6.00", id: "16Q" },
//     { name: "Rice Pilaf", price: "$4.00", id: "17R" },
//     { name: "Baklava", price: "$3.00", id: "18S" },
//     { name: "Tartufo", price: "$3.00", id: "19T" },
//     { name: "Tiramisu", price: "$5.00", id: "20U" },
//     { name: "Panna Cotta", price: "$5.00", id: "21V" },
//   ];
//   /* Seperator component */
//   const seperator=()=><View style={menuStyles.seperator}/>;
//   /* list header */
//   const listHeader=()=><Text style={menuStyles.headerText}>View Menu</Text>;

//   /* list Footer */
//   const listFooter=()=>(
//     <Text style={menuStyles.footerText}>
//       All Rights Reserved By Little Lemon 2024
//     </Text>
//   );

//   const Item = ({ name, price }) => (
//     <View style={menuStyles.innerContainer}>
//       <Text style={menuStyles.itemText}>{name}</Text>
//       <Text style={menuStyles.itemText}>{price}</Text>
//     </View>
//   );

//   const renderItem = ({ item }) => {
//     return <Item name={item.name} price={item.price} />;
//   };
//   return (
//     <View style={menuStyles.container}>
//       {/* option 1 -- with seperate header*/}
//       {/* <Text style={menuStyles.headerText}>MenuItems</Text>
//       <FlatList data={menuItemsToDisplay} keyExtractor={(item) => item.id} renderItem={renderItem} /> */}

//       {/*with headerComponent propr and footerComponent Prop */}
//       <FlatList
//         data={menuItemsToDisplay}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         ItemSeparatorComponent={seperator}
//         ListHeaderComponent={listHeader}
//         // ListFooterComponent={listFooter}
//       />
//     </View>
//   );
// }

// const menuStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   innerContainer: {
//     paddingHorizontal: 40,
//     paddingVertical: 20,
//     flexDirection: "row",
//     justifyContent: "space-between",
//   },
//   headerText: {
//     color: "white",
//     fontSize: 40,
//     flexWrap: "wrap",
//     textAlign: "center",
//   },
//   itemText: {
//     color: "#F4CE14",
//     fontSize: 20,
//   },
//   seperator: {
//     backgroundColor:"red",
//     height:"20"
//   },
//   // footerText: { padding: 1, fontSize: 18, color: "black", textAlign: "center", fontStyle:"italic" },
// });


{/*-------------------------------------------------------------------------------------------------------------------------- */}
{
  /* SECTIONLIST */
}

// import React from "react";

// import { View, Text, StyleSheet, SectionList } from "react-native";

// const menuItemsToDisplay = [
//   {
//     title: 'Appetizers',
//     data: [
//       { name: 'Hummus', price: '$5.00' },
//       { name: 'Moutabal', price: '$5.00' },
//       { name: 'Falafel', price: '$7.50' },
//       { name: 'Marinated Olives', price: '$5.00' },
//       { name: 'Kofta', price: '$5.00' },
//       { name: 'Eggplant Salad', price: '$8.50' },
//     ],
//   },
//   {
//     title: 'Main Dishes',
//     data: [
//       { name: 'Lentil Burger', price: '$10.00' },
//       { name: 'Smoked Salmon', price: '$14.00' },
//       { name: 'Kofta Burger', price: '$11.00' },
//       { name: 'Turkish Kebab', price: '$15.50' },
//     ],
//   },
//   {
//     title: 'Sides',
//     data: [
//       { name: 'Fries', price: '$3.00', id: '11K' },
//       { name: 'Buttered Rice', price: '$3.00' },
//       { name: 'Bread Sticks', price: '$3.00' },
//       { name: 'Pita Pocket', price: '$3.00' },
//       { name: 'Lentil Soup', price: '$3.75' },
//       { name: 'Greek Salad', price: '$6.00' },
//       { name: 'Rice Pilaf', price: '$4.00' },
//     ],
//   },
//   {
//     title: 'Desserts',
//     data: [
//       { name: 'Baklava', price: '$3.00' },
//       { name: 'Tartufo', price: '$3.00' },
//       { name: 'Tiramisu', price: '$5.00' },
//       { name: 'Panna Cotta', price: '$5.00' },
//     ],
//   },
// ];

// const Item = ({ name,price }) => (
//   <View style={menuStyles.innerContainer}>
//     <Text style={menuStyles.itemText}>{name}</Text>
//     <Text style={menuStyles.itemText}>{price}</Text>
//   </View>
// );

// const Separator = () => <View style={menuStyles.separator} />;

// const Footer = () => (
//   <Text style={menuStyles.footerText}>
//     All Rights Reserved by Little Lemon 2022
//   </Text>
// );

// const MenuItems = () => {
//   const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

//   const renderSectionHeader = ({ section: { title } }) => (
//     <Text style={menuStyles.sectionHeader}>{title} </Text>
//   );

//   return (
//     <View style={menuStyles.container}>
//       <SectionList
//         keyExtractor={(item, index) => item + index}
//         sections={menuItemsToDisplay}
//         renderItem={renderItem}
//         renderSectionHeader={renderSectionHeader}
//         ListFooterComponent={Footer}
//         ItemSeparatorComponent={Separator}
//       />
//     </View>
//   );
// };

// // Add styles to the component
// const menuStyles = StyleSheet.create({
//   container: {
//     flex: 0.95,
//   },
//   innerContainer: {
//     flexDirection: 'row',
//     paddingHorizontal: 40,
//     paddingVertical: 20,
//     backgroundColor: "#333333",
//     justifyContent: 'space-between'
//   },
//   sectionHeader: {
//     backgroundColor: "#fbdabb",
//     color: "#333333",
//     fontSize: 34,
//     flexWrap: "wrap",
//     textAlign: "center",
//   },
//   itemText: {
//     color: "#F4CE14",
//     fontSize: 32,
//   },
//   separator: {
//     borderBottomWidth: 1,
//     borderColor: "#EDEFEE",
//   },
//   footerText: {
//     color: "#EDEFEE",
//     fontSize: 20,
//     flexWrap: "wrap",
//     textAlign: "center",
//   },
// });

// export default MenuItems;

{/* ---------------------------------------------------------------------------------------------------------------- */}

import React from 'react';

import { View, Text, StyleSheet, SectionList } from 'react-native';

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];

const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{price}</Text>
  </View>
);

const MenuItems = () => {
  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={menuStyles.headerStyle}>
      <Text style={menuStyles.sectionHeader}>{title}</Text>
    </View>
  );

  return (
    <View style={menuStyles.container}>
      <SectionList
        sections={menuItemsToDisplay}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        />
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 20,
  },
  headerStyle: {
    backgroundColor: '#F4CE14',
  },
  sectionHeader: {
    color: 'black',
    fontSize: 26,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
});

export default MenuItems;