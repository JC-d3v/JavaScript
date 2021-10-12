const getUsers = async () => {
   try {
      const res = await axios('https://jsonplaceholder.typicode.com/users');
      const users = await res.data;
      console.log(users);
      for (user of user) {
         document.body.innerHTML += `
         <ul>
            <li>
               ${user.id}
            </li>
         </ul>
         `;
      }
   } catch (error) {
      console.log(error);
   } finally {
      console.log(`OK :`);
   }
};

getUsers();
