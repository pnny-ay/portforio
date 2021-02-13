import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import styled from '@emotion/styled';


type Props={name: string;};

const Title: React.FunctionComponent<Props> = (props) => { const { name } = props;
return (
    <Typography component="div" color="textSecondary">
        <Box textAlign="center" letterSpacing={6} fontWeight="fontWeightBold" fontSize="h5.fontSize">
            <Line>{name}</Line>
        </Box>

        </Typography>
); };

const Line = styled('span')({
    borderBottom: 'dotted 3px #1697B2',
})
export default Title;