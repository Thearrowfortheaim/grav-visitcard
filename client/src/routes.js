import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {LinksPage} from './pages/LinksPage'
import {CreatePage} from './pages/CreatePage'
import {DetailPage} from './pages/DetailPage'
import {AuthPage} from './pages/AuthPage'
import {WellcomePage} from './pages/WellcomePage'
import {WerkstattPage} from './pages/WerkstattPage'
import {KontaktPage} from './pages/KontaktPage'
import {ImpressumPage} from './pages/ImpressumPage'
import {DatenschutzPage} from './pages/DatenschutzPage'
import {TerminBuchenPage} from './pages/TerminBuchenPage'

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/links" exact>
          <LinksPage />
        </Route>
        <Route path="/create" exact>
          <CreatePage />
        </Route>
        <Route path="/WellcomePage" exact>
        <wellcomePage />
        </Route>
        <Route path="/detail/:id">
          <DetailPage />
        </Route>
        <Redirect to="/create" />
      </Switch>
    )
  }

  return (
    <Switch>

      <Route path="/create" exact>
        <CreatePage />
      </Route>
      
      <Route path="/wellcome" exact>
        <WellcomePage />
      </Route>

      <Route path="/werkstatt" exact>
        <WerkstattPage />
      </Route>
      
      <Route path="/kontakt" exact>
        <KontaktPage />
      </Route>

      <Route path="/impressum" exact>
        <ImpressumPage />
      </Route>

      <Route path="/datenschutz" exact>
        <DatenschutzPage />
      </Route>

      <Route path="/termin" exact>
        <TerminBuchenPage />
      </Route>

      <Route path="/" exact>
        <AuthPage />
      </Route>

      <Redirect to="/" />  
    </Switch>
    
  )
}
