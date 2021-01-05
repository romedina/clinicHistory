import { Typography, Box } from '@material-ui/core'

const Welcome = () => {
    return (
        <>
            <Box pt={7} pb={10}>
                <Box mb={5}>
                    <Typography color='primary' align='center' gutterBottom variant='h5'> Bienvenido a la consulta de la Dra. Carolina Lara</Typography>
                </Box>
                <Box mb={3}>
                    <Typography color="textPrimary" variant='body1'> Por favor, llene el siguiente cuestionario con la información lo más precisa posible.</Typography>
                </Box>

                <Typography color="textSecondary" variant='body2'>En un momento la doctora le atenderá, gracias por su amable espera!</Typography>
            </Box>

        </>
    )
}

export default Welcome;