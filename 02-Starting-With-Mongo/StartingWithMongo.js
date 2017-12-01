/* 18.1.2-Starting with Mongo JS
 * -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/- */


// A. Use the command line to create a classroom database. 
use classroomdb
// Insert entries for yourself and the people in your row in a students collection. 
// Each document should have:

// 1. A field of name with the person's name.
// 2. A field of rownumber which will contain the row number that they are in.
// 3. A field of os which will contain the Operating System 
//    of the computer they are using: 'Mac', 'Win', etc
// 4. A field of hobbies with an array of the hobbies the person likes to do.
 db.classroom.insert({"name": "Jay", "row": 1, "OS": "MAC", "Hobbies":["Soccer","Gym", "Coding"]})
 db.classroom.insert({"name": "Yaj", "row": 1, "OS": "MAC", "Hobbies":["Soccer","Gym", "Coding"]})



// B. Use find commands to get: 
db.classroom.find()
// 1. A list of everyone in your row.
db.classroom.find({"row":"1" })
// 2. An entry for a single person.

// 3. The entries for all the Mac users in your row. 
db.classroom.find({"OS":"MAC" })

// Bonus:
// If you finish early, check out the MongoDB documentation 
// and figure out how to find users by an entry in an array.
