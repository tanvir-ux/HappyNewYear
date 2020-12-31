function HappyNewYear(year) {            
       if(typeof(year) === "number") {
        if(year === 2021) {
            return "Happy New 🏃🏃‍♀️🏃 " + year;
        }
        else if(year === 2020) {
            return false;
        }
        else if(year > 2021) {
            return "wait...";
        }
        else return "sorry";   
       }
       return "sorry not allowed";
}


// Both time & space complexity Big O(1)
// test cases 
// HappyNewYear(2021)
// "Happy New 🏃🏃‍♀️🏃 2021"
// HappyNewYear(2022)
// "wait..."
// HappyNewYear(2020)
// false
// HappyNewYear(1999)
// "sorry"
// HappyNewYear(-100)
// "sorry"
// HappyNewYear("")
// "sorry not allowed"
// HappyNewYear([])
// "sorry not allowed"
// HappyNewYear(null)
// "sorry not allowed"
// HappyNewYear(Object)
// "sorry not allowed"
// HappyNewYear(() => "hello")
// "sorry not allowed"