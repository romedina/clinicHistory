import {
    TextField,
    Typography,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    Grid,
    Box
} from '@material-ui/core';

import {
    typeText,
    typeRadio,
    typePhone,
    typeNumber,
    typeDate
} from '../data/dataTypes';

const FormSection = props => {

    const { data, handler, section, title, description } = props;

    console.log(data);

    const renderFormElement = (index, type, section, element, value, label, options) => {
        switch (type) {
            case typeText || typePhone || typeNumber:
                return (
                    <Grid key={index} item xs={12} md={7}>
                        <Box mb={2}>
                            <TextField
                                fullWidth
                                variant='outlined'
                                value={value}
                                type={type}
                                onChange={handler(section, element)}
                                label={label} />
                        </Box>

                    </Grid>
                )

            case typeRadio:
                return (
                    <Grid key={index} item xs={12} md={7}>
                        <FormControl  component="fieldset">
                            <FormLabel component="legend">{label}</FormLabel>
                            <RadioGroup aria-label={label} name={`${label}1`} value={element[0]} >
                                {
                                    options.map((element, i) => {
                                        return (
                                            <FormControlLabel key={i} value={element} control={<Radio />} label={element} />
                                        )
                                    })
                                }
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                )
        }
    }

    return (
        <>
            <Grid container justify='center'>
                <Grid item xs={12}>
                    <Typography variant='h4' align='center' gutterBottom>{title}</Typography>
                </Grid>
                {
                    Object.keys(data[section]).map((element, index) => {
                        const obj = data[section]
                        const { value, type, label, options } = obj[element];
                        return renderFormElement(index, type, section, element, value, label, options)
                    })
                }
            </Grid>
        </>
    )
}

export default FormSection;