/*

Introduction:
Functions and arrays are building blocks of JavaScript logic.

Objective:

Write reusable functions.
Work with arrays.
Steps:

Create an array of 5 student names.
Write a function to display all names in a list.
Add functionality to search for a name.
Expected Outcome:
A script that dynamically handles and displays array data.


*/


let students = ["Rohan", "Sham","Nandan","Rohan","Gaj"];

function getStudentList(){
    return students;
}
/*for each could be possible but why to iterate this without any reason */


// search

function searchName(nameToFind){
    if(students.includes(nameToFind)){
        return ("Yes" + nameToFind + "Is Present in the database")
    }
    else{
        return 
    }
}