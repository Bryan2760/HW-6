//Complete code for the following function
//Display text for 400 level courses
const displayText400 = () => {
  // console.log(Array.from(document.getElementsByClassName("400level")));
  const existingElements = Array.from(document.getElementsByClassName("400level"));
    existingElements.forEach(element => {
    console.log(element.innerText);
})
}
displayText400();
