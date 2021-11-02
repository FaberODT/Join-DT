require('dotenv').config()
var expect = require('chai').expect,
  supertest = require('supertest'),
  dataServices = require('../../services/dataServices'),
  delete_user = supertest("https://eu-west-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/helper-kyqnd/service/ClearUserData/incoming_webhook/deleteProfile"),
  fab_auth = supertest("https://acaciumgroup-test.eu.auth0.com/oauth/token"),
  joinpulse_auth = supertest("https://e2e-dt-api.joinpulse.co.uk/auth-server/v0/faber-token/from-auth0"),
  import_user = supertest("https://e2e-dt-api.joinpulse.co.uk/profile-management-core/v0/import-profile/f7018701-774d-4be6-8ca2-fafd8482ea5c"),
  joindt_fileUpload = supertest("https://e2e-dt-api.joinpulse.co.uk/profile-management-core/v1/my-profile"),
  joindt_admin = supertest("https://e2e-dt-api.joinpulse.co.uk/profile-management-core/v1/profiles/f7018701-774d-4be6-8ca2-fafd8482ea5c"),
  fabAccessToken = "", fabAccessTokenForUser = "", joinpulseAccessToken = "", joinpulseAccessTokenForUser = "", fileUpload_responce = [], fileUpload_responce1 = [], fileUpload_responce_DBS = [], fileUpload_professional_CV = [], fileUpload_professional_Quali_Certi = [], fileUpload_professional_insurance = [], fileUpload_professional = [], fileUpload_professional_qualification = [], fileUpload_insurance = [], fileUpload_incorporation_kin = [], fileUpload_business_kin = [],
  fileUpload_RWC1 = [], fileUpload_RWC2 = [], fileUpload_RWC3 = [], fileUpload_RWC4 = [];
  
trainingCertificates = [];
dbsCertificates = [];
professionalDetailCV = [];
professionalDetailQualiCerti = [];
professionalDetailInsurance = [];
professionalDetail = [];
professionalQualification = [];
professionalInsurance = [];
incorporationCertiKin = [];
businessCertiKin = []; 
rightToWorkChecks1 = [];
rightToWorkChecks2 = [];
rightToWorkChecks3 = [];
rightToWorkChecks4 = [];
signedWithFile = "", signedWithoutFile = "";

class apiService {
    deleteUserData() {
        delete_user.post('')
        .set('Accept', 'application/json')
        .send(dataServices.getUserData())
        .expect(200)
        .end ((err, res) => {
        // response should have a true as a string
            expect(res.body).to.be.true;
            if (err) return err;
        });
        console.log("User data has been cleared");
    }

    getFaberAuthToken() {
        fab_auth.post('/')
        .set('Accept', 'application/json')
        .send(dataServices.getUserInfo())
        .expect(200)
        .end ((err, res) => {
            // response should have a accessToken as a property 
            expect(res.body).to.have.property("access_token");
            expect(res.body.access_token).to.not.equal(null);
            fabAccessToken = res.body.access_token;
            if (err) return err;
            console.log("Faber token geerated");
        });
    }

