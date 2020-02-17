module.exports = function createDreamTeam(members) {

  if (typeof members === 'number' || members === null || members === undefined || typeof members === 'boolean') {
    return false;
  }

  if (members instanceof Array) {
    let result = [];
    members.forEach(item => {
      if (typeof item === 'string') {
        result.push(item.trim().substr(0,1).toLocaleUpperCase());
      }
    });
    return result.sort().join('');
  }
  return false;
};
