import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';
import { colors } from '../../utils/colors';
import { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { MyDimensi } from '../../utils';

export default function BottomNavigator({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const [cart, setCart] = useState(0);
  const isFocused = useIsFocused();

  useEffect(() => {
    // if (isFocused) {
    //   getData('user').then(users => {
    //     axios.post(urlAPI + '/1_cart.php', {
    //       fid_user: users.id
    //     }).then(res => {
    //       console.log('cart', res.data);

    //       setCart(parseFloat(res.data))
    //     })
    //   })
    // }
  }, []);

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const icons = {
    Home: {
      focused: require('../../assets/home.png'),
      unfocused: require('../../assets/home-outline.png'),
    },
    Category: {
      focused: require('../../assets/category.png'),
      unfocused: require('../../assets/category-outline.png'),
    },
    Wishlist: {
      focused: require('../../assets/wishlist.png'),
      unfocused: require('../../assets/wishlist-outline.png'),
    },
    Profile: {
      focused: require('../../assets/profile.png'),
      unfocused: require('../../assets/profile-outline.png'),
    }
  };

  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, {
              key: 0
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const iconSource = isFocused ? icons[label].focused : icons[label].unfocused;

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={
              label === 'Kategori'
                ? () =>
                  navigation.navigate('Barang', {
                    key: 0
                  })
                : onPress
            }
            onLongPress={onLongPress}
            style={{ flex: 1 }}>
            <View style={styles.iconContainer}>
              <Image
                source={iconSource}
                style={{ width: MyDimensi / 3, height: MyDimensi / 3 }}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 15, // Menambahkan padding bawah
    paddingTop: 10, // Menambahkan padding atas
  
    bottom: 0, // Mengatur jarak dari bawah
    width: '100%', // Memastikan lebar penuh
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

