import PathsConfig from "../../app/config/paths";
import 'dotenv/config';
import * as fs from 'fs';

class ConfigLoader
{
	static loadPathsConfig()
	{        
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