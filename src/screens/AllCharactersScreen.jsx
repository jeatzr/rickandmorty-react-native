import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { getCharactersByPage } from '../services/rickmortyapi';
import CharacterCard from '../components/CharacterCard';

const AllCharactersScreen = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getCharacters = (page = 1) => {
    getCharactersByPage(page)
      .then(json => {
        setCharacters(prevCharacters => [...prevCharacters, ...json.results]);
        setTotalPages(json.info.pages);
        //setCurrentPage(json.info.page);
      })
      .catch(error => console.log("error", error));
  };

  // se ejecutará la primera vez que se monte el componente
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={characters}
        renderItem={({ item }) => (
          <CharacterCard key={item.id} item={item} />
        )}
        ListFooterComponent={() => <Text>-- End --</Text>}
        onEndReachedThreshold={0}
        onEndReached={() => {
          if (currentPage < totalPages) {
            getCharacters(currentPage + 1);
            setCurrentPage(currentPage + 1);
          }
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    width: "100%",
    padding: 10,
    marginTop: 10
  },
  image: {
    width: 80,
    height: 80
  },
  row: {
    flex: 1,
    flexDirection: "row",
    margin: 10
  },
  column: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  text: {
    fontSize: 18
  }
});

export default AllCharactersScreen;