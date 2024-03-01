class PathsConfig 
{
	static DS = '/';
   static RootDir = 'src';
	static AppDir = PathsConfig.RootDir+PathsConfig.DS+'app';
	static ConfigDir = PathsConfig.AppDir+PathsConfig.DS+'config';
	static EnvConfigDir = PathsConfig.ConfigDir+PathsConfig.DS+'env';
	static ControllersDir = PathsConfig.AppDir+PathsConfig.DS+'controllers';
}
export default PathsConfig;