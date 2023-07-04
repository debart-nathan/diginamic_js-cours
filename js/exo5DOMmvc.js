import { createMarkup } from "./utils/dom.js";
import {View} from "./exo5mvc/viewTask.js";
import {Model} from "./exo5mvc/modelTask.js";
import {Controller} from "./exo5mvc/controllerTask.js";



const controller = new Controller (new View, new Model);