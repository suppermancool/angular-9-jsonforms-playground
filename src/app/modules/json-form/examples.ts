import { IJsonFormData } from 'src/app/shared/models/json-form-data';

export const examples: IJsonFormData[] = [
  //layout-horizontal
  {
    name: 'layout-horizontal',
    label: 'Layout Horizontal',
    data: {
      name: 'John Doe',
      vegetarian: false,
      birthDate: '1985-06-02',
      personalData: {
        age: 34,
      },
      postalCode: '12345',
    },
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          minLength: 3,
          description: 'Please enter your name',
        },
        vegetarian: {
          type: 'boolean',
        },
        birthDate: {
          type: 'string',
          format: 'date',
        },
        nationality: {
          type: 'string',
          enum: ['DE', 'IT', 'JP', 'US', 'RU', 'Other'],
        },
        personalData: {
          type: 'object',
          properties: {
            age: {
              type: 'integer',
              description: 'Please enter your age.',
            },
            height: {
              type: 'number',
            },
            drivingSkill: {
              type: 'number',
              maximum: 10,
              minimum: 1,
              default: 7,
            },
          },
          required: ['age', 'height'],
        },
        occupation: {
          type: 'string',
        },
        postalCode: {
          type: 'string',
          maxLength: 5,
        },
      },
      required: ['occupation', 'nationality'],
    },
    uischema: {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          label: 'Name',
          scope: '#/properties/name',
        },
        {
          type: 'Control',
          label: 'Birth Date',
          scope: '#/properties/birthDate',
        },
      ] as any,
    },
  },
  //rule
  {
    name: 'rule',
    label: 'Rule',
    data: {
      name: 'John Doe',
      alive: true,
      kindOfDead: 'Zombie',
    },
    schema: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        alive: {
          type: 'boolean',
        },
        kindOfDead: {
          type: 'string',
          enum: ['Zombie', 'Vampire', 'Ghoul'],
        },
      },
    },
    uischema: {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          label: 'Name',
          scope: '#/properties/name',
        },
        {
          type: 'Control',
          label: 'Is Alive?',
          scope: '#/properties/alive',
        },
        {
          type: 'Control',
          label: 'Kind of dead',
          scope: '#/properties/kindOfDead',
          rule: {
            effect: 'DISABLE',
            condition: {
              scope: '#/properties/alive',
              schema: {
                const: true,
              },
            },
          },
        },
      ] as any,
    },
  },
  //B4684
  {
    name: 'B4684',
    label: 'B4684',
    data: {
      firstName: '',
      lastName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
      member1Name: '',
      member2Name: '',
      member1Age: '',
      member2Age: '',
      member1PremiumTotal: '',
      member2PremiumTotal: '',
      member3Name: '',
      member4Name: '',
      member3Age: '',
      member4Age: '',
      member3PremiumTotal: '',
      member4PremiumTotal: '',
    },
    schema: {
      type: 'object',
      properties: {
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        addressLine1: {
          type: 'string',
        },
        addressLine2: {
          type: 'string',
        },
        city: {
          type: 'string',
        },
        state: {
          type: 'string',
          enum: ['IA', 'SD'],
        },
        zip: {
          type: 'string',
        },

        member1Name: {
          type: 'string',
        },
        member2Name: {
          type: 'string',
        },
        member1Age: {
          type: 'integer',
        },
        member2Age: {
          type: 'integer',
        },
        member1PremiumTotal: {
          type: 'integer',
        },
        member2PremiumTotal: {
          type: 'integer',
        },
        member3Name: {
          type: 'string',
        },
        member4Name: {
          type: 'string',
        },
        member3Age: {
          type: 'integer',
        },
        member4Age: {
          type: 'integer',
        },
        member3PremiumTotal: {
          type: 'integer',
        },
        member4PremiumTotal: {
          type: 'integer',
        },
      },
      required: [],
    },
    uischema: {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/firstName',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/lastName',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/addressLine1',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/addressLine2',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/city',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/state',
          width: 25,
        },
        {
          type: 'Control',
          scope: '#/properties/zip',
          width: 25,
        },
        {
          type: 'Control',
          scope: '#/properties/member1Name',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/member2Name',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/member1Age',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/member2Age',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/member1PremiumTotal',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/member2PremiumTotal',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/member3Name',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/member4Name',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/member3Age',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/member4Age',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/member3PremiumTotal',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/member4PremiumTotal',
          width: 50,
        },
      ] as any,
    },
  },
  //B4009
  {
    name: 'B4009',
    label: 'B4009',
    data: {
      firstName: '',
      lastName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',
      policyHolderMedical: '',
      spouseMedical: '',
      policyHolderDental: '',
      spouseDental: '',
      policyHolderVision: '',
      spouseVision: '',
      dependent1Name: '',
      dependent2Name: '',
      dependent1Medical: '',
      dependent2Medical: '',
      dependent1Dental: '',
      dependent2Dental: '',
      dependent1Vison: '',
      dependent2Vison: '',
    },
    schema: {
      type: 'object',
      properties: {
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        addressLine1: {
          type: 'string',
        },
        addressLine2: {
          type: 'string',
        },
        city: {
          type: 'string',
        },
        state: {
          type: 'string',
          enum: ['IA', 'SD'],
        },
        zip: {
          type: 'string',
        },
        policyHolderMedical: {
          type: 'string',
        },
        spouseMedical: {
          type: 'string',
        },
        policyHolderDental: {
          type: 'string',
        },
        spouseDental: {
          type: 'string',
        },
        policyHolderVision: {
          type: 'string',
        },
        spouseVision: {
          type: 'string',
        },
        dependent1Name: {
          type: 'string',
        },
        dependent2Name: {
          type: 'string',
        },
        dependent1Medical: {
          type: 'string',
        },
        dependent2Medical: {
          type: 'string',
        },
        dependent1Dental: {
          type: 'string',
        },
        dependent2Dental: {
          type: 'string',
        },
        dependent1Vison: {
          type: 'string',
        },
        dependent2Vison: {
          type: 'string',
        },
      },
      required: [],
    },
    uischema: {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/firstName',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/lastName',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/addressLine1',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/addressLine2',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/city',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/state',
          width: 25,
        },
        {
          type: 'Control',
          scope: '#/properties/zip',
          width: 25,
        },
        {
          type: 'Control',
          scope: '#/properties/policyHolderMedical',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/spouseMedical',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/policyHolderDental',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/spouseDental',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/policyHolderVision',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/spouseVision',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/dependent1Name',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/dependent2Name',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/dependent1Medical',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/dependent2Medical',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/dependent1Dental',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/dependent2Dental',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/dependent1Vison',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/dependent2Vison',
          width: 50,
        },
      ] as any,
    },
  },
  //N8620021
  {
    name: 'N8620021',
    label: 'N8620021',
    data: {
      firstName: '',
      lastName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',

      patientAccount: '',
      claim1: '',
      dateOfServiceFrom: '',
      dateOfServiceTo: '',
      accountReceivable: '',
      amoountDue: '',
      adjustmentReason: '',
    },
    schema: {
      type: 'object',
      properties: {
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        addressLine1: {
          type: 'string',
        },
        addressLine2: {
          type: 'string',
        },
        city: {
          type: 'string',
        },
        state: {
          type: 'string',
          enum: ['IA', 'SD'],
        },
        zip: {
          type: 'string',
        },

        patientAccount: {
          type: 'integer',
          title: 'Patient Account #'
        },
        claim1: {
          type: 'integer',
          title: 'Claim 1 #'
        },
        dateOfServiceFrom: {
          type: 'string',
          title: 'Date of Service From',
          format: 'date'
        },
        dateOfServiceTo: {
          type: 'string',
          title: 'Date of Service To',
          format: 'date'
        },
        accountReceivable: {
          type: 'integer',
          title: 'Account Receivable #'
        },
        amoountDue: {
          type: 'integer',
        },
        adjustmentReason: {
          type: 'string',
        },
      },
      required: [],
    },
    uischema: {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/firstName',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/lastName',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/addressLine1',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/addressLine2',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/city',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/state',
          width: 25,
        },
        {
          type: 'Control',
          scope: '#/properties/zip',
          width: 25,
        },
        {
          type: 'Control',
          scope: '#/properties/patientAccount',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/claim1',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/dateOfServiceFrom',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/dateOfServiceTo',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/accountReceivable',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/amoountDue',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/adjustmentReason',
          width: 100,
        },
      ] as any,
    },
  },
  //B9619646
  {
    name: 'B9619646',
    label: 'B9619646',
    data: {
      firstName: '',
      lastName: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      zip: '',

      memberName1: '',
      effectiveDate1: '',
      memberName2: '',
      effectiveDate2: '',
      memberName3: '',
      effectiveDate3: '',
      memberName4: '',
      effectiveDate4: '',
      cxaName: '',
    },
    schema: {
      type: 'object',
      properties: {
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        addressLine1: {
          type: 'string',
        },
        addressLine2: {
          type: 'string',
        },
        city: {
          type: 'string',
        },
        state: {
          type: 'string',
          enum: ['IA', 'SD'],
        },
        zip: {
          type: 'string',
        },

        memberName1: {
          type: 'string',
          title: 'Member Name'
        },
        effectiveDate1: {
          type: 'string',
          title: 'Effective Date',
          format: 'date'
        },
        memberName2: {
          type: 'string',
          title: 'Member Name'
        },
        effectiveDate2: {
          type: 'string',
          title: 'Effective Date',
          format: 'date'
        },
        memberName3: {
          type: 'string',
          title: 'Member Name'
        },
        effectiveDate3: {
          type: 'string',
          title: 'Effective Date',
          format: 'date'
        },
        memberName4: {
          type: 'string',
          title: 'Member Name'
        },
        effectiveDate4: {
          type: 'string',
          title: 'Effective Date',
          format: 'date'
        },
        cxaName: {
          type: 'string',
          title: 'CXA Name'
        },

      },
      required: [],
    },
    uischema: {
      type: 'HorizontalLayout',
      elements: [
        {
          type: 'Control',
          scope: '#/properties/firstName',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/lastName',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/addressLine1',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/addressLine2',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/city',
          width: 50,
        },
        {
          type: 'Control',
          scope: '#/properties/state',
          width: 25,
        },
        {
          type: 'Control',
          scope: '#/properties/zip',
          width: 25,
        },
        {
          type: 'Control',
          scope: '#/properties/memberName1',
          width: 68,
        },
        {
          type: 'Control',
          scope: '#/properties/effectiveDate1',
          width: 32,
        },
        {
          type: 'Control',
          scope: '#/properties/memberName2',
          width: 68,
        },
        {
          type: 'Control',
          scope: '#/properties/effectiveDate2',
          width: 32,
        },
        {
          type: 'Control',
          scope: '#/properties/memberName3',
          width: 68,
        },
        {
          type: 'Control',
          scope: '#/properties/effectiveDate3',
          width: 32,
        },
        {
          type: 'Control',
          scope: '#/properties/memberName4',
          width: 68,
        },
        {
          type: 'Control',
          scope: '#/properties/effectiveDate4',
          width: 32,
        },
        {
          type: 'Control',
          scope: '#/properties/cxaName',
          width: 68,
        },
      ] as any,
    },
  },
];
