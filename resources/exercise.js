function exerciseArrayParser(exerciseArr) {
  const returnArray = [];
  exerciseArr.forEach((item) =>
    returnArray.push({
      description: item.description,
      duration: item.duration,
      date: item.date.toDateString(),
    })
  );
  return returnArray;
}

module.exports.parseExercise = exerciseArrayParser;
