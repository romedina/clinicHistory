import React, { useState } from 'react';
import { personalDetail, familyBackground, nonPatologicalBackground,patologicalBackground } from '../data/PatientData';
import { Button, Box, Paper } from '@material-ui/core';
import FormSection from './FormSection';

const UserForm = () => {

    const [step, setStep] = useState(0);

    const [patientData, setPatientData] = useState(() => (
        {
            personalDetail: { ...personalDetail },
            familyBackground: { ...familyBackground },
            nonPatologicalBackground: {...nonPatologicalBackground},
            patologicalBackground: {...patologicalBackground}
        }
    ));

    const nextStep = () =>
        step < 5 ?
            setStep(() => step + 1) : 0


    const previousStep = () =>
        step > 0 ? setStep(() => step - 1) : 0

    const handlePatientData = (section, key) => event => {
        console.log(patientData);
        setPatientData({
            ...patientData,
            [section]: {
                ...patientData[section],
                [key]: {
                    value: event.target.value
                }
            }
        }
        );
    }


    const renderSection = (value) => {

        switch (value) {
            case 1:
                return (
                    <FormSection
                        section={Object.keys(patientData)[0]}
                        data={patientData}
                        handler={handlePatientData}
                        title={'Datos del Paciente'}

                    />
                )

            case 2:
                return (
                    <FormSection
                        section={Object.keys(patientData)[1]}
                        data={patientData}
                        handler={handlePatientData}
                        title={'Antecedentes Familiares'}
                    />
                )

            case 3:
                return (
                    <FormSection
                        section={Object.keys(patientData)[2]}
                        data={patientData}
                        handler={handlePatientData}
                        title={'Antecedentes Personales No Patológicos'}
                    />
                )
            
            case 4:
                return (
                    <FormSection
                        section={Object.keys(patientData)[3]}
                        data={patientData}
                        handler={handlePatientData}
                        title={'Antecedentes Personales Patológicos'}
                    />
                )

            default:
                break;
        }

    }


    return (
        <>
            <Box p={10}>
                <Paper elevation={5}>
                    <Box p={8}>
                    {
                        renderSection(step)
                    }
                    </Box>
                </Paper>
            </Box>

            <Button onClick={previousStep}>Back</Button>
            <Button onClick={nextStep}>Next</Button>
        </>
    )
}

export default UserForm;