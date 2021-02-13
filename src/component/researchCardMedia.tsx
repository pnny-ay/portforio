import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

type Props = {
  name: string;
  srcTitle: string;
};

const UseStyles = makeStyles({
root: {
maxWidth: 300,
},
});

const researchCard: React.FunctionComponent<Props> = (props) => { const { name, srcTitle } = props;

return (
        <CardMedia
          src={name}
          title={srcTitle}
          component="iframe"
          height="300"
          allow="autoPlay"
        />
);
}

export default researchCard;