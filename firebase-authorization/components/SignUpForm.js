import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';

import { ROOT_URL } from '../config'

const SignUpForm = props => {
  const [phone, setPhone] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone });
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone });
    } catch (err) {
      setError(err)
    }
  }

  return (
    <View>
      <View style={{ marginBottom: 10 }}>
        <Input
          label="Enter Phone Number"
          value={phone}
          onChangeText={phone => setPhone(phone)}
        />
      </View>

    <Button onPress={handleSubmit} title="Submit" />
    </View>
  );
}



export default SignUpForm;
