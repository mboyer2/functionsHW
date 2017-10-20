// 1. Write a function which takes an array of numbers, and returns the largest number in that array.

var largest = function(array){                // function finds the largest number in array
	
	var largestNumber= -Infinity			// largestNumber is declared as the lowest possible number
	
	for( var i = 0 ; i < array.length ; i++){ //loop iterations 0,1,2
	
		if (array[i] > largestNumber){		// (1). if number value of array element is > than -infinity
			largestNumber = array[i]		// it is the largest number. (2).  Reapeat loop with 2nd number in 
		}									// array, if 2nd number is greater than first number, now it is
	}										// the largest number. Reapeat step (2) with all iterators. 
	return largestNumber
}
											
let lnum = largest([1,2,3])					// creating a variable fpr specific array[1,2,3]
console.log(lnum)							// console logging new variable.

// 2. Write a function which, given a year as a number, returns whether that number is a leap year.


var isLeapYear = function(year){						// if the year is divisible by 4but not 100, its leap year

	if ( year % 4 === 0 && year % 100 !== 0 ){
		console.log("Its a leap year, true")
	
	} else if ( year % 100 === 0 && year % 400 === 0){	//IF the year is divisible by 100 and 400 its a leapyear
		console.log("Its a Leap Year, true")
	
	} else {
		console.log("Its not a Leap Year, false")				//else, its not a leap Year
	}
}

isLeapYear(2004)										


// 2000 -> true
// 1901 -> false
// 2016 -> true

// 3. Write a function which takes an array of integers > 0 and returns the first integer which does not appear in that array. --------------INCOMPLETE




// [1,2,5] -> 3
// [1,2,3,4,5] -> 6
// [3,4,5] -> 1

 // 4. Write a function which takes an array of integers and returns an array with any duplicate integers removed.

var noRepeats = function(array){

	var newArray = []

	for ( var i = 0; i < array.length; i++){

		if (!newArray.includes(array[i]) ){
			newArray.push(array[i])
		}
	}
	console.log(newArray)
	return newArray
	
}

console.log(noRepeats([1,2,2,3,5,2]))

// [1,1,2,3,1,2,3] -> [1,2,3]
// [1,4,4,4,2,2,4,4,4] -> [1,4,2]

//5. Write function that translates a text to Pig Latin, and another that translates back. -------------------------------------------------  INCOMPLETE 
 // English is translated to Pig Latin by taking the first letter of every word, moving it to 




var piglatin = function(string){
	var firstLetters
	var splitter
	splitter = string.split(" ")						// here I have removed spaces from the strings and have created an array

	console.log(splitter)

	for(var i = 0; i < splitter.length; i++){
		firstLetters =  splitter[i].substring(0,1)		//now i have a new variable listing the first letters removed as strings?
		
														//???????????????????????????????????????????

	console.log(firstLetters)
	}
}
	

piglatin("The quick brown fox")






// "The quick brown fox" -> "Hetay uickqay rownbay oxfay".


// 6. Write a function which takes in two arrays and determines if they contain the same number of the same values.

var sameSame = function(array1, array2){			//accepts 2 parameters 
	if (array1.length !== array2.length){			//if the the length of the array1 is not equal to the length of array2, then false
		console.log("false")
		return false
	}

	for ( var i = 0; i < array1.length; i++){		//loop through each element of array 1. If array2 doesnt include the value of element in array1, then false
		if (!array2.includes(array1[i]) ){
		console.log(false)	
		return false
		} 
	}
	for ( var i = 0; i < array2.length; i++){		//loop through each element of array 1. If array1 doesnt include the value of element in array2, then false
		if (!array1.includes(array2[i]) ){
		console.log(false)	
		return false
		} else 
			console.log(true)						//if both arrays include all values, true
			return true
		}
	}
	
sameSame([1,2,3,6], [2,1,3,3])
	
// [], [] -> true
// [2, 3, 4], [1, 2, 3] -> false
// ["a", "c", "b"], ["a", "b", "c"] -> true
// [1, 1, 1], [1, 1, 1, 1] -> false

// 7. Write a function which takes in an array of numbers and a max cutoff value, and returns a new array with 
//elements limited by the cutoff value.

var maxReplace = function(array, maxNumber){	//array and maxNumber parameters

	for( var i = 0; i < array.length; i++){		//if the iterator of the array is greater than maxNumber
		if ( array[i] > maxNumber){				// the iterator is the maxNumber
			array[i] = maxNumber
		}
	}
		console.log(array)
		return array
}
	maxReplace([1,2,3,4,5,6,7], 4)


// [1,2,3,4,5,6,7,8], 4 -> [1,2,3,4,4,4,4,4]
// [1,5,7,3,1,5,7], 3 -> [1,3,3,3,1,3,3]

// 8. Write a function which takes no input and returns an array of 10 distinct randomly generated integers between 1 and 100.----------------// INCOMPLETE 

