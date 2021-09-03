import React, {useEffect, useState} from 'react';

import {FlatList, ActivityIndicator, SafeAreaView} from 'react-native';

import Card from './src/component/Card';
import Header from './src/component/Header';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPosts = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/comments?postId=1',
      );
      const json = await response.json();
      setData(json);
      console.log(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ececec',
        paddingHorizontal: 10,
      }}>
      <Header />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => <Card item={item} />}
          keyExtractor={item => item.id}
        />
      )}
    </SafeAreaView>
  );
};

export default App;
