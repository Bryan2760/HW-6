
//give UL an id since it doesnt have an ID (selects the second UL as well)

document.querySelectorAll("ul")[2].setAttribute("id", "test");
console.log(document.getElementById("test"));

//give the list an ID 
function list () {
var x = document.getElementsByTagName("li")[9];
x.setAttribute("id","list");
console.log(document.getElementById("list"));
}
list()


const link = ["https://www.csulb.edu/college-of-business"]

//adds element under the UL ID and then placed into list ID
const COB = document.createElement("a");
COB.id = "newlink";          // Define element ID
COB.textContent = "College of Business";
COB.href = link
document.getElementById("test").insertBefore(COB, document.getElementById("list"));




