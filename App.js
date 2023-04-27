import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

export default function App() {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');

  const onSubmit = (data) => {
    if (errors.name || errors.email || errors.password || !gender) {
      Alert.alert('Invalid Form', 'Please fill out all fields with valid data.');
      return;
    }
    Alert.alert('Registration Successful', `Name: ${name}\nEmail: ${email}\nPassword: ${password}\nGender: ${gender}`, [
      { text: "OK", onPress: () => Alert.alert("Thank you for registering!") }
    ]);
    // Navigate to next screen to display user details
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Registration</Text>
      <View style={styles.form}>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={text => { setName(text); onChange(text); }}
              value={value}
            />
          )}
          name="name"
          defaultValue=""
        />
        {errors.name && <Text style={styles.errorText}>This field is required.</Text>}
        <Controller
          control={control}
          rules={{ required: true, pattern: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/ }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={text => { setEmail(text); onChange(text); }}
              value={value}
            />
          )}
          name="email"
          defaultValue=""
        />
        {errors.email && <Text style={styles.errorText}>Please enter a valid email address.</Text>}
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={text => { setPassword(text); onChange(text); }}
              value={value}
            />
          )}
          name="password"
          defaultValue=""
        />
        {errors.password && <Text style={styles.errorText}>This field is required.</Text>}
        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[styles.genderButton, gender === 'male' && styles.genderSelected]}
            onPress={() => setGender('male')}
          >
            <Text style={[styles.genderText, gender === 'male' && styles.genderSelectedText]}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderButton, gender === 'female' && styles.genderSelected]}
            onPress={() => setGender('female')}
          >
            <Text style={[styles.genderText, gender === 'female' && styles.genderSelectedText]}>Female</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderButton, gender === 'other' && styles.genderSelected]}
            onPress={() => setGender('other')}
          >
            <Text style={[styles.genderText, gender === 'other' && styles.genderSelectedText]}>Other</Text>
            </TouchableOpacity>
            </View>
            {!gender && <Text style={styles.errorText}>Please select your gender.</Text>}
            <TouchableOpacity
                   style={styles.submitButton}
                   onPress={handleSubmit(onSubmit)}
                 >
            <Text style={styles.submitText}>Register</Text>
            </TouchableOpacity>
            </View>
            </View>
            );
            }
            
            const styles = StyleSheet.create({
            container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            },
            title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 24,
            },
            form: {
            width: '80%',
            },
            input: {
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 4,
            padding: 8,
            marginBottom: 16,
            },
            errorText: {
            color: 'red',
            marginBottom: 16,
            },
            genderContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 16,
            },
            genderButton: {
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 4,
            padding: 8,
            width: '30%',
            alignItems: 'center',
            },
            genderText: {
            fontSize: 16,
            },
            genderSelected: {
            backgroundColor: '#008080',
            },
            genderSelectedText: {
            color: '#fff',
            },
            submitButton: {
            backgroundColor: '#008080',
            padding: 12,
            borderRadius: 4,
            alignItems: 'center',
            marginTop: 24,
            },
            submitText: {
            color: '#fff',
            fontSize: 18,
            },
            });