import data from "./data.js";
class User{
    constructor(surname, name, age, email, picture, title){
        this.surname = surname;
        this.name = name;
        this.email = email;
        this.picture = picture;
        this.age = age;
        this.here = false;
        this.el = "div";
        this.title = title;
        generateUser();
        render();
    }

}
const createAUserFromData = () => {
    
}
let main = document.querySelector("main");
function generateUserHard(main, user) {
    main.insertAdjacentHTML(
        `beforeend`,
        `
        <div class="user" data-present="false">
		<img src="https://randomuser.me/api/portraits/women/37.jpg">
		<div class="user--info">
				<h1>Monsieur Vincent Dubuis</h1>
				<p>25} years old</p>
				<p>Baak, Netherlands</p>
		</div>
		<a href="mailto:vincent.dubuis@heig-vd.ch">
				<span class="mail">✉️</span>
		</a>
</div>
              `
      );
}
function generateUserData(main, user) {
    main.insertAdjacentHTML(
        `beforeend`,
        `
        <div class="user" data-present="false">
		<img src="https://randomuser.me/api/portraits/women/37.jpg">
		<div class="user--info">
				<h1>${users.title} ${user.surname} ${user.name}</h1>
				<p>${user.age} years old</p>
				<p>Baak, Netherlands</p>
		</div>
		<a href="mailto:${user.email}">
				<span class="mail">✉️</span>
		</a>
</div>
              `
      );
}
function generateUser(main, user) {
    main.insertAdjacentHTML(
        `beforeend`,
        `
        <div class="user" data-present="false">
		<img src="https://randomuser.me/api/portraits/women/37.jpg">
		<div class="user--info">
				<h1>${user.title} ${user.surname} ${user.name}</h1>
				<p>${user.age} years old</p>
				<p>Baak, Netherlands</p>
		</div>
		<a href="mailto:${user.email}">
				<span class="mail">✉️</span>
		</a>
</div>
              `
      );
}

function render(){

}
export default User;
