import { UserData , User} from './User';

it('can create an instance of a model', ()=>{
    const newUser = UserData.create({
        "name" : "Vendor",
        "password" : "directory"
    })
    expect(newUser.name).toBe("Vendor")
})
it('can create a list of users',() =>{
const userList = User.create({
    users:[
        {
            "name": "Vendor",
            "password": "Directory"
        },
        {
            "name" : "Spark",
            "paasword": "Plug"        }
    ]
})
 expect(userList.users.length).toBe(2)
})