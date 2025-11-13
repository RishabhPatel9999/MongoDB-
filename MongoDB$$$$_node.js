
// To create or use Database
// Syntax : use databaseName
// eg: "use AllenHouse25_DB"

// To create Collection
// Syntax : db.createCollection("CollectionName")
// eg: db.createCollection("EmployeeData")

// To Insert into collection
// Syntax :

// db.EmployeeData.insertOne(
//     {
//         EmpName: "Sachin",
//         EmpGender: "Male",
//         Empmail: "sachin@mail.com",
//         EmpAge: 47,
//         EmpSalary: 280000
//     }
// )



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



// db.EmployeeData.find({}, {'0.EmpName': 1, EmpAge: 1})
// db.EmployeeData.find({},{EmpName; 1, EmpAge: 1})
// db.EmployeeData.find({}, {'0.EmpName': 1, '0.EmpAge': 1})

// db.EmployeeData.find({},{EmpName; 1, EmpAge: 1, _id: 0})
// db.EmployeeData.find({}, {'0.EmpName': 1, EmpAge: 1, _id: 0})


// db.EmployeeData.find({EmpName: "Sachin"})
// db.EmployeeData.find({'0.EmpName': "Sachin"})
// 
// db.EmployeeData.find({EmpName: { $eq: "Rahul"}})
// 
// 
// db.EmployeeData.find({EmpName: { $gta: "Rahul"}})
// 
// db.EmployeeData.find({EmpName: { $in:["Ali","Faiz","Virat"]}})
// 
// db.EmployeeData.find({EmpDept: { $exists: true,$eq:"CSE"}})
// 
// db.EmployeeData.find({EmpDept: { $exists: true}})
// 
// db.EmployeeData.find({$and:[{EmpDept: { $exists: true,$eq:"CSE"}}]})
// 
// db.EmployeeData.find().count()
// db.EmployeeData.find().pretty()


// insert Students_Data
db.Students_Data.insertMany([
    {StuName: "Ujjwal",
     StuAge: 22,
     StuEmail: "ujjwal@gmail.com",
     StuSgpa: 7.8,
    StuStream: "AIML",
    StuGender:"Male",
    StuLanguage: ["c++","Java","Python"],
       StuLocADD:{
        City: "Varanasi",
        State: "Uttar Pradesh",
        Country: "India",
        Pincode: 208001
       } },
    {StuName: "Rohan",
     StuAge: 23,
     StuEmail: "rohan@gmail.com",
        StuSgpa: 8.2,
    StuStream: "AIML",
    StuGender:"Male",
    StuLanguage: ["c++","Java","Python"],
       StuLocADD:{
        City: "Kanpur",
        State: "Uttar Pradesh",
        Country: "India",
        Pincode: 208001
       } },
    {StuName: "Sita",
     StuAge: 24,
        StuEmail: "sita@gmail.com",
        StuSgpa: 9.0,
    StuStream: "AIML",
    StuGender:"Female",
    StuLanguage: ["c++","Python"],
       StuLocADD:{
        City: "Agra",
        State: "Uttar Pradesh",
        Country: "India",
        Pincode: 208041
       } },
])

db.departments.insertMany([
    {
        departmentId: 1,
        name: "HR",
        location: "Building A"
    },
    {
        departmentId: 2,
        name: "Engineering",
        location: "Building B"
    },
    {
        departmentId: 3,
        name: "Sales",
        location: "Building C"
    }
])



db.employees.insertMany([
    {
        employeeId: 1001,
        firstName: "John",
        lastName: "Doe",
        departmentId: 1,
        position: "HR Manager",
        salary: 60000,
        hireDate: new Date("2020-01-15")
    },
    {
        employeeId: 1002,
        firstName: "Jane",
        lastName: "Smith",
        departmentId: 2,
        position: "Software Engineer",
        salary: 80000,
        hireDate: new Date("2019-08-22")
    },
    {
        employeeId: 1003,
        firstName: "Bob",
        lastName: "Johnson",
        departmentId: 3,
        position: "Sales Executive",
        salary: 70000,
        hireDate: new Date("2021-03-10")
    }
])



db.employees.insertMany([
    { 
        _id:1,
        firstName: "John",
        lastName: "King",
        gender:'male',
        email: "john.king@abc.com",
        salary: 5000,
        department: { 
                    "name":"HR" 
                }
    },
    { 
        _id:2,
        firstName: "Sachin",
        lastName: "Tendulkar",
        gender:'male',
        email: "sachin.t@abc.com",
        salary: 8000,
        department: { 
                    "name":"Finance" 
                }
    },
    { 
        _id:3,
        firstName: "Virat",
        lastName: "kohli",
        gender:'male',
        email: "kohli@abc.com",
        salary: 7500,
        department: { 
                    "name":"Marketing" 
                }
    },
    { 
        _id:4,
        firstName: "Rohini",
        lastName: "Sharma",
        gender:'female',
        email: "roh@abc.com",
        salary: 5000, 
        department: { 
                    "name":"HR" 
                }

    },
    { 
        _id:5,
        firstName: "Kapil",
        lastName: "Dev",
        gender:'male',
        email: "kapil.d@abc.com",
        salary: 4500,
        department: { 
                    "name":"Finance" 
                }

    },
    { 
        _id:6,
        firstName: "Amit",
        lastName: "B",
        gender:'male',
        email: "amit.b@abc.com",
        salary: 7000,
        department: { 
                    "name":"Marketing" 
                }
    },
{ 
        _id:7,
        firstName: "Atul",
        lastName: "Gupta",
        gender:'male',
        email: "amitgupta@abc.com",
        salary: 7000,
        department: { 
                    "name":"Technical" 
                }
    },
{ 
        _id:8,
        firstName: "Tanisha",
        lastName: "Chauhan",
        gender:'female',
        email: "tanisha@abc.com",
        salary: 6500,
        department: { 
                    "name":"Marketing" 
                }
    }

])



