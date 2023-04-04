import { ScrollView, StyleSheet } from "react-native";
import { Button, Card } from "react-native-paper";
import { DefaultTheme } from "react-native-paper";

function Home ({navigation}){
    return(
        <ScrollView style={styles.ScrollView}>
            <Card style={styles.Card}>
                <Card.Content>
                    <Button mode="contained" onPress={()=> navigation.navigate('Filmes')}>
                        Filmes
                    </Button>
                </Card.Content>
            </Card>
            <Card style={styles.Card}>
                <Card.Content>
                    <Button mode="contained" onPress={() => navigation.navigate('Series')}>
                        Series
                    </Button>
                </Card.Content>
            </Card>
            <Card style={styles.Card}>
                <Card.Content>
                    <Button mode="contained" onPress={() => navigation.navigate('Livros')}>
                        Livros
                    </Button>
                </Card.Content>
            </Card>

        </ScrollView>
    );
}
const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: DefaultTheme.colors.background,
      paddingTop: 10
    },
    card: {
      width: '40%',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  });
  
  export default Home