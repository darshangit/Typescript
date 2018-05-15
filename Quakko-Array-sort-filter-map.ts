enum Gender {
    MALE,
    FEMALE
}

interface Person {
    name: string;
    age: number;
    gender: Gender;
}

const people: Person[] = [
    {name: 'Paul Halliday', age: 24, gender: Gender.MALE},
    {name: 'Halliday', age: 34, gender: Gender.MALE},
    {name: 'Darshan Halliday', age: 44, gender: Gender.FEMALE},
    {name: 'Priya', age: 14, gender: Gender.MALE},
    {name: 'Mad', age: 54, gender: Gender.MALE},
    {name: 'Awesome', age: 64, gender: Gender.FEMALE},
    {name: 'HE ha ha', age: 24, gender: Gender.MALE}
];


const minMax = {
    min: 20, max: 40
}
// Filter 30->40

const filterByAge = (people: Person[], range: { min: number, max: number }) => 
people.filter(person => person.age >= range.min && person.age <= range.max);

const filteredByAge = filterByAge(people,minMax);

console.log(filteredByAge);

//sort by age

const sortByAge = (people: Person[]) => 
people.sort((personA: Person, personB: Person) => {
    if(personA.age > personB.age) return 1;
    if(personA.age < personB.age) return 0;
    return 0;
});

const sortedByAge = sortByAge(people);
console.log(sortedByAge)

//sort at the same time
console.log(filterByAge(sortByAge(people),minMax))

const newMap: Map<string, Person[]> = new Map<string, Person[]>();
newMap.set('A',sortedByAge);
newMap.set('B',filteredByAge);

console.log(newMap.get('A').filter( a=> a.gender === Gender.FEMALE ))
console.log(newMap.get('B'));
