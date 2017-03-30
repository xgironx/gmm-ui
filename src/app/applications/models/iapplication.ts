export interface IApplication {
    amount: number,
    applicant: string,
    applicationId: string,
    applicationNumber: number,
    fiscalYear: number,
    grantType: string,
    grantee1?: IGrantee,
    grantee2?: IGrantee,
    organization?: IOrganization,
    poc: string,
    pointOfContact?: IPointOfContact,
    programId: number,
    status: string,
    subGrantee: string,
    subGrantee1?: ISubGrantee,
    subGrantee2?: ISubGrantee
}

export interface IGrantee {
    address1: string,
    address2: string,
    applicantType: string,
    city: string,
    dunsID: string,
    finReportDate: string,
    firstName: string,
    id: string,
    lastName: string,
    state: string,
    taxID: string
}

export interface ISubGrantee {
    address1: string,
    address2: string,
    applicantType: string,
    city: string,
    dunsID: string,
    finReportDate: string,
    firstName: string,
    id: string,
    lastName: string,
    state: string,
    taxID: string
}

export interface IOrganization {
    address1: string,
    applicationType: string,
    district: string,
    name: string,
    organizationId: string,
    phoneNumber: string,
    projectNumber: number,
    projectTitle: string,
    projectYear: number,
    state: string
}

export interface IPointOfContact {
    address1: string,
    address2: string,
    city: string,
    email: string,
    firstName: string,
    id: string,
    lastName: string,
    middleInitial: string,
    organization: string,
    phone: string,
    state: string,
    title: string,
    zip: string
}