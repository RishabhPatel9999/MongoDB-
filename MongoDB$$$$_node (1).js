
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



db.Employee_Data.insertMany([
    {
      employee_id: "E1001",
      first_name: "John",
      last_name: "Doe",
      email: "john.doe@example.com",
      phone: "555-1234",
      position: "Software Engineer",
      department: "IT",
      salary: 85000,
      hire_date: { "$date": "2021-03-15T00:00:00Z" },
      is_active: true,
      address: {
        street: "123 Elm St",
        city: "San Francisco",
        state: "CA",
        zip: "94107"
      },
      skills: ["JavaScript", "Node.js", "MongoDB"]
    },
    {
      employee_id: "E1002",
      first_name: "Jane",
      last_name: "Smith",
      email: "jane.smith@example.com",
      phone: "555-5678",
      position: "HR Manager",
      department: "HR",
      salary: 75000,
      hire_date: { "$date": "2020-06-01T00:00:00Z" },
      is_active: true,
      address: {
        street: "456 Oak St",
        city: "New York",
        state: "NY",
        zip: "10001"
      },
      skills: ["Communication", "Recruiting"]
    },
    {
      employee_id: "E1003",
      first_name: "Michael",
      last_name: "Johnson",
      email: "michael.johnson@example.com",
      phone: "555-9012",
      position: "Project Manager",
      department: "IT",
      salary: 95000,
      hire_date: { "$date": "2019-11-20T00:00:00Z" },
      is_active: true,
      address: {
        street: "789 Pine St",
        city: "Seattle",
        state: "WA",
        zip: "98101"
      },
      skills: ["Leadership", "Agile", "Scrum"]
    },
    {
      employee_id: "E1004",
      first_name: "Emily",
      last_name: "Davis",
      email: "emily.davis@example.com",
      phone: "555-3456",
      position: "Marketing Specialist",
      department: "Marketing",
      salary: 65000,
      hire_date: { "$date": "2022-01-10T00:00:00Z" },
      is_active: true,
      address: {
        street: "321 Maple St",
        city: "Austin",
        state: "TX",
        zip: "73301"
      },
      skills: ["SEO", "Content Marketing", "Social Media"]
    },
    {
      employee_id: "E1005",
      first_name: "David",
      last_name: "Wilson",
      email: "david.wilson@example.com",
      phone: "555-7890",
      position: "Data Analyst",
      department: "IT",
      salary: 72000,
      hire_date: { "$date": "2018-09-25T00:00:00Z" },
      is_active: false,
      address: {
        street: "654 Cedar St",
        city: "Denver",
        state: "CO",
        zip: "80202"
      },
      skills: ["SQL", "Python", "Data Visualization"]
    },
    {
      employee_id: "E1006",
      first_name: "Sophia",
      last_name: "Martinez",
      email: "sophia.martinez@example.com",
      phone: "555-2345",
      position: "Accountant",
      department: "Finance",
      salary: 70000,
      hire_date: { "$date": "2020-03-11T00:00:00Z" },
      is_active: true,
      address: {
        street: "987 Birch St",
        city: "Chicago",
        state: "IL",
        zip: "60601"
      },
      skills: ["Accounting", "Excel", "Tax Preparation"]
    },
    {
      employee_id: "E1007",
      first_name: "James",
      last_name: "Brown",
      email: "james.brown@example.com",
      phone: "555-6789",
      position: "Customer Support",
      department: "Support",
      salary: 48000,
      hire_date: { "$date": "2023-02-01T00:00:00Z" },
      is_active: true,
      address: {
        street: "234 Spruce St",
        city: "Boston",
        state: "MA",
        zip: "02108"
      },
      skills: ["Communication", "Problem Solving"]
    },
    {
      employee_id: "E1008",
      first_name: "Olivia",
      last_name: "Taylor",
      email: "olivia.taylor@example.com",
      phone: "555-1122",
      position: "UX Designer",
      department: "Design",
      salary: 78000,
      hire_date: { "$date": "2021-07-14T00:00:00Z" },
      is_active: true,
      address: {
        street: "567 Walnut St",
        city: "Portland",
        state: "OR",
        zip: "97205"
      },
      skills: ["UI/UX", "Adobe XD", "Figma"]
    },
    {
      employee_id: "E1009",
      first_name: "William",
      last_name: "Moore",
      email: "william.moore@example.com",
      phone: "555-3344",
      position: "DevOps Engineer",
      department: "IT",
      salary: 90000,
      hire_date: { "$date": "2019-05-30T00:00:00Z" },
      is_active: true,
      address: {
        street: "890 Chestnut St",
        city: "San Jose",
        state: "CA",
        zip: "95112"
      },
      skills: ["AWS", "Docker", "Kubernetes"]
    },
    {
      employee_id: "E1010",
      first_name: "Isabella",
      last_name: "Anderson",
      email: "isabella.anderson@example.com",
      phone: "555-5566",
      position: "Sales Representative",
      department: "Sales",
      salary: 62000,
      hire_date: { "$date": "2020-08-20T00:00:00Z" },
      is_active: true,
      address: {
        street: "135 Willow St",
        city: "Miami",
        state: "FL",
        zip: "33101"
      },
      skills: ["Negotiation", "CRM", "Networking"]
    },
    {
      employee_id: "E1011",
      first_name: "Liam",
      last_name: "Thomas",
      email: "liam.thomas@example.com",
      phone: "555-7788",
      position: "Product Manager",
      department: "Product",
      salary: 98000,
      hire_date: { "$date": "2017-12-12T00:00:00Z" },
      is_active: true,
      address: {
        street: "246 Cypress St",
        city: "Dallas",
        state: "TX",
        zip: "75201"
      },
      skills: ["Roadmap", "Leadership", "Agile"]
    },
    {
      employee_id: "E1012",
      first_name: "Mia",
      last_name: "Jackson",
      email: "mia.jackson@example.com",
      phone: "555-9900",
      position: "Content Writer",
      department: "Marketing",
      salary: 54000,
      hire_date: { "$date": "2022-05-05T00:00:00Z" },
      is_active: true,
      address: {
        street: "357 Redwood St",
        city: "Atlanta",
        state: "GA",
        zip: "30303"
      },
      skills: ["Writing", "SEO", "Editing"]
    },
    {
      employee_id: "E1013",
      first_name: "Noah",
      last_name: "White",
      email: "noah.white@example.com",
      phone: "555-2211",
      position: "Network Administrator",
      department: "IT",
      salary: 80000,
      hire_date: { "$date": "2018-10-15T00:00:00Z" },
      is_active: false,
      address: {
        street: "468 Aspen St",
        city: "Phoenix",
        state: "AZ",
        zip: "85001"
      },
      skills: ["Networking", "Security", "Linux"]
    },
    {
      employee_id: "E1014",
      first_name: "Ava",
      last_name: "Harris",
      email: "ava.harris@example.com",
      phone: "555-4433",
      position: "Graphic Designer",
      department: "Design",
      salary: 68000,
      hire_date: { "$date": "2021-09-09T00:00:00Z" },
      is_active: true,
      address: {
        street: "579 Elm St",
        city: "Las Vegas",
        state: "NV",
        zip: "89101"
      },
      skills: ["Photoshop", "Illustrator", "InDesign"]
    },
    {
      employee_id: "E1015",
      first_name: "Ethan",
      last_name: "Martinez",
      email: "ethan.martinez@example.com",
      phone: "555-6655",
      position: "QA Engineer",
      department: "IT",
      salary: 71000,
      hire_date: { "$date": "2019-03-22T00:00:00Z" },
      is_active: true,
      address: {
        street: "680 Spruce St",
        city: "Charlotte",
        state: "NC",
        zip: "28202"
      },
      skills: ["Testing", "Automation", "Selenium"]
    },
    {
      employee_id: "E1016",
      first_name: "Charlotte",
      last_name: "Robinson",
      email: "charlotte.robinson@example.com",
      phone: "555-8877",
      position: "Business Analyst",
      department: "Product",
      salary: 86000,
      hire_date: { "$date": "2020-11-11T00:00:00Z" },
      is_active: true,
      address: {
        street: "791 Oak St",
        city: "Philadelphia",
        state: "PA",
        zip: "19103"
      },
      skills: ["Requirements", "Communication", "Modeling"]
    },
    {
      employee_id: "E1017",
      first_name: "Daniel",
      last_name: "Walker",
      email: "daniel.walker@example.com",
      phone: "555-0099",
      position: "Security Specialist",
      department: "IT",
      salary: 88000,
      hire_date: { "$date": "2018-01-05T00:00:00Z" },
      is_active: true,
      address: {
        street: "802 Pine St",
        city: "Houston",
        state: "TX",
        zip: "77002"
      },
      skills: ["Cybersecurity", "Network Security", "Compliance"]
    },
    {
      employee_id: "E1018",
      first_name: "Amelia",
      last_name: "King",
      email: "amelia.king@example.com",
      phone: "555-2233",
      position: "Legal Advisor",
      department: "Legal",
      salary: 93000,
      hire_date: { "$date": "2017-07-07T00:00:00Z" },
      is_active: true,
      address: {
        street: "913 Cedar St",
        city: "San Diego",
        state: "CA",
        zip: "92101"
      },
      skills: ["Contracts", "Compliance", "Negotiation"]
    },
    {
      employee_id: "E1019",
      first_name: "Matthew",
      last_name: "Scott",
      email: "matthew.scott@example.com",
      phone: "555-4455",
      position: "Operations Manager",
      department: "Operations",
      salary: 91000,
      hire_date: { "$date": "2016-04-17T00:00:00Z" },
      is_active: true,
      address: {
        street: "1024 Maple St",
        city: "Columbus",
        state: "OH",
        zip: "43215"
      },
      skills: ["Logistics", "Planning", "Leadership"]
    },
    {
      employee_id: "E1020",
      first_name: "Ella",
      last_name: "Green",
      email: "ella.green@example.com",
      phone: "555-6677",
      position: "Financial Analyst",
      department: "Finance",
      salary: 78000,
      hire_date: { "$date": "2021-10-01T00:00:00Z" },
      is_active: true,
      address: {
        street: "1135 Birch St",
        city: "Detroit",
        state: "MI",
        zip: "48201"
      },
      skills: ["Excel", "Forecasting", "Budgeting"]
    }
  ])
  

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

db.EmployeeData.updateOne({EmpName:'Rohit'},{$set:{EmpSalary:650000}})
db.EmployeeData.updateOne({EmpName:'Rohit'},{$set:{'KnowLang.1':'C#'}})
db.EmployeeData.updateOne({EmpName:'Rohit',KnowLang:'C#'},{$set:{'KnowLang.0':'PHP'}})
db.EmployeeData.updateOne({EmpName:'Rohit',KnowLang:'Java'},{$set:{'KnowLang.$':'Python'}})

// Mongo Export
'mongoexport --db=allenhouse_db --collection=EmployeeData --out=h:\EmployeeData.csv'
'mongoexport --db=allenhouse_db --collectin=employees --out=h:\employees.json'
