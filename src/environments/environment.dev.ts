// export const environment = {
//   production: true,
//   serviceBase: "http://application-dev.apps.gmm.bahincubator.com:80/",
//   serviceBaseActiviti: "http://activiti-svc-dev.apps.gmm.bahincubator.com:80/"
// };

export const environment = {
  production: false,
  serviceBase: "http://data-dev.apps.gmm.bahincubator.com/swagger-ui.html", //"http://application-dev.apps.gmm.bahincubator.com/","http://localhost:8402/",
  serviceBaseActiviti: "http://data-dev.apps.gmm.bahincubator.com/",
};

export const serviceRoutes = {
  swagger: {
    applicationForm: {
      submit: environment.serviceBase + '/submit'
    },
    grants: {
      getGrantTypes: environment.serviceBase + '/getGrantTypes',
      getApplicationForm: environment.serviceBase + '/getAppForm'
    }
  },
  activiti: {
    applicationForm: {
      submit: environment.serviceBase + '/submit'
    },
    grants: {
      getGrantTypes: environment.serviceBase + '/getGrantTypes',
      getApplicationForm: environment.serviceBase + '/getAppForm'
    }
  }
}