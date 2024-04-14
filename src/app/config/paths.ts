import clog from "../../system/utils/clog/clog";

class PathsConfig 
{
	static DS = '/';
	static RootFolder = 'src';
	static AppFolder = 'app';
	static ConfigFolder = 'config'
	static EnvConfigFolder = 'env';
	static ControllersFolder = 'controllers';
	static MiddlewaresFolder = 'middlewares';
	static RoutesFolder = 'routes';

	//Non absolute paths	
  static RootDir = PathsConfig.RootFolder;
	static AppDir = PathsConfig.RootDir+PathsConfig.DS+PathsConfig.AppFolder;
	static ConfigDir = PathsConfig.AppDir+PathsConfig.DS+PathsConfig.ConfigFolder;
	static EnvConfigDir = PathsConfig.ConfigDir+PathsConfig.DS+PathsConfig.EnvConfigFolder;
	static ControllersDir = PathsConfig.AppDir+PathsConfig.DS+PathsConfig.ControllersFolder;
	static MiddlewaresDir = PathsConfig.AppDir+PathsConfig.DS+PathsConfig.MiddlewaresFolder;
	static RoutesDir = PathsConfig.AppDir+PathsConfig.DS+PathsConfig.RoutesFolder;

	//Absolute paths will set at the beginning of the system
	static AbsRootDir = ''; 
	static AbsAppDir = ''; 
	static AbsConfigDir = ''; 
	static AbsEnvConfigDir = ''; 
	static AbsControllersDir = ''; 
	static AbsMiddlewaresDir = '';
	static AbsRoutesDir = ''; 

	static SetAbsolutePaths(absRootDir:string) {
		PathsConfig.AbsRootDir = absRootDir;
		PathsConfig.AbsAppDir = PathsConfig.AbsRootDir+PathsConfig.DS+PathsConfig.AppFolder;
		PathsConfig.AbsConfigDir = PathsConfig.AbsAppDir+PathsConfig.DS+PathsConfig.ConfigFolder;
		PathsConfig.AbsEnvConfigDir = PathsConfig.AbsConfigDir+PathsConfig.DS+PathsConfig.EnvConfigFolder;
		PathsConfig.AbsMiddlewaresDir = PathsConfig.AbsAppDir+PathsConfig.DS+PathsConfig.MiddlewaresFolder;
		PathsConfig.AbsControllersDir = PathsConfig.AbsAppDir+PathsConfig.DS+PathsConfig.ControllersFolder;

		PathsConfig.AbsRoutesDir = PathsConfig.AbsAppDir+PathsConfig.DS+PathsConfig.RoutesFolder;
	}

	static LogPaths()
	{
		clog.yellow("==== PathsConfig ====");
		clog.yellow('DS = '+this.DS);
		clog.yellow('RootFolder = '+this.RootFolder);
		clog.yellow('AppFolder = '+this.AppFolder);
		clog.yellow('ConfigFolder = '+this.ConfigFolder);
		clog.yellow('EnvConfigFolder = '+this.EnvConfigFolder);
		clog.yellow('ControllersFolder = '+this.ControllersFolder);
		clog.yellow('MiddlewaresFolder = '+this.MiddlewaresFolder);
		clog.yellow('RoutesFolder = '+this.RoutesFolder);

		//Non absolute paths	
		clog.yellow('RootDir = '+this.RootDir);
		clog.yellow('AppDir = '+this.AppDir);
		clog.yellow('ConfigDir = '+this.ConfigDir);
		clog.yellow('EnvConfigDir = '+this.EnvConfigDir);
		clog.yellow('ControllersDir = '+this.ControllersDir);
		clog.yellow('MiddlewaresDir = '+this.MiddlewaresDir);
		clog.yellow('RoutesDir = '+this.RoutesDir);

		//Absolute paths will set at the beginning of the system
		clog.yellow('AbsRootDir = '+this.AbsRootDir);
		clog.yellow('AbsAppDir = '+this.AbsAppDir);
		clog.yellow('AbsConfigDir = '+this.AbsConfigDir);
		clog.yellow('AbsEnvConfigDir = '+this.AbsEnvConfigDir);
		clog.yellow('AbsControllersDir = '+this.AbsControllersDir);
		clog.yellow('AbsMiddlewaresDir = '+this.AbsMiddlewaresDir);
		clog.yellow('AbsRoutesDir = '+this.AbsRoutesDir);
		clog.yellow("==== END: PathsConfig ====");

	}
}
export default PathsConfig;