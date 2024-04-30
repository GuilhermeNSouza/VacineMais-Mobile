import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

// Define a função `Perfil` como o componente exportado por padrão.
export default function Perfil() {
  // Estado para armazenar os dados do perfil
  const [perfilInfo, setPerfilInfo] = useState({
    informacoesPessoais: {
      nome: "John Doe",
      dataNascimento: "01/01/1990",
      genero: "Masculino",
      cpf: "123.456.789-00"
    },
    informacoesSaude: {
      tipoSanguineo: "AB+",
      altura: "180 cm",
      peso: "75 kg",
      condicoesSaude: "Nenhuma"
    },
    vacinacao: [
      { vacina: "Covid-19/Butantan", data: "02/02/2022" },
      { vacina: "Hepatite", data: "01/09/1987" },
      { vacina: "Influenza", data: "19/03/1998" }
      // Adicione mais vacinas conforme necessário
    ]
  });

  return (
    // Componente de contêiner principal
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.heading}>Perfil</Text>

        {/* Renderizando informações pessoais */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informações Pessoais</Text>
          {Object.entries(perfilInfo.informacoesPessoais).map(([key, value]) => (
            <Text style={styles.info} key={key}>{key}: {value}</Text>
          ))}
        </View>

        {/* Renderizando informações de saúde */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informações de Saúde</Text>
          {Object.entries(perfilInfo.informacoesSaude).map(([key, value]) => (
            <Text style={styles.info} key={key}>{key}: {value}</Text>
          ))}
        </View>

        {/* Renderizando informações de vacinação */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vacinação</Text>
          {perfilInfo.vacinacao.map((item, index) => (
            <Text style={styles.info} key={index}>{item.vacina}: {item.data}</Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#347A94',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  section: {
    marginBottom: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#04364A',
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
});
