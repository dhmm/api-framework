import BgColor from "./colors/bg-color";
import TextColor from "./colors/text-color";

/**
 * Console Logger class
 */
class clog
{
	static #log(str: string, textColor: string , bgColor?: string) {
		console.log(textColor+bgColor+str+TextColor.WHITE+BgColor.BLACK);
	}
	static log(str: string) {
		clog.#log(str, TextColor.WHITE, BgColor.BLACK);
	}
	static red(str: string, bgColor?: BgColor | null) {		
		clog.#log(str, TextColor.RED, bgColor || '');
	}
	static green(str: string, bgColor?: BgColor | null) {		
		clog.#log(str, TextColor.GREEN, bgColor || '');
	}
	static yellow(str: string, bgColor?: BgColor | null) {		
		clog.#log(str, TextColor.YELLOW, bgColor || '');
	}
	static blue(str: string, bgColor?: BgColor | null) {		
		clog.#log(str, TextColor.BLUE, bgColor || '');
	}
	static magenta(str: string, bgColor?: BgColor | null) {		
		clog.#log(str, TextColor.MAGENTA, bgColor || '');
	}
	static cyan(str: string, bgColor?: BgColor | null) {		
		clog.#log(str, TextColor.CYAN), bgColor || '';
	}
}
export default clog;