import {TextField,Typography} from '@material-ui/core';

const FormSection = props =>{

    const{data,handler,section,title,description} = props;

    console.log(data);

    return(
        <>
            <Typography variant='h4'>{title}</Typography>
            {
                Object.keys(data[section]).map((element,index)=>{
                    const obj = data[section]
                    const {value,type,label} = obj[element];
                    return <TextField 
                            fullWidth
                            variant='outlined'
                            key={index} 
                            value={value}
                            type={type}
                            onChange={handler(section,element)} 
                            label={label}/>
                })
            }
        </>
    )
}

export default FormSection;