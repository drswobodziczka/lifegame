// authController.js

function authenticate(username, password) {
    if (username === 'admin' && password === 'secret') {
        return { success: true, token: 'mock-token' }; // Replace 'mock-token' with actual JWT if needed
    }
    return { success: false };
}

module.exports = { authenticate };
