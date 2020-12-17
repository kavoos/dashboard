import React, { FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import { FinancePage } from './finance-page'
import { HealthPage } from './health-page'
import { HomePage } from './home-page'
import { NoMatchPage } from './no-match-page'
import { SettingsPage } from './settings-page'
import { SupportPage } from './support-page'

export const AppRouter: FC = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/health" exact component={HealthPage} />
    <Route path="/finance" component={FinancePage} />
    <Route path="/settings" component={SettingsPage} />
    <Route path="/support" component={SupportPage} />
    <Route component={NoMatchPage} />
  </Switch>
)