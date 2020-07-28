import React from 'react';
import PageRoot from '../../../Components/PageRoot/Index';
import { Link } from 'react-router-dom';

function CadastroVideo(){
return(
    <PageRoot>
        <h1>Add a Video</h1>


        <Link to="/cadastro/categoria">
            Add a Category/Video Classification
        </Link>
    </PageRoot>
);
}

export default CadastroVideo;