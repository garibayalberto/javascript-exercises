const findTheOldest = function(people) {

  return people.reduce( (oldest, person) => {
    const date = new Date();

    let oldestAge = (oldest.yearOfDeath ? oldest.yearOfDeath : date.getFullYear()) - oldest.yearOfBirth;
    let personAge = (person.yearOfDeath ? person.yearOfDeath : date.getFullYear()) - person.yearOfBirth;

    if(oldestAge < personAge){
      oldest = person;
    }
    
    return oldest;
  });

};

// Do not edit below this line
module.exports = findTheOldest;