    getJoinDTAuthToken() {
        console.log("Faber token : " + fabAccessToken);
        joinpulse_auth.post('')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${fabAccessToken}`)
        .expect(200)
        .end((err, res) => {
            // response should have a accessToken as a property 
            expect(res.body).to.have.property("access_token");
            expect(res.body.access_token).to.not.equal(null);
            joinpulseAccessToken = res.body.access_token;
            if (err) return err;
        });
    }

    getFaberAuthTokenForUser() {
        fab_auth.post('/')
        .set('Accept', 'application/json')
        .send(dataServices.getUserInfoForUser())
        .expect(200)
        .end ((err, res) => {
            // response should have a accessToken as a property 
            expect(res.body).to.have.property("access_token");
            expect(res.body.access_token).to.not.equal(null);
            fabAccessTokenForUser = res.body.access_token;
            if (err) return err;
            console.log("Faber token geerated");
        });
    }

    getJoinDTAuthTokenForUser() {
        console.log("Faber token : " + fabAccessTokenForUser);
        joinpulse_auth.post('')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${fabAccessTokenForUser}`)
        .expect(200)
        .end((err, res) => {
            // response should have a accessToken as a property 
            expect(res.body).to.have.property("access_token");
            expect(res.body.access_token).to.not.equal(null);
            joinpulseAccessTokenForUser = res.body.access_token;
            if (err) return err;
        });
    }

    updateUserInformation() {
        import_user.patch('')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .send(dataServices.getUpdatedUserInfo())
        .expect(204)
        .end((err, res) => {
            if(err) return err;
        });
        console.log("User data has been imported");
    }

    /**
     * API will upload the certificate for Incorporation
     */
    uploadCertificateForIncorporationNextOfKin () {
        console.log("Joinpulse Auth token is: " + joinpulseAccessToken);
        joindt_fileUpload.post('/files/CertificateOfIncorporation')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .attach('file', process.cwd() + "/app/test.jpg")
        .expect(200)
        .end((err, res) => {
            fileUpload_incorporation_kin[0] = res.body.file.fileName;
            fileUpload_incorporation_kin[1] = res.body.file.fileSizeBytes;
            fileUpload_incorporation_kin[2] = res.body.file.dateCreated;
            fileUpload_incorporation_kin[3] = res.body.stagingId;
            incorporationCertiKin.push(fileUpload_incorporation_kin);
            if(err) return err;
        });
    }

    /**
     * API will upload the certificate for Business bank account
     */
    uploadCertificateForBusinessNextOfKin () {
        joindt_fileUpload.post('/files/ProofOfBusinessBankAccount' + `?stagingId=${incorporationCertiKin[0][3]}`)
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .attach('file', process.cwd() + "/app/test.jpg")
        .expect(200)
        .end((err, res) => {
            fileUpload_business_kin[0] = res.body.file.fileName;
            fileUpload_business_kin[1] = res.body.file.fileSizeBytes;
            fileUpload_business_kin[2] = res.body.file.dateCreated;
            fileUpload_business_kin[3] = res.body.stagingId;
            businessCertiKin.push(fileUpload_business_kin);
            if(err) return err;
        });
    }

    /**
     * API will save and continue the Next of Kin section
     */
    saveAndContinueNextOfKinSection () {
        joindt_fileUpload.patch(`?stagingId=${businessCertiKin[0][3]}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .send(dataServices.getNextOfKinSectionInfo())
        .expect(204)
        .end((err, res) => {
            if(err) return err;
        });
    }

    /**
     * API will save and continue the References section
     */
    saveAndContinueReferencesSection () {
        joindt_fileUpload.patch('')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .send(dataServices.getReferencesInfo())
        .expect(204)
        .end((err, res) => {
            if(err) return err;
        })
    }

    /**
     * API will upload the certificate for Training Section
     */
    uploadFileForTrainingSection() {
        console.log("Joinpulse token: " + joinpulseAccessToken);
        joindt_fileUpload.post('/files/ALSILS')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .attach('file', process.cwd() + "/app/test.jpg")
        .expect(200)
        .end((err, res) => {
            fileUpload_responce[0] = res.body.file.fileName;
            fileUpload_responce[1] = res.body.file.fileSizeBytes;
            fileUpload_responce[2] = res.body.file.dateCreated;
            fileUpload_responce[3] = res.body.stagingId;
            fileUpload_responce[4] = res.body.groupInstanceIds[0];
            trainingCertificates.push(fileUpload_responce);
            console.log("Training certificate after uploading 1 certificate: " + trainingCertificates);
            if(err) return err;
        });
    }

    /**
     * API will upload the certificate for Training Section
     */
    uploadFileForTrainingSection1() {
        console.log("Training certificate after uploading 1 certificate: " + trainingCertificates);
        joindt_fileUpload.post('/files/CounterFraud' + `?stagingId=${trainingCertificates[0][3]}`)
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .attach('file', process.cwd() + "/app/test.jpg")
        .expect(200)
        .end((err, res) => {
            fileUpload_responce1[0] = res.body.file.fileName;
            fileUpload_responce1[1] = res.body.file.fileSizeBytes;
            fileUpload_responce1[2] = res.body.file.dateCreated;
            fileUpload_responce1[3] = res.body.stagingId;
            fileUpload_responce1[4] = res.body.groupInstanceIds[0];
            trainingCertificates.push(fileUpload_responce1);
            console.log("Training certificate after uploading 2 certificate: " + trainingCertificates);
            if(err) return err;
        });
    }


    /**
     * API will save and continue the Training section
     */
    saveAndContinueTrainingSection () {
        console.log("Value of Staging id for save and continue: " + trainingCertificates[1][3]);
        joindt_fileUpload.patch(`?stagingId=${trainingCertificates[1][3]}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .send(dataServices.getTrainingSectionInfo())
        .expect(204)
        .end((err, res) => {
            console.log("Saved now...!!!!!");
            if(err) return err;
        });
    }


    /**
     * API will upload Supporting file 1 for Right to Work Checks section
     */
    uploadFile1ForIdentificationDocumentsSection() {
        console.log("Joinpulse Auth token is: " + joinpulseAccessTokenForUser);
        joindt_fileUpload.post('/files/RightToWorkEUUKPassport')
        .set('Authorization', `Bearer ${joinpulseAccessTokenForUser}`)
        .attach('file', process.cwd() + "/app/test.jpg")
        .expect(200)
        .end((err, res) => {
            fileUpload_RWC1[0] = res.body.file.fileName;
            fileUpload_RWC1[1] = res.body.file.fileSizeBytes;
            fileUpload_RWC1[2] = res.body.file.dateCreated;
            fileUpload_RWC1[3] = res.body.stagingId;
            rightToWorkChecks1.push(fileUpload_RWC1);
            console.log("righttocheck1 value: " + rightToWorkChecks1);
            if(err) return err;
        });
    }

    /**
     * API will upload Supporting file 2 for Right to Work Checks section
     */
    uploadFile2ForIdentificationDocumentsSection() {
        joindt_fileUpload.post('/files/ProofOfAddressBankStatement' + `?stagingId=${rightToWorkChecks1[0][3]}`)
        .set('Authorization', `Bearer ${joinpulseAccessTokenForUser}`)
        .attach('file', process.cwd() + "/app/test.jpg")
        .expect(200)
        .end((err, res) => {
            fileUpload_RWC2[0] = res.body.file.fileName;
            fileUpload_RWC2[1] = res.body.file.fileSizeBytes;
            fileUpload_RWC2[2] = res.body.file.dateCreated;
            fileUpload_RWC2[3] = res.body.stagingId;
            rightToWorkChecks2.push(fileUpload_RWC2);
            console.log("rightToWorkCheck2 value: " + rightToWorkChecks1);
            if(err) return err;
        });
    }

    /**
     * API will upload Supporting file 3 for Right to Work Checks section
     */
    uploadFile3ForIdentificationDocumentsSection() {
        joindt_fileUpload.post('/files/ProofOfAddress2UtilityBill' + `?stagingId=${rightToWorkChecks2[0][3]}`)
        .set('Authorization', `Bearer ${joinpulseAccessTokenForUser}`)
        .attach('file', process.cwd() + "/app/test.jpg")
        .expect(200)
        .end((err, res) => {
            fileUpload_RWC3[0] = res.body.file.fileName;
            fileUpload_RWC3[1] = res.body.file.fileSizeBytes;
            fileUpload_RWC3[2] = res.body.file.dateCreated;
            fileUpload_RWC3[3] = res.body.stagingId;
            rightToWorkChecks3.push(fileUpload_RWC3);
            console.log("rightToWorkChecks3 value: " + rightToWorkChecks3);
            if(err) return err;
        });
    }

    /**
     * API will upload supporting file for changed name
     */
    uploadFileChangedNameForIdentificationDocumentsSection() {
        joindt_fileUpload.post('/files/NameChangeDocument' + `?stagingId=${rightToWorkChecks3[0][3]}`)
        .set('Authorization', `Bearer ${joinpulseAccessTokenForUser}`)
        .attach('file', process.cwd() + "/app/test.jpg")
        .expect(200)
        .end((err, res) => {
            fileUpload_RWC4[0] = res.body.file.fileName;
            fileUpload_RWC4[1] = res.body.file.fileSizeBytes;
            fileUpload_RWC4[2] = res.body.file.dateCreated;
            fileUpload_RWC4[3] = res.body.stagingId;
            rightToWorkChecks4.push(fileUpload_RWC4);
            console.log("rightToWorkChecks4 value for changed name: " + rightToWorkChecks4);
            if(err) return err;
        });
    }


    /**
     * API will save and continue the RWC section
     */
    saveAndContinueRWCSection () {
        console.log("rightToWorkChecks while saving the section: " + rightToWorkChecks3);
        console.log("Join pulse token before saving: " + joinpulseAccessToken);
        joindt_fileUpload.patch(`?stagingId=${rightToWorkChecks3[0][3]}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .send(dataServices.getRightToWorkChecksInfo())
        .expect(204)
        .end((err, res) => {
            if(err) return err;
        });
    }

    /**
     * API will save and continue the RWC section
     */
    saveAndContinueRWCSectionWithChangedName () {
        console.log("rightToWorkChecks while saving the section: " + rightToWorkChecks4);
        joindt_fileUpload.patch(`?stagingId=${rightToWorkChecks4[0][3]}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${joinpulseAccessTokenForUser}`)
        .send(dataServices.getRightToWorkChecksInfoWithChangedName())
        .expect(204)
        .end((err, res) => {
            if(err) return err;
        });
    }

    /**
     * API will upload the CV for professional details
     */
    uploadCVForProfessionalDetailsSection() {
        console.log("Joinpulse bearer token value: " + joinpulseAccessTokenForUser);
        joindt_fileUpload.post('/files/CV')
        .set('Authorization', `Bearer ${joinpulseAccessTokenForUser}`)
        .attach('file', process.cwd() + "/app/test.jpg")
        .expect(200)
        .end((err, res) => {
            fileUpload_professional[0] = res.body.file.fileName;
            fileUpload_professional[1] = res.body.file.fileSizeBytes;
            fileUpload_professional[2] = res.body.file.dateCreated;
            fileUpload_professional[3] = res.body.stagingId;
            professionalDetail.push(fileUpload_professional);
            console.log("Uploaded CV: " + fileUpload_professional);
            if(err){
                console.log("1st error is: " + err);
                return err;
            } 
        });
    }

    /**
     * API will upload profession qualic=fication certificate
     */
    uploadForProfessionalQualificationCerti() {
        console.log("Staging id from uploaded CV: " + professionalDetail[0][3]);
        joindt_fileUpload.post('/files/HigherEducationCertificate' + `?stagingId=${professionalDetail[0][3]}`)
        .set('Authorization', `Bearer ${joinpulseAccessTokenForUser}`)
        .attach('file', process.cwd() + "/app/test.jpg")
        .expect(200)
        .end((err, res) => {
            fileUpload_professional_qualification[0] = res.body.file.fileName;
            fileUpload_professional_qualification[1] = res.body.file.fileSizeBytes;
            fileUpload_professional_qualification[2] = res.body.file.dateCreated;
            fileUpload_professional_qualification[3] = res.body.stagingId;
            professionalQualification.push(fileUpload_professional_qualification);
            console.log("Uploaded qualification certificate: " + fileUpload_professional_qualification);
            if(err) {
                console.log("2nd Error is: " + err);
                return err;
            }
        });
    }

    /**
     * API will upload professional indemnity insurance
     */
    uploadForIndemnityInsurance() {
        console.log("Staging id from uploaded CV: " + professionalQualification[0][3]);
        joindt_fileUpload.post('/files/ProfessionalIndemnity' + `?stagingId=${professionalQualification[0][3]}`)
        .set('Authorization', `Bearer ${joinpulseAccessTokenForUser}`)
        .attach('file', process.cwd() + "/app/test.jpg")
        .expect(200)
        .end((err, res) => {
            fileUpload_insurance[0] = res.body.file.fileName;
            fileUpload_insurance[1] = res.body.file.fileSizeBytes;
            fileUpload_insurance[2] = res.body.file.dateCreated;
            fileUpload_insurance[3] = res.body.stagingId;
            professionalInsurance.push(fileUpload_insurance);
            console.log("Uploaded insurance: " + fileUpload_insurance);
            if(err){
                console.log("3rd Error is: " + err);
                return err;
            }
        });
    }

    /**
     * API will save and continue professional details section
     */
    saveAndContinueProfessionalDetails() {
        console.log("Joinpulse token value is: " + joinpulseAccessTokenForUser);
        console.log("staging id after CV : " + professionalDetail[0][3]);
        console.log("staging id after qualification certi: " + professionalQualification[0][3]);
        console.log("staging id after insurance: " + professionalInsurance[0][3]);
        joindt_fileUpload.patch(`?stagingId=${professionalInsurance[0][3]}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${joinpulseAccessTokenForUser}`)
        .send(dataServices.getProfessionalDetails())
        .expect(204)
        .end((err, res) => {
            console.log("I have saved everything now...");
            console.log("response is: " + res);
            if(err) {
                console.log("error is: " + err);
                return err;
            } 
        });
    }

    /**
     * API will upload the certificate for DBS section
     */
    uploadCertificateForDBSSection() {
        console.log("Joinpulse bearer token value: " + joinpulseAccessTokenForUser);
        joindt_fileUpload.post('/files/DBSUpdateCertificate')
        .set('Authorization', `Bearer ${joinpulseAccessTokenForUser}`)
        .attach('file', process.cwd() + "/app/test.jpg")
        .expect(200)
        .end((err, res) => {
            fileUpload_responce_DBS[0] = res.body.file.fileName;
            fileUpload_responce_DBS[1] = res.body.file.fileSizeBytes;
            fileUpload_responce_DBS[2] = res.body.file.dateCreated;
            fileUpload_responce_DBS[3] = res.body.stagingId;
            dbsCertificates.push(fileUpload_responce_DBS);
            console.log("DBS certificates are: " + fileUpload_responce_DBS);
            console.log("DBS certificates are: " + dbsCertificates);
            if(err) return err;
        });
    }

    /**
     * Upload CV for professional details section
     */
     uploadCVForProfessionalDetailsSection1() {
        console.log("Joinpulse bearer token value: " + joinpulseAccessTokenForUser);
        joindt_fileUpload.post('/files/CV')
        .set('Authorization', `Bearer ${joinpulseAccessTokenForUser}`)
        .attach('file', process.cwd() + "/app/test.jpg")
        .expect(200)
        .end((err, res) => {
            fileUpload_professional_CV[0] = res.body.file.fileName;
            fileUpload_professional_CV[1] = res.body.file.fileSizeBytes;
            fileUpload_professional_CV[2] = res.body.file.dateCreated;
            fileUpload_professional_CV[3] = res.body.stagingId;
            professionalDetailCV.push(fileUpload_professional_CV);
            console.log("Uploaded CV is: " + professionalDetailCV);
            if(err) return err;
        });
    }

    /**
     * API will upload qualification certificate
     */
    uploadQualificationCertificateForProfessionalDetails(){
        console.log("Joinpulse bearer token value: " + joinpulseAccessTokenForUser);
        joindt_fileUpload.post('/files/HigherEducationCertificate' + `?stagingId=${professionalDetailCV[0][3]}`)
        .set('Authorization', `Bearer ${joinpulseAccessTokenForUser}`)
        .attach('file', process.cwd() + "/app/test.jpg")
        .expect(200)
        .end((err, res) => {
            fileUpload_professional_Quali_Certi[0] = res.body.file.fileName;
            fileUpload_professional_Quali_Certi[1] = res.body.file.fileSizeBytes;
            fileUpload_professional_Quali_Certi[2] = res.body.file.dateCreated;
            fileUpload_professional_Quali_Certi[3] = res.body.stagingId;
            professionalDetailQualiCerti.push(fileUpload_professional_Quali_Certi);
            console.log("Uploaded certificate is: " + professionalDetailQualiCerti);
            if(err) return err;
        });
    }

    /**
     * API will upload professional indemnity insurance
     */
    uploadProfessionalInsuranceCertificate() {
        console.log("Joinpulse bearer token value: " + joinpulseAccessTokenForUser);
        joindt_fileUpload.post('/files/ProfessionalIndemnity' + `?stagingId=${professionalDetailQualiCerti[0][3]}`)
        .set('Authorization', `Bearer ${joinpulseAccessTokenForUser}`)
        .attach('file', process.cwd() + "/app/test.jpg")
        .expect(200)
        .end((err, res) => {
            fileUpload_professional_insurance[0] = res.body.file.fileName;
            fileUpload_professional_insurance[1] = res.body.file.fileSizeBytes;
            fileUpload_professional_insurance[2] = res.body.file.dateCreated;
            fileUpload_professional_insurance[3] = res.body.stagingId;
            professionalDetailInsurance.push(fileUpload_professional_insurance);
            console.log("Uploaded insurance is: " + professionalDetailInsurance);
            if(err) return err;
        });
    }


    /**
     * API will save and continue Professional Details section
     */
    saveAndContinueProfessionalDetailsSection () {
        console.log("Qualification certificates are: " + professionalDetailInsurance);
        joindt_fileUpload.patch(`?stagingId=${professionalDetailInsurance[0][3]}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${joinpulseAccessTokenForUser}`)
        .send(dataServices.getProfessionalDetailsCertificates())
        .expect(204)
        .end((err, res) => {
            if(err) return err;
        });
    }


    /**
     * API will save and continue the DBS section
     */
    saveAndContinueDBSSection () {
        console.log("DBS certificates are: " + dbsCertificates);
        joindt_fileUpload.patch(`?stagingId=${dbsCertificates[0][3]}`)
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${joinpulseAccessTokenForUser}`)
        .send(dataServices.getDBSSectionInfo())
        .expect(204)
        .end((err, res) => {
            if(err) return err;
        });
    }

    /**
     * API will save and continue the DBS section with status as Signed and with File attached from admin login
     */
    saveAndContinueDBSSectionAdminSignedWithFile () {
        joindt_admin.patch('/')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .send(dataServices.getDBSSectionInfoForAdminSignedWithFile())
        .expect(204)
        .end((err, res) => {
            if(err) return err;
        });
    }

    /**
         * API will save and continue the DBS section with status as signed and without File attached from admin login
         */
     saveAndContinueDBSSectionAdminSignedWithoutFileComplete () {
        console.log("JoinPule Token: " + joinpulseAccessToken);
        joindt_admin.patch('/')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .send(dataServices.getDBSSectionInfoForAdminSignedWithoutFileComplete())
        .expect(204)
        .end((err, res) => {
            if(err) return err;
        });
        console.log("Saved from Admin side...");
    }

    /**
     * API will save and continue the DBS section with status as signed and without File attached from admin login
     */
    saveAndContinueDBSSectionAdminSignedWithoutFile () {
        console.log("JoinPule Token: " + joinpulseAccessToken);
        joindt_admin.patch('/')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .send(dataServices.getDBSSectionInfoForAdminSignedWithoutFile())
        .expect(204)
        .end((err, res) => {
            if(err) return err;
        });
        console.log("Saved from Admin side...");
    }

    /**
     * API will save and continue the DBS section with status as signed and without File attached from admin login
     */
     saveAndContinueDBSSectionAdminSignedWithoutFile66 () {
        console.log("JoinPule Token: " + joinpulseAccessToken);
        joindt_admin.patch('/')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .send(dataServices.getDBSSectionInfoForAdminSignedWithoutFile66())
        .expect(204)
        .end((err, res) => {
            if(err) return err;
        });
        console.log("Saved from Admin side...");
    }

    /**
     * API will save and continue the DBS section with status as signed and without File attached from admin login
     */
     saveAndContinueDBSSectionAdminSignedWithoutFile55 () {
        console.log("JoinPule Token: " + joinpulseAccessToken);
        joindt_admin.patch('/')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .send(dataServices.getDBSSectionInfoForAdminSignedWithoutFile55())
        .expect(204)
        .end((err, res) => {
            if(err) return err;
        });
        console.log("Saved from Admin side...");
    }

    /**
     * API will save and continue the DBS section with status as signed and without File attached from admin login
     */
     saveAndContinueDBSSectionAdminSignedWithoutFile99 () {
        console.log("JoinPule Token: " + joinpulseAccessToken);
        joindt_admin.patch('/')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .send(dataServices.getDBSSectionInfoForAdminSignedWithoutFile99())
        .expect(204)
        .end((err, res) => {
            if(err) return err;
        });
        console.log("Saved from Admin side...");
    }

    /**
     * API will save and continue the DBS section with status as signed and without File attached from admin login
     */
     saveAndContinueDBSSectionAdminSignedWithoutFile88 () {
        console.log("JoinPule Token: " + joinpulseAccessToken);
        joindt_admin.patch('/')
        .set('Accept', 'application/json')
        .set('Authorization', `Bearer ${joinpulseAccessToken}`)
        .send(dataServices.getDBSSectionInfoForAdminSignedWithoutFile88())
        .expect(204)
        .end((err, res) => {
            if(err) return err;
        });
        console.log("Saved from Admin side...");
    }
}
module.exports = new apiService();
