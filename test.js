const chai = require('chai');
const chatHttp = require('chai-http');
const fs = require('fs');
const assert = chai.assert;

chai.use(chatHttp);

describe('check the json info', ()=>{
    it('should get all the info', ()=>{
        var data = JSON.parse(fs.readFileSync('portfolio_data.json', 'utf8'));
        assert.isArray(data);
        
    })
})