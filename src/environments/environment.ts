// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  serviceBase: "http://data-dev.apps.gmm.bahincubator.com/swagger-ui.html", //"http://application-dev.apps.gmm.bahincubator.com/","http://localhost:8402/",
  serviceBaseActiviti: "http://activiti-svc-dev.apps.gmm.bahincubator.com:80/",
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
// export const environment = {
//   production: false,
//   serviceBase: "http://localhost:8080/",
//   serviceBaseActiviti: "http://activiti-svc-dev.apps.gmm.bahincubator.com:80/"
// };
