interface Human { // Document 
    name: string,
    dob: Date,
    hands: 0 | 1 | 2,
    legs: 0 | 1 | 2,
    gender: 'male' | 'female' | 'other',
}

interface SoftwareEngineer extends Human {
    code: () => void,
    drinkCoffee: () => void,

}

interface President extends Human {
    
}

interface PrimeMinister extends Human {

}



// ===============================================

interface Document {
    _id?: string,
    // ...
    createdAt?: Date,
    updatedAt?: Date,
}

interface Student extends Document {
    
}