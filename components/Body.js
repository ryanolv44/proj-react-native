import {View, StyleSheet, FlatList} from 'react-native'
import H1 from './ui/H1'
import CardUser from './CardUser'
import CardProduct from './CardProduct';
import { useEffect, useState } from 'react';



const Body = () => {
  const [users, setUsers] = useState ([])
  const [products, setProducts] = useState ([])

  const getUsers = async () => {
    try{
      const result = await fetch ('https://backendaulaapi.onrender.com')
      const data = await result.json()
      console.log(data.success)
      setUsers(data.users)
    } catch (error){
      console.log(error.message)
    }
  

  const getProducts = async () => {
    try{
      const result = await fetch ('https://backendaulaapi.onrender.com')
      const data = await result.json()
      console.log(data.success)
      setProducts(data.products)
    } catch (error){
      console.log(error.message)
    }
  }
}
  useEffect(() =>{
    getUsers(),
    getProducts()
  },[])
  
  return (
    <View style={styles.body}>
        <H1 style={styles.usuariosH1}>Usuários</H1>
        <View style={styles.listUser}>
          {users.length ?
            <FlatList
              data={users}
              renderItem={({item}) => <CardUser user={item} />}
              keyExtractor={item => item.id}
              horizontal={true}
            />
        </View>
        <FlatList
          data={products}
          renderItem={({})}
    </View>
  )
  }

const styles = StyleSheet.create({
    body: {
      flex: 3,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    usuariosH1: {
      marginBottom: 20,
      color: "#FFF"
    },
    listUser:{
      height: 120
    }
  }
)

export default Body