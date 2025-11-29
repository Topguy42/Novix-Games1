import crypto from 'crypto';

class IPv6Rotator {
  constructor(prefix = '2001:470:8:5ac') {
    this.prefix = prefix;
  }

  generateRandomIP() {
    // Generate random 64-bit suffix
    const randomHex = crypto.randomBytes(8).toString('hex');
    const parts = [];
    
    for (let i = 0; i < randomHex.length; i += 4) {
      parts.push(randomHex.substr(i, 4));
    }
    
    return `${this.prefix}::${parts.join(':')}`;
  }
}

export default IPv6Rotator;