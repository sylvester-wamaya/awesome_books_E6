import Library from "./modules/library.js";
import navBar from "./modules/nav.js";
import dateNow from "./modules/date.js";




const library = new Library();
library.displaylist();
library.addbtn(library)
navBar()
dateNow()
