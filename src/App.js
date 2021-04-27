import React from 'react'
import { createBrowserHistory } from 'history'
import { Box } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login, ProtectedRoute, Dashboard, Profile, Seller, SellerAdd } from 'components/pages'

export const history = createBrowserHistory()
const App = () => {
  return (
    <Box className="App" bgColor="bgcolor.500">
      <Router history>
        <Switch>
          <Route path="/login" component={Login} exact/>
          <ProtectedRoute path="/" component={Dashboard} exact/>
          <ProtectedRoute path="/profile" component={Profile} exact/>
          <ProtectedRoute path="/seller" component={Seller} exact/>
          <ProtectedRoute path="/seller-add" component={SellerAdd} exact/>
        </Switch>
      </Router>
    </Box>
  )
}

export default App
