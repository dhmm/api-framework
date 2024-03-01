import BgColor from "./colors/bg-color";
import TextColor from "./colors/text-color";

/**
 * Console Logger class
 */
class clog
{
    static #getObjectAsStr(obj: Object) {
        return JSON.stringify(obj, null, " ");
    }
	static #log(str: any, textColor: string , bgColor?: string) {
       if(typeof(str) === "object"){
        	console.log(textColor+bgColor+clog.#getObjectAsStr(str)+TextColor.WHITE+BgColor.BLACK);
       } else {				
					console.log(textColor+bgColor+str+TextColor.WHITE+BgColor.BLACK);
       }
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
	static yellow(str: any, bgColor?: BgColor | null) {		
		clog.#log(str, TextColor.YELLOW, bgColor || '');
	}
	static blue(str: string, bgColor?: BgColor | null) {		
		clog.#log(str, TextColor.BLUE, bgColor || '');
	}
	static magenta(str: string, bgColor?: BgColor | null) {		
		clog.#log(str, TextColor.MAGENTA, bgColor || '');
	}
	static cyan(str: string, bgColor?: BgColor | null) {			
		clog.#log(str, TextColor.CYAN, bgColor || '');		
	}
}
export default clog;