//File : index.ts

import 'reflect-metadata';
import Framework from "./system/framework/framework";
import PathsConfig from './app/config/paths';

PathsConfig.SetAbsolutePaths(__dirname);

const framework = new Framework();
framework.start();
