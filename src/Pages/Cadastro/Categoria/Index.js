import React from 'react';
import PageRoot from '../../../Components/PageRoot/Index';
import { Link } from 'react-router-dom';

function CadastroCategoria(){
return(
    <PageRoot>
        <h1>Add Category</h1>

        <form>
            <label>
                Category Name:
                <input type="text" />
            </label>
            <button>
                Register
            </button>
        </form>

        <Link to="/">
            Go to home
        </Link>
    </PageRoot>
);
}

export default CadastroCategoria;