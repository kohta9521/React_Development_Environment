import { hello } from "./module.js";
import { User } from "./module.js";

hello();
const user = new User("kohta");
user.hello();
