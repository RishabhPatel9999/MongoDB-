
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
//         EmpEMail: "sachin@gmail.com",
//         EmpAge: 47,
//         EmpSalary: 56700.56
//     }
// )

// To select record from collection
// Syntax :
// db.EmployeeData.find()


// To insert many records
// 
db.EmployeeData.insertMany([
    {
        EmpName: "Virat",
        EmpGender: "Male",
        EmpEMail: "kohli@gmail.com",
        EmpAge: 37,
        EmpSalary: 596700.56
    },
    {
        EmpName: "Rahul",
        EmpGender: "Male",
        EmpEMail: "sharma@gmail.com",
        EmpAge: 39,
        EmpSalary: 396700.56
    }
])

// To create colection and add new record
// db.Product_Master.insertOne(
//     {
//         ProName: "S24 Ultra",
//         ProComp: "Samsung",
//         ProPrice: 124000,
//         ProRating: 4.7,
//         ProFeatures: ["100x Xoom", "Stylus", "Super Amoled"]
//     }
// )

db.EmployeeData.find({}, { EmpName: 1, EmpAge: 1 })
db.EmployeeData.find({}, { EmpName: 1, EmpAge: 1, _id: 0 })

db.EmployeeData.find({}, { EmpName: 1, EmpAge: 1, EmpGender: 0 })
// Cannot do exclusion on field EmpGender in inclusion projection AllenHouse25_DB

db.EmployeeData.find({}, { EmpGender: 0, EmpAge: 0 })

db.EmployeeData.find({ EmpName: "Sachin" })

db.EmployeeData.find({ EmpName: { $eq: "Rahul" } })

db.EmployeeData.find({ EmpAge: { $gte: 39 } })

db.EmployeeData.find({ EmpName: { $in: ["Ali", "Faiz", "Virat"] } })

db.EmployeeData.find({ $and: [{ EmpName: "Rahul", EmpGender: "Male" }] })

db.EmployeeData.find({
    $and: [
        { EmpName: { $eq: "Rohit" } },
        { EmpAge: { $not: { $gt: 39 } } }
    ]
}, { EmpName: 1, EmpSalary: 1, _id: 0 })


db.EmployeeData.insertMany([
    {
        EmpName: "Rohit",
        EmpGender: "Male",
        EmpEMail: "sharma@gmail.com",
        EmpAge: 37,
        EmpSalary: 596700.56,
        EmpDept: "CSE"
    },
    {
        EmpName: "John",
        EmpGender: "Male",
        EmpEMail: "doe@gmail.com",
        EmpAge: 39,
        EmpSalary: 396700.56,
        EmpDept: "ME",
        EmpDeg: "Asst. Prof"
    }
])


db.EmployeeData.find({ EmpDept: { $exists: true } })

db.EmployeeData.find({ EmpDept: { $exists: true, $eq: "CSE" } })

db.EmployeeData.find({ $and: [{ EmpDept: { $exists: true, $eq: "CSE" } }] })

db.EmployeeData.find({ EmpAge: { $type: 'int' } })

// Date as String
db.DatesDemo.insertMany([
    {
        EmpName: "Sachin",
        EmpDOJ: Date()
    }
])
db.DatesDemo.find({ EmpDOJ: { $type: 'date' } })

// Date as Date object
db.DatesDemo.insertMany([
    {
        EmpName: "Virat",
        EmpDOJ: new Date()
    }
])

// Date as Date object
db.DatesDemo.insertMany([
    {
        EmpName: "Rahul",
        EmpDOJ: new ISODate()
    }
])

// Date as Date object
db.DatesDemo.insertMany([
    {
        EmpName: "Faizan",
        EmpDOJ: new ISODate('2025-07-18T14:05:57.729Z')
    }
])

// Date as Date object
db.DatesDemo.insertMany([
    {
        EmpName: "Aman",
        EmpDOJ: new ISODate('2025-07-18T14:05:57.729')
    }
])

// Error: Executor error during find command :: caused by :: can't convert from BSON type string to Date
// Date in formated output
db.DatesDemo.find({ EmpDOJ: { $type: 'date' } }, {
    Date_Of_Joining: {
        $dateToString: {
            date: '$EmpDOJ',
            format: '%d-%B-%Y %H:%M:%S'
        }
    }
})


// TO Update Record
db.EmployeeData.updateOne({ EmpName: 'John' }, { $set: { EmpAge: 45 } })

db.EmployeeData.updateOne({ EmpName: 'John' }, { $set: { EmpSalary: 45000, EmpDeg: 'Prof' } })


db.EmployeeData.updateOne({ EmpName: 'Khadija' }, { $set: { EmpSalary: 45000, EmpDeg: 'Prof' } }, { upsert: true })


db.EmployeeData.updateOne({ EmpName: 'Khadija' }, { $set: { EmpSalary: 45000, EmpAge: 20 } }, { upsert: true })



db.EmployeeData.updateOne({ EmpName: 'Faiz' }, { $rename: { EmpEMail: MailID } })


db.EmployeeData.updateMany({}, { $rename: { EmpEMail: 'MailID' } })

db.EmployeeData.deleteOne({ EmpName: "John" })

db.EmployeeData.find().sort({ EmpSalary: 1 })

