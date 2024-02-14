class PathsConfig 
{
	static DS = '/';
	static AppDir = 'app';
	static ConfigDir = PathsConfig.AppDir+PathsConfig.DS+'config';
	static EnvConfigDir = PathsConfig.ConfigDir+PathsConfig.DS+'env';
}
export default PathsConfig;