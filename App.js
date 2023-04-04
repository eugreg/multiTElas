
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider as PaperProvider } from "react-native-paper";

import Home from "./Views/Home";
import Filmes from "./Views/Filmes";
import Series from "./Views/Series";
import Livros from "./Views/Livros"

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Series" component={Series} />
          <Stack.Screen name="Filmes" component={Filmes} />
          <Stack.Screen name="Livros" component={Livros} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
