// Slideshow
const slideshowDivs = () =>{
    for(let i=1; i<=5; i++){
        // create a new div to be added to the html
        const div = document.createElement('div')
        // create a new div with each iteration of the for loop above and style it with a background image from the images folder..each image has a number 1 through 5 at the end of the image name and ${i} in the code updates that last number to select the correct image.
        div.style.backgroundImage = `url(images/slideshow/section-1-bg-${i}.jpg)`
        // with each iteration, add the new div to the parent div in the html with the class of slideshow using appendChild
        

        // display the first image by default--when i === 1, it means it is the first iteration, and this is the moment when the class change needs to be added. classList allows access to all the classes in the div, it also provides access to the add method to add the new change class to the div.

        // this line of code is called short circuiting--the logical and (&&) requires everything to be true or truthy--if i was not equal to 1 below, the code on the right side of the && would never run and the change class would not be added. Short circuiting here allow you to not have to add the extra lines of code required to create an if else statement and achieves the same result.
        i === 1 && div.classList.add('change')

        document.querySelector('.slideshow').appendChild(div)
    }
}

slideshowDivs()

// to make the slide show work, remove and add class change to the divs in specific intervals and make it infinite.--First select all the divs in the slideshow div.
const divs = document.querySelectorAll('.slideshow div')
// 5-- a counter has to be created to count the number of iterations to continue the steps to make the slideshow work.
let a = 1
// 1-- Next create a function called slideshow and use the function setInterval which allows the function to be run over and over at a specified interval. It takes two arguments, first the callback function that will be run at certain intervals and second the interval itself expressed in milliseconds.

// after steps 1 through 4 are completed, and all 5 images show up an error message occurs because nextElementSibling returns null when it reaches the last div and tries to return the div after the last one and the slideshow stops working because once the setInterval function reaches the last div, the javascript engine cannot find another sibling, and the error message is: Cannot read property 'classlist' of null, it doesnt exist..
const slideshow = () =>{
    setInterval(() =>{
        //6--  increment the counter by one to track the current iterations number of runs.
        a++
        // 2-- next, select the div element with the class change on it
        const div = document.querySelector('.slideshow .change')

        // 3-- then remove the class change from the element.
        div.classList.remove('change')
        // 6-- create if statement to track if the counter (a) is greater than the number of divs-true means there is another div and false means the setInterval needs to start over 
        if(a<divs.length){       
            // 4-- then add the class change to the next element
            div.nextElementSibling.classList.add('change')
        }else{
            // 7--if a is greater than the number of divs, select the first div and add the change class back to it.nextElementSibling returns a node list of the items that match the search, in this case, all the divs in the slideshow div. These divs in this node list can be accessed using standard array notation. The node list is not an array so the array methods wont work with it. To convert to an array use Array.from(nodeList).
            divs[0].classList.add('change')
            // 8-- change the counter back to 1.
            a=1
        }
    }, 20000)
}

slideshow()


// End of Slideshow