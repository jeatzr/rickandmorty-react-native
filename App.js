import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const API = "https://rickandmortyapi.com/api/";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const getCharacters = (page = 1) => {
    fetch(`${API}character/?page=${page}`)
      .then(response => response.json())
      .then(json => {
        setCharacters(prevCharacters => [...prevCharacters, ...json.results]);
        setTotalPages(json.info.pages);
        setCurrentPage(page);
      })
      .catch(error => console.log("error", error));
  };

  // se ejecutará la primera vez que se monte el componente
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Personagens</Text>
      <FlatList
        style={styles.list}
        data={characters}
        renderItem={({ item }) => (
          <View key={item.id} style={styles.row}>
            <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
            <View style={[styles.column, { marginLeft: 10 }]}>
              <Text style={[styles.text, { fontWeight: "bold" }]}>{item.name}</Text>
              <Text style={styles.text}>{item.species}</Text>
              <Text style={styles.text}>{item.status}</Text>
              <Text style={styles.text}>{item.id}</Text>
            </View>
          </View>
        )}
        ListFooterComponent={() => <Text>-- End --</Text>}
        onEndReachedThreshold={0}
        onEndReached={() => {
          getCharacters(currentPage + 1)
          setCurrentPage(currentPage + 1)
        }
        }
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
    marginTop: 15
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

export default App;