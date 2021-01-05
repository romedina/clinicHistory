import React, { useState } from 'react';
import { personalDetail, familyBackground, nonPatologicalBackground, patologicalBackground } from '../data/PatientData';
import { Button, Box, Paper, Grid } from '@material-ui/core';
import FormSection from './FormSection';
import Welcome from './Welcome';

const UserForm = () => {

    const [step, setStep] = useState(0);

    const [patientData, setPatientData] = useState(() => (
        {
            personalDetail: { ...personalDetail, title: 'Datos del Paciente' },
            familyBackground: { ...familyBackground, title: 'Antecedentes Familiares' },
            nonPatologicalBackground: { ...nonPatologicalBackground, title: 'Antecedentes Personales No Patológicos' },
            patologicalBackground: { ...patologicalBackground, title: 'Antecedentes Personales Patológicos' }
        }
    ));

    const nextStep = () =>
        step < Object.keys(patientData).length ?
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
                    ...patientData[section][key],
                    value: event.target.value
                }
            }
        }
        );
    }


    const renderSection = (value) => {

        switch (value) {
            case 0:
                return(
                    <Welcome/>
                )
            case 1:
                return (
                    <FormSection
                        section={Object.keys(patientData)[0]}
                        data={patientData}
                        handler={handlePatientData}
                        title={patientData[Object.keys(patientData)[0]]['title']}

                    />
                )

            case 2:
                return (
                    <FormSection
                        section={Object.keys(patientData)[1]}
                        data={patientData}
                        handler={handlePatientData}
                        title={patientData[Object.keys(patientData)[1]]['title']}
                    />
                )

            case 3:
                return (
                    <FormSection
                        section={Object.keys(patientData)[2]}
                        data={patientData}
                        handler={handlePatientData}
                        title={patientData[Object.keys(patientData)[2]]['title']}
                    />
                )

            case 4:
                return (
                    <FormSection
                        section={Object.keys(patientData)[3]}
                        data={patientData}
                        handler={handlePatientData}
                        title={patientData[Object.keys(patientData)[3]]['title']}
                    />
                )

            default:
                break;
        }

    }


    return (
        <>
            
            <Box p={2}>
                <Paper elevation={5}>
                    <Box p={4}>
                        {
                            renderSection(step)
                        }
                    </Box>
                </Paper>
            </Box>

            <Grid container>
                <Grid item xs={6}>
                    <Button size='large' fullWidth variant='outlined' color='primary' onClick={previousStep}>Regresar</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button size='large' fullWidth variant='contained' color='primary' onClick={nextStep}>{patientData[Object.keys(patientData)[step]] !== undefined ? 'siguiente' : 'terminar'}</Button>
                </Grid>
            </Grid>


        </>
    )
}

export default UserForm;