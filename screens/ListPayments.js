import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import {CheckBox, Icon} from 'react-native-elements';

const lists = [
  {
    id: 1,
    name: 'Pembangunan',
    price: '3.500.000',
    tahun: 'T.P 2020-2021',
    image: 'https://i.pravatar.cc/150?img=8',
  },
  {
    id: 2,
    name: '1 Tahun Pendidikan',
    price: '600.000',
    tahun: 'T.P 2020-2021',
    image: 'https://i.pravatar.cc/150?img=33',
  },
  {
    id: 3,
    name: 'Pembangunan',
    price: '3.500.000',
    tahun: 'T.P 2020-2021',
    image: 'https://i.pravatar.cc/150?img=8',
  },
  {
    id: 4,
    name: '1 Tahun Pendidikan',
    price: '600.000',
    tahun: 'T.P 2020-2021',
    image: 'https://i.pravatar.cc/150?img=33',
  },
  {
    id: 5,
    name: 'Pembangunan',
    price: '3.500.000',
    tahun: 'T.P 2020-2021',
    image: 'https://i.pravatar.cc/150?img=8',
  },
  {
    id: 6,
    name: '1 Tahun Pendidikan',
    price: '600.000',
    tahun: 'T.P 2020-2021',
    image: 'https://i.pravatar.cc/150?img=33',
  },
];

const ListPayments = () => {
  const [itemIds, setItemIds] = useState([]);
  return (
    <ScrollView>
      <View style={tw`p-6`}>
        <View style={tw`flex flex-row items-center justify-between mb-16`}>
          <View style={tw``}>
            <Text style={tw.style(`text-xl mb-2`, {color: '#3B4A59'})}>
              Hi, Riki
            </Text>
            <Text style={tw.style(`text-xs`, {color: '#3B4A59'})}>
              2 Tagihan belum dibayar
            </Text>
          </View>
          <Image
            style={tw.style('rounded-full', {
              height: 50,
              width: 50,
              resizeMode: 'contain',
            })}
            source={{
              uri: 'https://i.pravatar.cc/150?img=12',
            }}
          />
        </View>
        <CheckBox
          title={`Semua (${itemIds.length})`}
          checked={itemIds.length === lists.length}
          size={16}
          textStyle={{fontSize: 12}}
          containerStyle={tw`w-32 bg-transparent border-0`}
          onPress={() => {
            let results = [];
            lists.map(item => {
              if (itemIds.length !== lists.length) {
                results.push(item.id);
              } else {
                results = [];
              }
            });
            setItemIds(results);
          }}
        />

        {lists.map(item => (
          <View
            key={item.id}
            style={tw`relative flex flex-row items-center bg-white py-6 my-2`}>
            <View
              style={tw`absolute -top-2 right-0 bg-green-600 px-2 rounded-lg`}>
              <Text style={tw`text-xs text-white`}>Terbaru</Text>
            </View>
            <CheckBox
              checked={itemIds.includes(item.id)}
              size={16}
              textStyle={{fontSize: 12}}
              containerStyle={tw`bg-transparent border-0`}
              onPress={() => {
                let results = [...itemIds];

                if (!results.includes(item.id)) {
                  results.push(item.id);
                } else {
                  const indexItem = results.indexOf(item.id);
                  results.splice(indexItem, 1);
                }

                setItemIds(results);
              }}
            />
            <Image
              style={tw.style('rounded-full', {
                height: 35,
                width: 35,
                resizeMode: 'contain',
              })}
              source={{
                uri: item.image,
              }}
            />
            <View style={tw`flex ml-4`}>
              <Text style={tw`text-blue-500 text-xl`}>{item.name}</Text>
              <Text style={tw`mt-2 mb-1`}>Rp.{item.price}</Text>
              <Text style={tw`text-xs text-gray-400`}>{item.tahun}</Text>
            </View>
          </View>
        ))}
        <TouchableOpacity
          style={tw`w-56 mx-auto mt-6 bg-blue-500 flex items-center py-2 rounded-lg`}>
          <Text style={tw`text-white`}>Lanjut Pembayaran</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ListPayments;

const styles = StyleSheet.create({});
