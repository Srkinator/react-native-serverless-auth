import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';

import { ROOT_URL } from '../config'

const SignUpForm = props => {
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [error, setError] = useState(null)

  handleSubmit = async () => {
    try {
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone,
        code
      });

      firebase.auth().signInWithCustomToken(data.token);
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
      <View style={{ marginBottom: 10 }}>
        <Input
          label="Enter Code"
          value={code}
          onChangeText={code => setCode(code)}
        />
      </View>

    <Button onPress={handleSubmit} title="Submit" />
    </View>
  );
}



export default SignUpForm;
