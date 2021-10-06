import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Loader } from "../components";

import {
  HOME_ROUTE,
  FORMS_ROUTE,
  WALLET_ROUTE,
  RECOVERY_ROUTE,
  RECTIFICATION_ROUTE,
  STABILIZE_ROUTE,
  RECOVERY_FORM_ROUTE,
  RECTIFICATION_FORM_ROUTE,
  STABILIZE_FORM_ROUTE,
} from "./constants";

const Home = lazy(() => import("../pages/home/Home"));
const FormsPage = lazy(() => import("../pages/formsPage/FormsPage"));
const Wallets = lazy(() => import("../pages/wallets/Wallets"));
const Error = lazy(() => import("../pages/error/Error"));

const RouterConfig = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path={HOME_ROUTE} component={Home} />
        <Route path={FORMS_ROUTE} component={FormsPage} />
        <Route path={WALLET_ROUTE} component={Wallets} />
        <Route path={RECTIFICATION_ROUTE} exact component={Wallets} />
        <Route path={RECOVERY_ROUTE} exact component={Wallets} />
        <Route path={STABILIZE_ROUTE} exact component={Wallets} />
        <Route path={RECTIFICATION_FORM_ROUTE} component={FormsPage} />
        <Route path={RECOVERY_FORM_ROUTE} component={FormsPage} />
        <Route path={STABILIZE_FORM_ROUTE} component={FormsPage} />
        <Route component={Error} />
      </Switch>
    </Suspense>
  );
};

export default RouterConfig;
