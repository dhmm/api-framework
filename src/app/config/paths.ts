class PathsConfig 
{
	static DS = '/';
	static RootFolder = 'src';
	static AppFolder = 'app';
	static ConfigFolder = 'config'
	static EnvConfigFolder = 'env';
	static ControllersFolder = 'controllers';
	static RoutesFolder = 'routes';

	//Non absolut paths	
  static RootDir = PathsConfig.RootFolder;
	static AppDir = PathsConfig.RootDir+PathsConfig.DS+PathsConfig.AppFolder;
	static ConfigDir = PathsConfig.AppDir+PathsConfig.DS+PathsConfig.ConfigFolder;
	static EnvConfigDir = PathsConfig.ConfigDir+PathsConfig.DS+PathsConfig.EnvConfigFolder;
	static ControllersDir = PathsConfig.AppDir+PathsConfig.DS+PathsConfig.ControllersFolder;
	static RoutesDir = PathsConfig.AppDir+PathsConfig.DS+PathsConfig.RoutesFolder;

	//Absolute paths will set at the beginning of the system
	static AbsRootDir = ''; 
	static AbsAppDir = ''; 
	static AbsConfigDir = ''; 
	static AbsEnvConfigDir = ''; 
	static AbsControllersDir = ''; 
	static AbsRoutesDir = ''; 

	static SetAbsolutePaths(absRootDir:string) {
		PathsConfig.AbsRootDir = absRootDir;
		PathsConfig.AbsAppDir = PathsConfig.AbsRootDir+PathsConfig.DS+PathsConfig.AppFolder;
		PathsConfig.AbsConfigDir = PathsConfig.AbsAppDir+PathsConfig.DS+PathsConfig.ConfigFolder;
		PathsConfig.AbsEnvConfigDir = PathsConfig.AbsConfigDir+PathsConfig.DS+PathsConfig.EnvConfigFolder;
		PathsConfig.AbsControllersDir = PathsConfig.AbsAppDir+PathsConfig.DS+PathsConfig.ControllersFolder;
		PathsConfig.AbsRoutesDir = PathsConfig.AbsAppDir+PathsConfig.DS+PathsConfig.RoutesFolder;
	}
}
export default PathsConfig;