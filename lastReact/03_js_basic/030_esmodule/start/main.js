import { hello } from "./module.js";
import { User } from "./user.js";

hello();
const user = new User("tom");
user.hello();