db.EmployeeData.find().sort({ EmpName: 1 })

db.EmployeeData.find().sort({ EmpName: 1, EmpAge: 1 })

// To find third highest salary record
db.EmployeeData.find().sort({ EmpSalary: -1 }).skip(2).limit(1)



db.EmployeeData.updateMany({ EmpName: { $in: ["Sachin", "Virat"] } }, {
    $set: { about: "I am a Cricket Player" }
})


db.EmployeeData.updateMany({ EmpName: { $in: ["Rahul", "Rohit", "Khadija"] } }, {
    $set: { about: "I am an Engineer" }
})

db.EmployeeData.find({
    EmpName: "Rahul"
})

db.EmployeeData.find({
    about: "Engineer"
})

// Case Sensitive
db.EmployeeData.find({
    about: /Engineer/
})

// Case Insensitive
db.EmployeeData.find({
    about: /engineer/i
})

db.EmployeeData.find({
    EmpName: /a/
})

// Starts with( add ^ before string)
db.EmployeeData.find({
    EmpName: /^S/
})

// Ends with( add $ before string)
db.EmployeeData.find({
    EmpName: /in$/
})


// Third character must be 'a'
db.EmployeeData.find({
    EmpName: /^.{2}a/
})

// Second character must be 'a'
db.EmployeeData.find({
    EmpName: /^.{1}a/
})

// Second last character must be 'i'
db.EmployeeData.find({
    EmpName: /i.{1}$/
})



db.EmployeeData.updateMany({ EmpName: { $in: ["Rahul", "Rohit", "Khadija"] } }, {
    $set: { knownLang: ['C', 'C++', 'Java'] }
})


db.EmployeeData.updateMany({ EmpName: { $in: ["Sachin", "Virat"] } }, {
    $set: { knownLang: ['Perl', 'VB'] }
})

// Array Operations
// Find Record on the basis of array value
db.EmployeeData.find({ knownLang: 'VB' })

// Find Record on the basis of array values contains both
db.EmployeeData.find({ knownLang: { $all: ["C", "C++"] } })


db.EmployeeData.updateMany({ EmpName: { $in: ["Sachin"] } }, {
    $set: { scores: [50, 87] }
})

db.EmployeeData.updateMany({ EmpName: { $in: ["Virat"] } }, {
    $set: { scores: [67, 90] }
})


db.EmployeeData.find({ scores: { $elemMatch: { $gte: 85, $lte: 88 } } })


// Update Array Element
// Duplicate alloweded
db.EmployeeData.updateOne({ EmpName: 'Sachin' }, { $push: { knownLang: 'Python' } })


// Duplicate Not alloweded
db.EmployeeData.updateOne({ EmpName: 'Sachin' }, { $addToSet: { knownLang: 'Python' } })

db.EmployeeData.updateOne({ EmpName: 'Sachin' }, { $addToSet: { knownLang: 'C#' } })

db.EmployeeData.updateOne({ EmpName: 'Sachin' }, { $pull: { knownLang: 'Python' } })

// Aggr
db.employees.aggregate([
    {
        $project: { firstName: 1, lastName: 1 }
    }
])


db.employees.aggregate([
    {
        $match: { gender: 'male' }
    }
])

db.employees.aggregate([
    {
        $match: { salary: { $gte: 7000 } }
    }
])

db.employees.aggregate([{
    $group: {
        _id: '$department.name'
    }
}])


db.employees.aggregate([{
    $group: {
        _id: '$department.name',

        TotalSalary: { $sum: '$salary' },
        AverageSalary: { $avg: '$salary' },
        MaxSalary: { $max: '$salary' },
        MinSalary: { $min: '$salary' },
    }
}
])

db.employees.aggregate([{
    $group: {
        _id: '$department.name',

        TotalSalary: { $sum: '$salary' },
        AverageSalary: { $avg: '$salary' },
        MaxSalary: { $max: '$salary' },
        MinSalary: { $min: '$salary' },

        TotalEmployees: { $sum: 1 }
    }
},
{
    $sort: { AverageSalary: 1, TotalEmployees: -1 }
},
{
    $limit: 3
}
])


// Group, Count, Sort
db.employees.aggregate([{ $sortByCount: '$department.name' }])










db.EmployeeData.aggregate([{ $group: { _id: '$knownLang' } }])




db.EmployeeData.aggregate([{ $unwind: '$knownLang' }, { $group: { _id: '$knownLang' } }])

db.EmployeeData.aggregate([{ $unwind: '$knownLang' }, { $sortByCount: '$knownLang' }])

db.EmployeeData.updateOne({ EmpName: 'Rohit' }, { $set: { EmpSalary: 650000 } })



db.EmployeeData.updateOne({ EmpName: 'Rohit' }, { $set: { 'knownLang.1': 'C#' } })


db.EmployeeData.updateOne({ EmpName: 'Rohit', knownLang: 'Java' }, { $set: { 'knownLang.$': 'Python' } })

// Mongo Export
'mongoexport --db=AllenHouse25_DB --collection=employees --out=h:\employees.csv'
'mongoexport --db=AllenHouse25_DB --collection=employees --out=h:\employees.json'



'mongoimport --db=Demo123 --collection=employees1 --file=h:\employees.json --type=json'




























