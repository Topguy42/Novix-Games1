import IPv6Rotator from './ipv6-rotator.js';
import https from 'https';

const ipv6Rotator = new IPv6Rotator('2001:470:8:5ac');

// Test function to make requests with rotating IPs
async function testIPv6Rotation() {
  console.log('Testing IPv6 Rotation...\n');
  
  for (let i = 0; i < 5; i++) {
    const randomIP = ipv6Rotator.generateRandomIP();
    console.log(`Test ${i + 1}: Using IPv6 ${randomIP}`);
    
    try {
      const response = await makeRequest(randomIP);
      console.log(`  Result: ${response}\n`);
    } catch (error) {
      console.log(`  Error: ${error.message}\n`);
    }
  }
}

function makeRequest(localAddress) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.ipify.org',
      port: 443,
      path: '/?format=json',
      method: 'GET',
      family: 6,
      localAddress: localAddress,
      timeout: 10000
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json.ip);
        } catch (e) {
          resolve(data);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.end();
  });
}

// Run the test
testIPv6Rotation().then(() => {
  console.log('Test complete!');
}).catch((error) => {
  console.error('Test failed:', error);
});