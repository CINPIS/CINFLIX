import React, { useState } from 'react';
import PageRoot from '../../../Components/PageRoot/Index';
import { Link } from 'react-router-dom';
import FormField from '../../../Components/FormField/index';
import Button from '../../../Components/Button/Index';

function CadastroCategoria(){

    const [categories, setCategories] = useState([]); 
    //somente categoria, set vai alterar o valor base

    const initialValues = {
        nome: '',
        description: '',
        color: ''
    }

    const [values, setValues] = useState(initialValues);

    function setValue(key, value){
        setValues({      
            ...values,
            [key]: value,
        }); // chave pode ser nome, descricao ou cor - dinamico
    }

    function handleChange(e) {
     
        setValue(
            e.target.getAttribute('name'), 
            e.target.value
        );
    }


return(
    <PageRoot>
        <h1>Add Category: {values.name}</h1>

        <form onSubmit={function handleSubmit(e){
            e.preventDefault();
            setCategories([...categories, values]); //pega tudo e cria um novo array

            setValues(initialValues);
        }}>
        {/* States - uma forma de carregar só o que o essencial. 
        Target é o alvo da mudança */}

            <FormField 
                label="Category Name: "
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
            />
            
            <FormField 
                label="Description: "
                type="textarea"
                name="cdescription"
                value={values.description}
                onChange={handleChange}
            />  
            {/** 
            <FormField 
                label="Color: "
                type="color"
                name="color"
                value={values.color}
                onChange={handleChange}
            />*/}

      
            <Button>
                Register
            </Button>
        </form>

        <ul>
            {categories.map((category, indice) => {
                return(
                    <li key={`${category.name} ${indice}`}>
                        {category.name}
                    </li>
                );
            })}
        </ul>

        <Link to="/">
            Go to home
        </Link>
    </PageRoot>
);
}

export default CadastroCategoria;