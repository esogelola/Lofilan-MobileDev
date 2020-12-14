import React from 'react';
import {Button} from 'react-native';
import {AuthContext} from '../../context';

export default () => {
  const {signOut} = React.useContext(AuthContext);

  return (
    <>
      <Button
        title="SignOUT"
        onPress={() => {
          signOut();
        }}
      />
    </>
  );
};
