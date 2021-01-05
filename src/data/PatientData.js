import {typeText,typeRadio,typePhone,typeNumber,typeDate} from './dataTypes';



const createInputField = (type, label, value = '') =>
({
    value: value,
    type: type,
    label: label
})

const addOptions = (obj, options) =>
(
    {
        ...obj,
        options:options
    }
)

export const personalDetail = {
    name: createInputField(typeText, 'Nombre'),
    age: createInputField(typeNumber, 'Edad'),
    gender: addOptions(createInputField(typeRadio, 'Sexo'), ['Masculino', 'Femenino', 'Prefiero no decir']),
    phone: createInputField(typePhone,'Teléfono'),
    birthDate: createInputField(typeDate,'Fecha de Nacimiento'),
    birthPlace: createInputField(typeText,'Lugar de Nacimiento'),
    employment: createInputField(typeText,'Ocupación'),
    civilStatus: addOptions(createInputField(typeRadio,'Estado Civil'),['Casado','Soltero','Viudo']),
    religion:createInputField(typeText,'Religión'),
    referal:createInputField(typeText,'¿Cómo se enteró de nosotros?')
}

export const familyBackground ={
    mother:createInputField(typeText,'Madre'),
    father:createInputField(typeText,'Padre'),
    brothers:createInputField(typeText,'Hermanos'),
    children:createInputField(typeText,'Hijos'),
    others:createInputField(typeText,'Otros'),
}

export const nonPatologicalBackground = {
    vaccines:createInputField(typeText,'Vacunas'),
    feeding:createInputField(typeText,'Alimentación'),
    excercise:createInputField(typeText,'Actividad Física'),
    smoking:createInputField(typeText,'Tabaquismo'),
    alcohol:createInputField(typeText,'Etilismo'),
    drugs:createInputField(typeText,'Toxicomanías'),
}

export const patologicalBackground = {
    allergies:createInputField(typeText,'Alergias'),
    transfusions:createInputField(typeText,'Transfusiones'),
    fractures:createInputField(typeText,'Fracturas'),
    surgeries:createInputField(typeText,'Cirugías'),
    chronicDegenerative:createInputField(typeText,'Crónico-Degenerativas')
}

