import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Configuracoes() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Configurações</Text>
      </View>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option}>
          <MaterialIcons name="account-circle" size={24} color="black" />
          <Text style={styles.optionText}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <MaterialIcons name="notifications" size={24} color="black" />
          <Text style={styles.optionText}>Notificações</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <MaterialIcons name="language" size={24} color="black" />
          <Text style={styles.optionText}>Idioma</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <MaterialIcons name="security" size={24} color="black" />
          <Text style={styles.optionText}>Segurança</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <MaterialIcons name="help" size={24} color="black" />
          <Text style={styles.optionText}>Ajuda</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <MaterialIcons name="sync" size={24} color="black" />
          <Text style={styles.optionText}>Sincronização</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <MaterialIcons name="brightness-6" size={24} color="black" />
          <Text style={styles.optionText}>Modo Escuro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <MaterialIcons name="accessibility" size={24} color="black" />
          <Text style={styles.optionText}>Acessibilidade</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#04364A',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  optionsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    marginLeft: 15,
    fontSize: 18,
  },
});
