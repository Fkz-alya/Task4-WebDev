//Here, we specify the necessary parameters for the BinarySearch function, 
//where list is the array and item is the element whose index we will be searching for within the array
function binarySearch(list, item) {
    //In order to find a middel index, we take the lowest possible index (0) and the highest one for this array. 
    //We can find the highest index through finding the length of the array.
    let low = 0;
    let high = list.length;
    //The sort function works in lexical order. Thus, the function will sort numbers according to their lexical meaning.
    //In order to sort elements as required, this method will compare every two numbers in the array and return one of three results: 
    //0 (prev == next), which means that these two elements must not be sorted, 
    //more than 0 (prev > next), which means that the elements must be swapped, 
    //less than 0 (prev < next), which means that these two elements have the right order.
    list.sort((prev, next) =>  prev - next);
   
    //This loop means that we will continue searching for the index until all possible options have been considered.
    while (low <= high) {
        //Binary search uses a method where it compares the middle element of the array with the element we are searching for. 
        //So here, we calculate the middle index.
        let mid = (low + high) / 2;
        //Here, we round the number in case the index for the middle element is the result of dividing an odd number by two.
        mid = Math.round(mid);
        //Then we write the number with the middle index in a variable "guess" in order to compare it with the element, whose index we want to find.
        let guess = list[mid];
        
        //If the middle number equals to the number in the parameter list, then we will just return the index of the element.
        if (guess == item) {
            return mid;
        } 
        //If the middle number is greater than the target number in the list, 
        //we discard the half of the array that also contains numbers greater than the target.
        else if (guess > item) {
            high = mid - 1;
        } 
        //If the middle number is less than the target number in the list, 
        //we discard the half of the array that also contains numbers less than the target.
        else {
            low = mid + 1;
        }
    }
    //If the target number does not exist in the array, we return null.
    return null;
    
}

