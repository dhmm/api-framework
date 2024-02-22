import PathsConfig from "../../app/config/paths";
import 'dotenv/config';

class ConfigLoader
{
	static loadPathsConfig()
	{        
		let pathsConfig = {
			appDir :  PathsConfig.AppDir,
			configDir :  PathsConfig.ConfigDir,
			envConfigDir :  PathsConfig.EnvConfigDir,
		}
		return pathsConfig;
	}
    static loadEnvConfig(pathsConfig : any ) : any
    {        
        let environment = process.env.ENVIRONMENT;
        if(!environment) {
            environment = "development";
        }        
        const filePath = pathsConfig.envConfigDir+'/'+environment+'.json';
        const fs = require('fs');
        fs.readFileSync(filePath, 'utf-8' , (err, data) => {
            if(err) {
                console.log(err);
            }
            else {
                console.log(data);
            }
        });
        console.log(filePath);
        return {};
    }
}
export default ConfigLoader;