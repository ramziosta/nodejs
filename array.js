let friends = [
    {
        name: "mojo",
        age: 28,
        jobTitle: "gm",
        salary: 100000,
        raiseAmount: 1000
    },
    {
        name: "jojo",
        age: 25,
        jobTitle: "hr",
        salary: 150000,
        raiseAmount: 6000
    },
    {
        name: "bubs",
        age: 26,
        jobTitle: "programmer",
        salary: 159000,
        raiseAmount: 5000
    },
    {
        name: "blossom",
        age: 25,
        jobTitle: "uxui",
        salary: 360000,
        raiseAmount: 8000
    }
]
let totalSalary = 0
const reduced = friends.reduce((acc, friend)=>{
     totalSalary += friend.salary;
    console.log(totalSalary)
    let ageGroup= []
    if(friend.age){
        ageGroup.push(friend.name)
    }
    console.log(ageGroup);
    return [ friend.name, friend.salary ]
},0)