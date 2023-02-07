import User from "./User";


const userClass = document.querySelector(".user");

async function callUser() {
    console.log('calling');
    const res = await fetch('https://randomuser.me/api/?results=20')
    .then((res) => console.log(res.json()));
    return res;
  }

/*const userA = new User("vincent", "dubuis", 25, "vincent.dubuis@heig-vd.ch", "photo", "Monsieur");
userA.generateUserHard();
userA.render();
//createUser();
function createUserData(){
    array.forEach(element => {
        
    });
}
*/

const createUser = () => {
        const res =  callUser();
        console.log(res);
        let users = [];
        res.results.forEach((results) => {
            const user = new User;
            user.surname = results.name.first;
            user.name = results.name.last;
            user.email = results.email;
            user.city = results.location.city;
            user.country = results.location.country;
            user.title = results.name.title;
            user.picture = results.picture.medium;
            users.push(user)
        }
        );
    };
    createUser();
 /*   userClass.addEventListener("click", function (e) {
        e.preventDefault();
        //ça marche sur le premier de temps en temps
        if(e)
            e.setAttribute(data-present, false);
        if(e=false)
        {
            e.setAttribute(data-present, true);
        }
      });
*/