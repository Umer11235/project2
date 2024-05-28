import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });
  

  export const CreateUserSchema = Yup.object().shape({
    userEmail: Yup.string().email('Invalid email').required('Required'),
    userName: Yup.string().required('Employee Name Required'),
    password: Yup.string().required('Required')
  });
  export const updateEventSchema = Yup.object().shape({
     
    eventMappingId: Yup.number().required('Required'),
    inHandDate: Yup.string().required('Required'),
    eventDate: Yup.string().required('Required'),
    listCostPercentage: Yup.number().required('Required'),
    hasGALAWNPIT: Yup.boolean().required('Required'),
    allowPreSales: Yup.boolean().required('Required'),
    
  });
  export const skyboxEventSchema = Yup.object().shape({
     
    eventName: Yup.string().required('Required'),
    venueName: Yup.string().required('Required'),
    
    
  });

  export const updateSettingSchema = Yup.object().shape({
     
    skyboxXApplicationToken: Yup.string().required('Required'),
    skyboxXApiToken: Yup.string().required('Required'),
    skyboxXAccount: Yup.string().required('Required'),
    skyboxVendorID: Yup.string().required('Required'),
    automatiqXApiToken: Yup.string().required('Required'),
    failedProxiesThreshold: Yup.number().required('Required'),
    automatiqXCompanyId: Yup.string().required('Required'),
    publicNotes: Yup.string().required('Required'),
    internalNotes: Yup.string().required('Required'),
    mails: Yup.string().required('Required'),
    fromMail: Yup.string().required('Required'),
    gmailUser: Yup.string().required('Required'),
    gmailPassword: Yup.string().required('Required'),
    stockType: Yup.string().required('Required'),
    tag: Yup.string().required('Required'),
    
    
  });
  export const AddEventSchema = Yup.object().shape({
     
    eventMappingId: Yup.number().required('Required'),
    inHandDate: Yup.string().required('Required'),
    eventName: Yup.string().required('Required'),
    venueName: Yup.string().required('Required'),
    tmEventId: Yup.string().required('Required'),
    eventUrl: Yup.string().required('Required'),
    image: Yup.string().required('Required'),
    eventDate: Yup.string().required('Required'),
    listCostPercentage: Yup.number().required('Required'),
    hasGALAWNPIT: Yup.boolean().required('Required'),
    allowPreSales: Yup.boolean().required('Required'),
    
  });

  export const CreateOfferSchema = Yup.object().shape({
    offerName: Yup.string().required('Offer Name Required'),
   });
  