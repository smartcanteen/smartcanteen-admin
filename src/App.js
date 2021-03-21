import React from 'react'
import { createBrowserHistory } from 'history'
import { Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login } from 'components/pages'

export const history = createBrowserHistory()
const App = () => {
  return (
    <Box className="App" bgColor="bgcolor.500">
      <Router history>
        <Switch>
          <Route path="/" component={() => <> Homepage </>} exact/>
          <Route path="/login" component={Login} exact/>
        </Switch>
      </Router>
    </Box>
  )
}

export default App
