class PathsConfig 
{
	static DS = '/';
    static RootDir = 'src';
	static AppDir = PathsConfig.RootDir+PathsConfig.DS+'app';
	static ConfigDir = PathsConfig.AppDir+PathsConfig.DS+'config';
	static EnvConfigDir = PathsConfig.ConfigDir+PathsConfig.DS+'env';
}
export default PathsConfig;