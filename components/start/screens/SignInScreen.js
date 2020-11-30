import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { useTheme } from 'react-native-paper';
import { color } from 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';





const SignInScreen = ({navigation}) => {
    const[data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true

    });
const handlePassword = (val) => {

    setData({
        ...data,
        password: val

    });
}

const updateSecureTextEntry = () => {
    setData({
        ...data,
        secureTextEntry: !data.secureTextEntry

    });

}
   return(
       <View style={styles.container}>
           <View style={styles.header}>
               <Text style={{fontWeight: 'bold', textAlign:'center'}}>Lofilan</Text>
               <Text style={styles.text_header}>Sign In</Text>
               <Text style={{color:'#989EB1', fontSize: 16}}>Hi there! Nice to see you again.</Text>
           </View>
           <Animatable.View 
           animation='fadeInDown'
           style={styles.footer}>

               <Text style={styles.text_footer}>Email</Text>
               <View style={styles.action}>
                   <TextInput 
                   placeholder = 'Enter your email'
                   style={styles.textInput}
                   autoCapitalize='none'/>
               </View>

               <Text style={[styles.text_footer, {marginTop: 30}]}>Password</Text>
               <View style={styles.action}>
                   <TextInput 
                   placeholder = 'Enter your password'
                   style={styles.textInput}
                   autoCapitalize='none'
                   secureTextEntry={data.secureTextEntry ? true : false}
                   onChangeText={(val) => handlePassword(val)}/>
                   <TouchableOpacity
                   onPress={updateSecureTextEntry}
                   
                   >
                    {data.secureTextEntry ?
                   <Feather
                   name='eye-off'
                   color='grey'
                   size={20}
                   />
                   :
                   <Feather
                   name='eye'
                   color='grey'
                   size={20}
                   />
                    }
                   </TouchableOpacity>
               </View>
               <Animatable.View 
               animation='pulse'
               delay={700}
               style={styles.button}>
                   <LinearGradient colors={['#F85F6A','#F85F6A']}
                   style={styles.signIn}>
                       <Text style={[styles.textSign, {color:'#ffff'}]}>Sign In</Text>
                   </LinearGradient>


               </Animatable.View>
               <View style={{flexDirection: 'row'}}>
               <TouchableOpacity 
               style={{flex:1}}>
                       <Text style={{fontWeight: 'bold', textAlign:'left', color:'#989EB1'}}>Forgot Password?</Text>
                   </TouchableOpacity>
               <TouchableOpacity
               onPress={()=> navigation.navigate('SignUpScreen')}>
                       <Text style={{fontWeight: 'bold', textAlign:'right', color:'#F85F6A'}}>Sign Up</Text>
                   </TouchableOpacity>
               
                   
               </View>
           </Animatable.View>

       </View>

   );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#FFFFFF'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        paddingTop: 20,
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#F85F6A',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#000000',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 30
    },
    signIn: {
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });