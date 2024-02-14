import BgColor from "./bgColor";
import ForeColor from "./foreColor";

class ConsoleLogger
{
	#Log(str: string, foreColor: string , bgColor?: string) {
		console.log(foreColor+bgColor+str+ForeColor.WHITE+BgColor.BLACK);
	}
	Log(str: string) {
		this.#Log(str, ForeColor.WHITE, BgColor.BLACK);
	}
	LogRed(str: string, bgColor?: BgColor | null) {		
		this.#Log(str, ForeColor.RED, bgColor || '');
	}
	LogGreen(str: string, bgColor?: BgColor | null) {		
		this.#Log(str, ForeColor.GREEN, bgColor || '');
	}
	LogYellow(str: string, bgColor?: BgColor | null) {		
		this.#Log(str, ForeColor.YELLOW, bgColor || '');
	}
	LogBlue(str: string, bgColor?: BgColor | null) {		
		this.#Log(str, ForeColor.BLUE, bgColor || '');
	}
	LogMagenta(str: string, bgColor?: BgColor | null) {		
		this.#Log(str, ForeColor.MAGENTA, bgColor || '');
	}
	LogCyan(str: string, bgColor?: BgColor | null) {		
		this.#Log(str, ForeColor.CYAN), bgColor || '';
	}
}
export default ConsoleLogger;