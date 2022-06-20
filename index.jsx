import React, {Fragment, Component} from "react";
import ReactDOM from "react-dom/client";
import App from "./src/components/App";
import Parent from './exo/parent'
import Ref from './exo/ref'
import RefFunction from './exo/refFunction'
import Cssexo from "./exo/css";
import Conditionjsx from "./exo/list_condition/Condition";
import Listjsx from "./exo/list_condition/list";
import Liste from "./exo/children";
import Proptypes from "./exo/Proptypes";
import Context from "./exo/Context/context";
import ContextFunc from "./exo/Context/context_componentFunc";
import Hoc from "./exo/Hoc/Hoc";
import Form from "./exo/RenderProps/Form"
import Import from "./exo/LazyImport/Import";

import IndexForm from "./exo/Forms/IndexForm";
import FormikAvance from "./exo/Forms/formikAvance";
import FieldArray from "./exo/Forms/FieldArray";

import HttpIndex from "./exo/Http/index"

import RouteImbrique from "./exo/Route/RouteImbrique";
import Prompt from "./exo/Route/Prompt";
import WithRouter from "./exo/Route/withRouter";
import SearchParam from "./exo/Route/SearchParam";

import AppRouter from "./exo/Route/Route";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);




root.render(<App />);