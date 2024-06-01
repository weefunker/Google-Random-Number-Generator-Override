const get = (callback) => {
  chrome.storage.local.get('generatorGoalNumber', ({ generatorGoalNumber }) => {
    if (!generatorGoalNumber) callback([]);
    else callback(generatorGoalNumber);
  });
}

const set = (value) => {
  chrome.storage.local.set({ 'generatorGoalNumber': value});
}

const pop = (callback) => {
  chrome.storage.local.get('generatorGoalNumber', ({ generatorGoalNumber }) => {
    if (generatorGoalNumber) {
      const [first, ...rest] = generatorGoalNumber;

      callback(first);
      set(rest);
    } else {
      callback(null);
    }
  });
}

export {
  get,
  pop,
  set
}
