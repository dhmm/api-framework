//File : system/loaders/config-loader.ts
import PathsConfig from "../../app/config/paths";
import 'dotenv/config';
import * as fs from 'fs';
import clog from "../utils/clog/clog";

class ConfigLoader
{
	static loadPathsConfig()
	{       
		clog.blue('BEGIN : ConfigLoader->loadPathsConfig') ;
		let pathsConfig = {
            rootDir : PathsConfig.RootDir,
			appDir :  PathsConfig.AppDir,
			configDir :  PathsConfig.ConfigDir,
			envConfigDir :  PathsConfig.EnvConfigDir,
		}		
		return pathsConfig;
	}
    static async loadEnvConfig(pathsConfig : any ) : Promise<any>
    {       
				clog.blue('BEGIN : ConfigLoader->loadEnvConfig') ; 
        let environment = process.env.ENVIRONMENT;
        if(!environment) {
            environment = "development";
        }       
        const filePath = pathsConfig.envConfigDir+'/'+environment+'.json';
        const fs = require('fs');
        const config = await fs.readFileSync(filePath, 'utf-8' , (err:any, data:any) => {
            if(err) {
                return {};
            }
            else {
                return data;
            }
        });
        return config;
    }
}
export default ConfigLoader;