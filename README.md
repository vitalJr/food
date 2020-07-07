# food
React-Native + Expo + HOOKs + Axios + API YELP FOR DEVELOPERS


<h1>Projeto FOOD</h1>

<h2>Desenvolvido com React-Native Expo </h2>

<h3>Pacotes utilizados</h3>
<ul>
  <li><b>REACT-NAVIGATION</b> -> npm install react-navigation</li>
  <li><b>AXIOS</b> -> npm install axaios</li>
</ul>


P.S: PARA CORREÇÃO DO NAVIGATION FOI NECESSÁRIO A INSTALAÇÃO DE ALGUNS PACOTES ADICIONAIS.
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
npm install react-navigation-stack @react-native-community/masked-view

<br>
<br>

O react sofreu algumas atualizações por isso foi necessário alterar a forma como o 'createStackNavigator' é importado, segue a forma correta abaixo:

<p>import { createAppContainer } from 'react-navigation';</p>
<p>import { createStackNavigator } from 'react-navigation-stack';</p>

-* Reinicie o App limpando o cache com <b>expo r -c</b>
<p>Se você ainda está apresentando o erro ao iniciar o projeto limpe atualize o projeto e limpe o chache:<p>
<b>1. expo upgrade</b>
<b>2. expo r -c</b>
  
  <br>
  <br>

para importação dos icones:
https://expo.github.io/vector-icons/
--import { Feather } from '@expo/vector-icons';

<br>

<img src="https://user-images.githubusercontent.com/11637810/86760004-cf7f0400-c03c-11ea-82bd-4d01e46a185b.PNG" >


<img src="https://user-images.githubusercontent.com/11637810/86760074-dd348980-c03c-11ea-9588-dc498363dc31.PNG" >









