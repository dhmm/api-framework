import PathsConfig from "../../app/config/paths";
import ConfigLoader from "../loaders/config-loader";
import clog from "../utils/clog/clog";

//File : system/constants/env-config.ts
class EnvConfig {
	static config: any;
	static async loadEnvConfig() {
		try {
			let jsonConfig = await ConfigLoader.loadEnvConfig();
			this.config = JSON.parse(jsonConfig);
		}
		catch {
			this.config = null;
			clog.red("ERROR : Cannot load application CONFIG file");
		}
	}
}

export default EnvConfig;