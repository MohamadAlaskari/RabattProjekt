const berechneRabatt = (age, isMember) => {
  if (age < 14) return 0;
  if (age < 18 && isMember) return 35;
  if (age < 18) return 20;
  if (age >= 65 && isMember) return 45;
  if (age >= 65) return 30;
  if (isMember) return 15;
  return 0;
};

module.exports = berechneRabatt;
