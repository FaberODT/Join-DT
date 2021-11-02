var DataServices = function() {

    let email = "fabertester+nimesh01-e2e@gmail.com",
        env = "e2e-dt",
        DELETE_USER = "https://eu-west-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/helper-kyqnd/service/ClearUserData/incoming_webhook/deleteProfile",
        FAB_AUTH = "https://acaciumgroup-test.eu.auth0.com/oauth/token",
        JOINPULSE_AUTH = "https://e2e-joinpulse-api.joinpulse.co.uk/auth-server/v0/faber-token/from-auth0",
        IMPORT_USER = "https://e2e-joinpulse-api.joinpulse.co.uk/profile-management-core/v0/import-profile/8bad8940-6ee2-425d-9f42-e4312cc1c219"

    let userData = {
        "email" : `${email}`,
        "env" :`${env}`
    };

    this.getUserData = () => {
        return userData;
    };

    let userInfo = {
        "client_id": "ZL2sG9AkStZH0oEr85p9UbhstOZUgk15",
        "client_secret": "CczFV7GbpRrF730t_pDjiw3-sjUmLF0-vYtDFPEPFQhqnTgKGQFB3lY_U4LJc7xb",
        "audience": "joinXAPI",
        "scope": "openid",
        "username": "fabertester+nimesh-e2e@gmail.com",
        "password": "Password123",
        "grant_type": "password"
    }

    this.getUserInfo = () => {
        return userInfo;
    }

    let userInfoUser = {
        "client_id": "ZL2sG9AkStZH0oEr85p9UbhstOZUgk15",
        "client_secret": "CczFV7GbpRrF730t_pDjiw3-sjUmLF0-vYtDFPEPFQhqnTgKGQFB3lY_U4LJc7xb",
        "audience": "joinXAPI",
        "scope": "openid",
        "username": "fabertester+nimesh01-e2e@gmail.com",
        "password": "Password123",
        "grant_type": "password"
    }

    this.getUserInfoForUser = () => {
        return userInfoUser;
    }

    let updateUserInfo = {
        "values": {
            "LastName": ["Tester"],
            "FirstName": ["Nimesh"],
            "Gender": ["Male"],
            "Mobile": ["07567676766"],
            "Address": [
                {
                    "AddressLine3": [],
                    "AddressLine2": [],
                    "AddressLine1": ["Birmingham"],
                    "Region": [],
                    "City": ["Birmingham"],
                    "PostCode": ["WV24PA"]
                }
            ],
            "NursingBand": ["Band5"],
            "PreScreenSkill": ["PWP"],
            "StaffID": ["886"],
            "SubstantiveEmployer": ["pulse"],
            "StaffSharedInbox": ["fabertester+shared@gmail.com"],
            "StaffEmail": ["fabertester+shared@gmail.com"],
            "DOB": ["1970-01-01T00:00:00.000Z"],
            "IQXID": ["886"]
        }
    }

    this.getUpdatedUserInfo = () => {
        return updateUserInfo;
    }

    this.getTrainingSectionInfo = () => {
        return {
            "sections": [
                {
                    "id": "training",
                    "values": {
                        "TextTrainingCore": [
                            ""
                        ],
                        "CoreTrainingCertificates": [
                            "ALSILS",
                            "CounterFraud"
                        ],
                        "ALSILS": [
                            {"fileName": `${trainingCertificates[0][0]}`, "fileSizeBytes": `${trainingCertificates[0][1]}`, "dateCreated": `${trainingCertificates[0][2]}`}
                        ],
                        "CounterFraud": [
                            {"fileName": `${trainingCertificates[1][0]}`, "fileSizeBytes": `${trainingCertificates[1][1]}`, "dateCreated": `${trainingCertificates[1][2]}`}
                        ]
                    }
                }
            ]
        }
    }

    this.getDBSSectionInfo = () => {
        return {
            "sections": [
                {
                    "id": "dbs",
                    "values": {
                        "TextSignDeclaration": [],
                        "DBSDetailsText": [],
                        "DBSUpdateRegistered": ["DBSUpdateYes"],
                        "DBSUpdateCertificateNumber": ["009999999999"],
                        "DBSUpdateCertificate": [
                            {"fileName": `${dbsCertificates[0][0]}`, "fileSizeBytes": `${dbsCertificates[0][1]}`, "dateCreated": `${dbsCertificates[0][2]}`}
                        ]
                    }
                }
            ]
        }
    }

    this.getProfessionalDetailsCertificates = () => {
        return {
            "sections": [
                {
                    "id": "work-history-and-qualifications",
                    "values": {
                        "WorkHistoryAdditional": [
                            ""
                        ],
                        "CV": [
                            {
                                "fileName": `${professionalDetailCV[0][0]}`,
                                "fileSizeBytes": `${professionalDetailCV[0][1]}`,
                                "dateCreated": `${professionalDetailCV[0][2]}`
                            }
                        ],
                        "HigherEducationCertificate": [
                            {
                                "fileName": `${professionalDetailQualiCerti[0][0]}`,
                                "fileSizeBytes": `${professionalDetailQualiCerti[0][1]}`,
                                "dateCreated": `${professionalDetailQualiCerti[0][2]}`
                            }
                        ],
                        "Profbodyaccreditation": ["Yes"],
                        "ProfessionalIndemnity": [
                            {
                                "fileName": `${professionalDetailInsurance[0][0]}`,
                                "fileSizeBytes": `${professionalDetailInsurance[0][1]}`,
                                "dateCreated": `${professionalDetailInsurance[0][2]}`
                            }
                        ],
                        "Profbodymembership": ["BABCPRegistered"],
                        "HCPCProfnumber": ["123456789"]
                    }
                }
            ]
        }
    }

    this.getProfessionalDetails = () => {
        console.log("value of 1st certificate: " + professionalDetail[0][0]);
        console.log("value of 2nd certificate: " + professionalQualification[0][0]);
        console.log("value of 3rd certificate: " + professionalInsurance[0][0]);
        return {
            "sections": [
                {
                    "id": "work-history-and-qualifications",
                    "values": {
                        "WorkHistoryAdditional": [],
                        "CV": [
                            {
                                "fileName": `${professionalDetail[0][0]}`,
                                "fileSizeBytes": `${professionalDetail[0][1]}`,
                                "dateCreated": `${professionalDetail[0][2]}`
                            }
                        ],
                        "HigherEducationCertificate": [
                            {
                                "fileName": `${professionalQualification[0][0]}`,
                                "fileSizeBytes": `${professionalQualification[0][1]}`,
                                "dateCreated": `${professionalQualification[0][2]}`
                            }
                        ],
                        "Profbodyaccreditation": [
                            "No"
                        ],
                        "ProfessionalIndemnity": [
                            {
                                "fileName": `${professionalInsurance[0][0]}`,
                                "fileSizeBytes": `${professionalInsurance[0][1]}`,
                                "dateCreated": `${professionalInsurance[0][2]}`
                            }
                        ]
                    }
                }
            ]
        }
    }

    this.getDBSSectionInfoForAdminSignedWithFile = () => {
        return {
            "sections": [
                {
                    "id": "dbs",
                    "values": {
                        "TextSignDeclaration": [],
                        "SignDeclarationStatus": ["Signed"],
                        "DBSDetailsText": [],
                        "DBSUpdateRegistered": ["DBSUpdateYes"],
                        "DBSUpdateCertificateNumber": ["009999999999"],
                        "DBSUpdateCertificate": [
                            {"fileName": `${dbsCertificates[0][0]}`, "fileSizeBytes": `${dbsCertificates[0][1]}`, "dateCreated": `${dbsCertificates[0][2]}`}
                        ],
                        "DBSUpdateCertificateDate": [],
                        "DBSUpdateCheckDate": [],
                        "DBSUpdateResult": ["DBSInvalidDetails"],
                        "DBSRecheck": [],
                        "DBSCriteriaMet": [],
                        "DBSForceSectionStatus": [],
                        "DBSUpdateComplete": []
                    }
                }
            ]
        }
    }

    this.getDBSSectionInfoForAdminSignedWithoutFile99 = () => {
        return {
            "sections": [
                {
                    "id": "dbs",
                    "values": {
                        "TextSignDeclaration": [],
                        "SignDeclarationStatus": ["Signed"],
                        "DBSDetailsText": [],
                        "DBSUpdateRegistered": ["DBSUpdateYes"],
                        "DBSUpdateCertificateNumber": ["009999999999"],
                        "DBSUpdateCertificate": [],
                        "DBSUpdateCertificateDate": [],
                        "DBSUpdateCheckDate": [],
                        "DBSUpdateResult": ["DBSInvalidDetails"],
                        "DBSRecheck": [],
                        "DBSCriteriaMet": [],
                        "DBSForceSectionStatus": [],
                        "DBSUpdateComplete": []
                    }
                }
            ]
        }
    }

    this.getDBSSectionInfoForAdminSignedWithoutFile88 = () => {
        return {
            "sections": [
                {
                    "id": "dbs",
                    "values": {
                        "TextSignDeclaration": [],
                        "SignDeclarationStatus": ["Signed"],
                        "DBSDetailsText": [],
                        "DBSUpdateRegistered": ["DBSUpdateYes"],
                        "DBSUpdateCertificateNumber": ["008888888888"],
                        "DBSUpdateCertificate": [],
                        "DBSUpdateCertificateDate": [],
                        "DBSUpdateCheckDate": [],
                        "DBSUpdateResult": ["DBSInvalidDetails"],
                        "DBSRecheck": [],
                        "DBSCriteriaMet": [],
                        "DBSForceSectionStatus": [],
                        "DBSUpdateComplete": []
                    }
                }
            ]
        }
    }

    this.getDBSSectionInfoForAdminSignedWithoutFile = () => {
        return {
            "sections": [
                {
                    "id": "dbs",
                    "values": {
                        "TextSignDeclaration": [],
                        "SignDeclarationStatus": ["Signed"],
                        "DBSDetailsText": [],
                        "DBSUpdateRegistered": ["DBSUpdateYes"],
                        "DBSUpdateCertificateNumber": ["007777777777"],
                        "DBSUpdateCertificate": [],
                        "DBSUpdateCertificateDate": [],
                        "DBSUpdateCheckDate": [],
                        "DBSUpdateResult": ["DBSInvalidDetails"],
                        "DBSRecheck": [],
                        "DBSCriteriaMet": [],
                        "DBSForceSectionStatus": [],
                        "DBSUpdateComplete": []
                    }
                }
            ]
        }
    }

    this.getDBSSectionInfoForAdminSignedWithoutFileComplete = () => {
        return {
            "sections": [
                {
                    "id": "dbs",
                    "values": {
                        "TextSignDeclaration": [],
                        "SignDeclarationStatus": ["FileError"],
                        "DBSDetailsText": [],
                        "DBSUpdateRegistered": ["DBSUpdateNo"],
                        "DBSquestion": ["DBSCertificateNo"],
                        "TextPreEmploymentChecks2": [],
                        "DBSForceSectionStatus": ["MarkSectionComplete"],
                        "DBSUpdateComplete": []
                    }
                }
            ]
        }
    }

    this.getDBSSectionInfoForAdminSignedWithoutFile66 = () => {
        return {
            "sections": [
                {
                    "id": "dbs",
                    "values": {
                        "TextSignDeclaration": [],
                        "SignDeclarationStatus": ["Signed"],
                        "DBSDetailsText": [],
                        "DBSUpdateRegistered": ["DBSUpdateYes"],
                        "DBSUpdateCertificateNumber": ["006666666666"],
                        "DBSUpdateCertificate": [],
                        "DBSUpdateCertificateDate": [],
                        "DBSUpdateCheckDate": [],
                        "DBSUpdateResult": ["DBSInvalidDetails"],
                        "DBSRecheck": [],
                        "DBSCriteriaMet": [],
                        "DBSForceSectionStatus": [],
                        "DBSUpdateComplete": []
                    }
                }
            ]
        }
    }

    this.getDBSSectionInfoForAdminSignedWithoutFile55 = () => {
        return {
            "sections": [
                {
                    "id": "dbs",
                    "values": {
                        "TextSignDeclaration": [],
                        "SignDeclarationStatus": ["Signed"],
                        "DBSDetailsText": [],
                        "DBSUpdateRegistered": ["DBSUpdateYes"],
                        "DBSUpdateCertificateNumber": ["005555555555"],
                        "DBSUpdateCertificate": [],
                        "DBSUpdateCertificateDate": [],
                        "DBSUpdateCheckDate": [],
                        "DBSUpdateResult": ["DBSInvalidDetails"],
                        "DBSRecheck": [],
                        "DBSCriteriaMet": [],
                        "DBSForceSectionStatus": [],
                        "DBSUpdateComplete": []
                    }
                }
            ]
        }
    }

    this.getReferencesInfo = () => {
        return {"sections": [
                {
                    "id": "references",
                    "values": {
                        "TextReferences": [],
                        "Reference": [
                            {
                                "RefereeName": ["Rio"],
                                "Employer": ["PMC"],
                                "TextReferencePeroid": [],
                                "ReferencePeriodEndDate": ["1992-01-01"],
                                "JobTitle": ["Senior"],
                                "ReferencePeriodStartDate": ["1991-01-01"],
                                "RefereeWorkEmailAddress": ["rio@test.com"]
                            },
                            {
                                "RefereeName": ["Denver"],
                                "Employer": ["PMC"],
                                "TextReferencePeroid": [],
                                "ReferencePeriodEndDate": ["1994-01-01"],
                                "JobTitle": ["Senior"],
                                "ReferencePeriodStartDate": ["1993-01-01"],
                                "RefereeWorkEmailAddress": ["denver@test.com"]
                            }
                        ]
                    }
                }
            ]
        }
    }

    this.getNextOfKinSectionInfo = () => {
        return {"sections": [
                {
                    "id": "tax-and-next-of-kin",
                    "values": {
                        "TaxCollectionText": [""],
                        "PaymentMethod": ["LTD"],
                        "TextTaxAndNOK2": [""],
                        "NextOfKin": [
                            {
                                "NextOfKinFirstName": ["Nimesh"],
                                "NextOfKinSurName": ["Bhatt"],
                                "NextOfKinRelationship": ["friend"],
                                "NextOfKinPhone": ["+44123456789"]
                            }
                        ],
                        "CertificateOfIncorporation": [
                            {"fileName": `${incorporationCertiKin[0][0]}`, "fileSizeBytes": `${incorporationCertiKin[0][1]}`, "dateCreated": `${incorporationCertiKin[0][2]}`}
                        ],
                        "ProofOfBusinessBankAccount": [
                            {"fileName": `${businessCertiKin[0][0]}`, "fileSizeBytes": `${businessCertiKin[0][1]}`, "dateCreated": `${businessCertiKin[0][2]}`}
                        ]
                    }
                }
            ]
        }
    }

    this.getRightToWorkChecksInfo = () => {
        return {
            "sections": [
                {
                    "id": "identification-documents",
                    "values": {
                        "TextPreEmploymentChecks": [],
                        "RightToWorkSelection": ["RightToWorkEUUKPassport"],
                        "TextProofOfAddress": [],
                        "ProofOfAddress1": ["ProofOfAddressBankStatement"],
                        "ProofOfAddress2Select": ["ProofOfAddress2UtilityBill"],
                        "TextProofOfNameChange": [],
                        "NameChangeSelection": ["No"],
                        "RightToWorkEUUKPassport": [
                            {
                                "fileName": `${rightToWorkChecks1[0][0]}`,
                                "fileSizeBytes": `${rightToWorkChecks1[0][1]}`,
                                "dateCreated": `${rightToWorkChecks1[0][2]}`
                            }
                        ],
                        "ProofOfAddressBankStatement": [
                            {
                                "fileName": `${rightToWorkChecks2[0][0]}`,
                                "fileSizeBytes": `${rightToWorkChecks2[0][1]}`,
                                "dateCreated": `${rightToWorkChecks2[0][2]}`
                            }
                        ],
                        "ProofOfAddress2UtilityBill": [
                            {
                                "fileName": `${rightToWorkChecks3[0][0]}`,
                                "fileSizeBytes": `${rightToWorkChecks3[0][1]}`,
                                "dateCreated": `${rightToWorkChecks3[0][2]}`
                            }
                        ]
                    }
                }
            ]
        }
    }

    this.getRightToWorkChecksInfoWithChangedName = () => {
        return {
            "sections": [
                {
                    "id": "identification-documents",
                    "values": {
                        "TextPreEmploymentChecks": [
                            ""
                        ],
                        "RightToWorkSelection": [
                            "RightToWorkEUUKPassport"
                        ],
                        "TextProofOfAddress": [
                            ""
                        ],
                        "ProofOfAddress1": [
                            "ProofOfAddressBankStatement"
                        ],
                        "ProofOfAddress2Select": [
                            "ProofOfAddress2UtilityBill"
                        ],
                        "TextProofOfNameChange": [
                            ""
                        ],
                        "NameChangeSelection": [
                            "Yes"
                        ],
                        "RightToWorkEUUKPassport": [
                            {
                                "fileName": `${rightToWorkChecks1[0][0]}`,
                                "fileSizeBytes": `${rightToWorkChecks1[0][1]}`,
                                "dateCreated": `${rightToWorkChecks1[0][2]}`
                            }
                        ],
                        "ProofOfAddressBankStatement": [
                            {
                                "fileName": `${rightToWorkChecks2[0][0]}`,
                                "fileSizeBytes": `${rightToWorkChecks2[0][1]}`,
                                "dateCreated": `${rightToWorkChecks2[0][2]}`
                            }
                        ],
                        "ProofOfAddress2UtilityBill": [
                            {
                                "fileName": `${rightToWorkChecks3[0][0]}`,
                                "fileSizeBytes": `${rightToWorkChecks3[0][1]}`,
                                "dateCreated": `${rightToWorkChecks3[0][2]}`
                            }
                        ],
                        "NameChangeDocument": [
                            {
                                "fileName": `${rightToWorkChecks4[0][0]}`,
                                "fileSizeBytes": `${rightToWorkChecks4[0][1]}`,
                                "dateCreated": `${rightToWorkChecks4[0][2]}`
                            }
                        ]
                    }
                }
            ]
        }
    }
};

module.exports = new DataServices();