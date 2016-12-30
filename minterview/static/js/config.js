var config={
  web: {
    hrcURL: "http://test.r.hrc.oa.com",
    URL: "http://dev.interview.oa.com:8888"
  },
  tof: {
    signin: "http://passtest.oa.com/modules/passport/signin.ashx?url={realmName}",
    signout: "http://passtest.oa.com/modules/passport/signout.ashx?url={realmName}",
    encryptedTicket: {
      hostname: "test.api.tof.oa.com",
      path: '/api/v1/Passport/DecryptTicketWithClientIP',
      uri:"http://test.api.tof.oa.com/api/v1/Passport/DecryptTicketWithClientIP"
    },
    systemId: 23758,
    appkey: 'f7c195409439423f939a0af1de6d22fa'
  },
  api: {
    port: 16000,
    uri:'http://localhost:16000',
    hostname: 'localhost'
  }
}
