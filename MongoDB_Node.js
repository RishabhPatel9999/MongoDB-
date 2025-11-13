
// To create or use Database
// Syntax : use databaseName
// eg: "use AllenHouse25_DB"

// To create Collection
// Syntax : db.createCollection("CollectionName")
// eg: db.createCollection("EmployeeData")

// To Insert into collection
// Syntax :

//db.EmployeeData.insertOne(
//    {
//        EmpName: "Sachin",
//        EmpGender: "Male",
//        Empmail: "sachin@mail.com",
//        EmpAge: 47,
//        EmpSalary: 280000
//    }
//)

// To select record from collection
// Syntax :
// db.EmployeeData.find()

// To insert many record


// db.EmployeeData.insertMany(
//    {
//        EmpName: "Sachin",
//        EmpGender: "Male",
//        Empmail: "sachin@mail.com",
//        EmpAge: 47,
//        EmpSalary: 280000
//    }
//    {
//        EmpName: "Rame",
//        EmpGender: "Male",
//        Empmail: "ram@mail.com",
//        EmpAge: 46,
//        EmpSalary: 280000
//    }

// )    

// db.Product_Master.insertOne(
//     {
//         ProName: "S24 Ultra",
//         ProComp: "Samsong",
//         ProPrice: "2390000",
//         ProPating: "4.7",
//         ProSalary: "450000"
//     }
// )
// 
// db.EmployeeData.find({}, {'0.EmpName': 1, EmpAge: 1})
// db.EmployeeData.find({},{EmpName; 1, EmpAge: 1})
// db.EmployeeData.find({}, {'0.EmpName': 1, '0.EmpAge': 1})

// db.EmployeeData.find({},{EmpName; 1, EmpAge: 1, _id: 0})
// db.EmployeeData.find({}, {'0.EmpName': 1, '0.EmpAge': 1, _id: 0})


db.EmployeeData.find({EmpName: "Sachin"})
db.EmployeeData.find({'0.EmpName': "Sachin"})

db.EmployeeData.find({EmpName: { $eq: "Rahul"}})


db.EmployeeData.find({EmpName: { $gta: "Rahul"}})

db.EmployeeData.find({EmpName: { $in:["Ali","Faiz","Virat"]}})

db.EmployeeData.find({EmpDept: { $exists: true,$eq:"CSE"}})

db.EmployeeData.find({EmpDept: { $exists: true}})

db.EmployeeData.find({$and:[{EmpDept: { $exists: true,$eq:"CSE"}}]})

db.EmployeeData.find().count()
db.EmployeeData.find().pretty()
