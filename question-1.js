function lowerCaseWords(input) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(input)) {
        reject(new Error('Input is not an array.'));
        return;
      }
  
      const lowerCaseWordsArray = input
        .filter(item => typeof item === 'string')
        .map(word => word.toLowerCase());
  
      if (lowerCaseWordsArray.length > 0) {
        resolve(lowerCaseWordsArray);
      } else {
        reject(new Error('No lowercase words found in the input array.'));
      }
    });
  }

  const mixedArray = [123, 'Hello', 'WORLD', 'nAme', true, 'NBa'];
  console.log(lowerCaseWords(mixedArray))