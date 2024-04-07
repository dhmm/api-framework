import 'reflect-metadata';
import Framework from "./system/framework/framework";
import PathsConfig from './app/config/paths';

PathsConfig.SetAbsolutePaths(__dirname);//.replace("\\","/"));

const framework = new Framework()
framework.start();
