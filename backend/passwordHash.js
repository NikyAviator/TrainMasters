const bcrypt = require('bcrypt');
module.exports = class passwordHash {
  constructor(password) {
    this.password = password;
  }

  async hashPassword() {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(this.password, salt);
  }
  async comparePass(hash) {
    return await bcrypt.compare(this.password, hash);
  }
};
