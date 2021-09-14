var should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest('https://eu-west-1.aws.webhooks.mongodb-stitch.com');

class apiScreen{
    deleteUserData(){
        var responseValue;
        api.post('/api/client/v2.0/app/helper-kyqnd/service/ClearUserData/incoming_webhook/deleteProfile')
            .set('Accept', 'application/json')
            .send({
                email: "fabertester+iqx_e6_midwives_mobileweb_chrome@gmail.com",
                env: "e2e-joinpulse"
            })
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function (err, res) {
                responseValue = res.body;
                console.log("response value is: " + res.body);
                expect(res.body).to.equal(true);
            });
    }
}
module.exports = new apiScreen();