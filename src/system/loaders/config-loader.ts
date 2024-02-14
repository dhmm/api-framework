import PathsConfig from "../../app/config/paths";

class ConfigLoader
{
	static loadPathsConfig()
	{
		let pathsConfig = {
			appDir :  PathsConfig.AppDir,
			configDir :  PathsConfig.ConfigDir,
			EnvConfigDir :  PathsConfig.EnvConfigDir,
		}
		return pathsConfig;
	}
}
export default ConfigLoader;