// Data in formated output
db.DatesDemo.find({EmpDoj: {$type:'date'}},{
    Date_of_joining:{
        $dateToString:{
            date:'$EmpDoj',
            format:'$d-$m-$Y %H:%M:%S'
        }
    }
})



// To Update Record
db.EmployeeData.updateOne({EmpName:'John'},{$set:{EmpSalary:45000,EmpDeg:'Prof'}})

// To Update 
db.EmployeeData.updateOne({EmpName:'Khadija'},{$set:{EmpSalary:45000,EmpDeg:'Prof'}},{upsert:true})
db.EmployeeData.updateMany({EmpName:'Khadija'},{$set:{EmpSalary:45000,EmpAge:20,EmpDeg:'Prof'}},{upsert:true})

// To Rename
db.EmployeeData.updateOne({EmpName:'Khadija'},{$rename:{Empmail:'EmpID'}})
db.EmployeeData.updateMany({EmpName:'Khadija'},{$rename:{Empmail:'EmpID'}})

// To Remove
db.EmployeeData.updateMany({EmpName:'Khadija'},{$rename:{Empmail:'EmpID'}})

// To Delete
db.EmployeeData.deleteOne({EmpName:"Khadija"})

// To Skip
db.EmployeeData.find().skip(2)

// To Sort
db.EmployeeData.find().sort({EmpSalary:1})
db.EmployeeData.find().sort({EmpSalary:1,EmpAge:1})
db.EmployeeData.find().sort({EmpName:1})

// To find third highest salary record
db.EmployeeData.find().sort({EmpSalary:-1}).skip(2).limit(1)

db.EmployeeData.find({
    about:"Engineer"
})

db.EmployeeData.find({
    about: /Engineer/
})

db.EmployeeData.find({
    about: /Engineer/i
})

db.EmployeeData.find({
    about: /R/
})

db.EmployeeData.find({
    EmpName: /^S/
})

db.EmployeeData.find({
    EmpName: /in$/
})

db.EmployeeData.find({
    EmpName:/a$/
})

db.EmployeeData.find({
    EmpName:/^S/
})

db.EmployeeData.find({
    EmpName:/^.{2}a/
})

db.EmployeeData.find({
    EmpName:/^.{1}a/
})

db.EmployeeData.find({scores:{$elemMatch:{$gte:85}}})

db.EmployeeData.find({EmpName: {$in: ["Virat"]} ,$set: {scores:[67,90]}})

db.EmployeeData.updateOne({EmpName:'Sachin'},{$addToSet:{KnowLang:'Python'}})
db.EmployeeData.updateOne({EmpName:'Sachin'},{$addToSet:{KnowLang:''}})
db.EmployeeData.updateOne({EmpName:'Sachin'},{$push:{KnowLang:'Python'}})
db.EmployeeData.updateOne({EmpName:'Sachin'},{$pull:{KnowLang:'Python'}})


// Aggr
db.EmployeeData.aggregate([
    {
        $project:{FirstName:1,LastName:1}
    }
])


db.EmployeeData.aggregate([
    {
        $match:{EmpGender:'Male'}
    }
])


db.EmployeeData.aggregate([
    {
        $match:{EmpSalary:{$gte:7000}}
    }
])

db.EmployeeData.aggregate([
    {
        $group:{
            _id:'$department.name'
        }
    }
])


db.EmployeeData.aggregate([
    {
        $group:{
            _id:'$department.name', TotalSalary:{$sum:'$salary'}
        }
    }
])

db.EmployeeData.aggregate([
    {
        $group:{
            _id:'$department.name', AverageSalary:{$avg:'$salary'}
        }
    }
])


db.EmployeeData.aggregate([
    {
        $group:{
            _id:'$department.name', 
            AverageSalary:{$avg:'$salary'},
            MaxSalary:{$max:'$salary'},
            MinSalary:{$min:'$salary'},

            TotalEmployees:{$sum:1}
        }
    },
    {
        $sort:{AverageSalary:1, TotalEmployees:-1}
    },
    {
        $limit:3
    }
])


db.EmployeeData.aggregate([
    {
        $sortByCount:'$department_name'
    }
])

db.EmployeeData.aggregate([
    {
        $group:{_id:'KnowLang'}
    }
])


db.EmployeeData.aggregate([{$unwind:'$KnowLang',$sortByCount:'KnowLang'}])