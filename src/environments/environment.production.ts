export const environment = {
    production: true,
    keycloak: {
        url:  'https://keycloak-docker-production-694b.up.railway.app/' ,
        realm: 'dacs',
        clientId: 'The Boat'
    },
       //backendForFrontendUrl: 'http://localhost:8088',
      backendForFrontendUrl: '/api'
};