export const categories = [
    "SUV",
    "Sedan",
    "Pickup",
    "Van/Minivan",
    "Convertible",
    "Hatchback",
    "Coupe",
    "Crossover",
];

export const years = (startYear) => {
    let currentYear = new Date().getFullYear();
    let years = [];
    //startYear = startYear || 1980;  
    while ( startYear <= currentYear ) {
        years.push(startYear++);
    }   
    return years;
}

//console.log(years(1990));