// var randomArray = function(){							//loop through an iteration of 10, each value looped is randomized 1-100,
// 	var theArray = []									//each iteration is pushed into a new array
// 	var newArray = []									// does not work, line 63 tainted
// 	for (var i = 0; i < 10; i++){
// 		theArray[i] = Math.ciel(Math.random()*100)
// 		newArray.push(theArray[i])
// 	}
// 	console.log(newArray)
// 	return newArray
// }
// 	randomArray()

// -> [48, 5, 32, 2, 10, 11, 34, 95, 82, 93] (good!)
// -> [1, 1, 24, 63, 45, 84, 17, 11, 59, 13] (bad - duplicated number)

//9. Write a function which takes two sorted lists and merges them into a new sorted list.---------------------------------------  COMPLETE BUT COPIED
var mergeSortedArray = function(array1,array2){
	for( var i = 0 ; i < array2.length ; i++ ){
		array1.push(array2[i])
	}
	//console.log(a);
for( i = 0 ; i < array1.length; i++)
    {
        for( j = i + 1 ; j < array1.length; j++ ) 
        {
            if(array1[i]>array1[j])
            {
                temp = array1[i]
                array1[i] = array1[j]
                array1[j] = temp
            }
        }
    }
    return array1
}
console.log(mergeSortedArray([1,2,3,5,9],[4,6,7,8,9]));


 

// [1,2,5,6,9], [3,4,5,10] -> [1,2,3,4,5,5,6,9,10]
// [], [] -> []
// [-1, 0, 1], [-2, 2] -> [-2, -1, 0, 1, 2]

// 10. Write a function which accepts two arrays as input. The function should remove all the items from the shorter array, 
//and add them to the end of the longer array. If both arrays are the same length, the function should do nothing. 
//This function does not need to return a value. 

var joinArray = function(arrayA, arrayB){					//two parameters
	var completeArrayA
	var completeArrayB										// defining soon to be used variables
	var mixedArray

	if (arrayA.length === arrayB.length){					// if the arrays ar the same length, do nothing
		completeArrayA = arrayA
		completeArrayB = arrayB

		console.log(completeArrayA, completeArrayB)
	}else if (arrayA.length > arrayB.length){				// if array A is longer than array B, dump array B into 
		mixedArray = arrayA.concat(arrayB)					//array A by concatenating. Call the new array mixedArray

		console.log(mixedArray)
	}else {
		mixedArray = arrayB.concat(arrayA)					// if none of those, dump array A into B, and call that 
															// new array mixedArray
		console.log(mixedArray)
	}
}

joinArray([1,2,3], ['cat',6,7,8])


// ```javascript
// var numbers = ['four', 'eleven']
// var animals = ['cat', 'bat', 'dolphin']
// arrayTransfer(numbers, animals)
// console.log(numbers) // []
// console.log(animals) // ['cat', 'bat', 'dolphin', 'four', 'eleven']

// ```

// 11. Write a function that uses `Math.random()` to generate a random number between 0-1. Replace all the 3's with 8's,
// and replace all the 7's with 1's, then return this number. Note that this function should return a `number`, not a `string`.

var myReplace = function(number){						

	var replaced3Number 
	var finalNumber 
	var arrayNumber
	

	number = Math.random()										//creating random number
	console.log(number)

	arrayNumber = number.toString().split("")
	console.log(arrayNumber)

	for (var i = 0; i < arrayNumber.length; i++){

		if (arrayNumber[i] === "3") {
			arrayNumber[i] = "8"
			console.log(arrayNumber) 
		}
		if (arrayNumber[i] === "7") {
 			arrayNumber[i] = "1"
 			console.log(arrayNumber)
		}
			console.log(parseFloat(arrayNumber.join("")))

	}
	return parseFloat(arrayNumber.join(""))
}


 	myReplace()


 







// 12. Write a function which accepts a sentence as a string, and returns the longest word in that sentence.

// var longest = function(sentence){
// 	var sentenceArray
// 	var longestWord = 0

// 	sentenceArray = sentence.split(" ")
// 	console.log(sentenceArray)

// 	for (var i = 0; i <sentenceArray.length; i++)
// 		if (sentenceArray[i].length > longestWord){
// 			longestWord = sentenceArray[i]
// 		}
// 	console.log(longestWord)
// }
	
// 	longest(i am friends with a goat)


// 'I ate toast for breakfast' -> 'breakfast'


// 13. Write a function which accepts a sentence as a string. Capitalize the first letter of each word of the string, and return that. 

// 'I ate toast for breakfast' -> 'I Ate Toast For Breakfast'


// 14. Write a function which takes two dates as strings in the format 'YYYY/MM/DD' and returns the number of days between them.
// '1998/01/24', '1999/01/25' -> 366

// 15. Write a function called `add` that adds two numbers together, and returns the result. The function must be defined such that it can be called in two different ways to achieve the same result. See the example below:

// ```javascript
// var seven = add(5,2) // returns 7
// seven = add(5)(2) // also returns 7
// ```

// 16. Write a function which takes one argument, and returns true if that argument is a whole number (a non-negative integer, e.g. 0, 1, 5, 21, 1000, etc). If the argument is negative, is a decimal number, or is not a number at all, return false. 

// 17. Write a function which returns a random integer from 1 to 10.





