function berechneRabatt(age, isMember) {
    if (age < 14) {
      return 0;
    } else if (age < 18 && isMember) {
      return 35;
    } else if (age < 18) {
      return 20;
    } else if (age >= 65 && isMember) {
      return 45;
    } else if (age >= 65) {
      return 30;
    } else if (isMember) {
      return 15;
    } else {
      return 0;
    }
  }
  
  module.exports = berechneRabatt; 
  