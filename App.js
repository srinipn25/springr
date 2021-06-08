import React, { Component } from 'react';
import { Router,Scene,Stack } from 'react-native-router-flux';
import Screen1 from './Pages/Screen1'
import Screen2 from './Pages/Screen2'

class App extends Component {
  render(){
  return (
    <Router>
       <Stack key="root">
       <Scene key="Screen1" component={Screen1} title="Screen1" hideNavBar={true} initial={true} />
       <Scene key="Screen2" component={Screen2} title="Screen2" hideNavBar={true}/>
       </Stack>
    </Router>
    // <Screen1 />
  )
}
}

export default App;
