import { StyleSheet, Text, View } from 'react-native';
import Filme from './src/components/Filme';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native-web';

export default function App() {
  let [filmes, setFilmes] = useState([]);

  const baseUrl = 'https://api.otaviolube.com/api/filmes?populate=*';

  useEffect(function(){
    fetch(baseUrl)
      .then(data => data.json())
      .then(objeto => {
        setFilmes(objeto.data);
      })
  });

  return (
    <View style={styles.container}>
      <View style={styles.titulo}>
        <Text style={styles.titulo_texto}>FILMES EM CARTAZ</Text>
      </View>
      {filmes.length > 0 ? 
      filmes.map(filme => <Filme key={filme.id} filme={filme}></Filme>) : 
      <ActivityIndicator color='white' size='large'></ActivityIndicator>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: '1rem'
  },
  titulo: {
    width: '90%',
    textAlign: 'left',
    marginTop: '1rem',
  },
  titulo_texto: {
    color: 'yellow',
    fontSize: '20px',
    fontWeight: 'bold'
  }
});
