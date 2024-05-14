import { useState } from 'react'
import classes from './ProductForm.module.css'

export default function ProductForm({name, price, stock, saveProduct, deleteProduct, editProduct, handleName, handlePrice, handleStock}) {
  
    return (
        <div className={classes.container}>
            <h2>Cadastro de Produtos</h2>
            <form onSubmit={saveProduct}>
                <label htmlFor='nome'>Nome:</label>
                <input type="text" name='nome' required/>
                <label htmlFor="preco">Preço:</label>
                <input type="number" name="preco" required/>
                <label htmlFor="estoque">Estoque:</label>
                <input type="number" name="estoque" required/>
                <input type="submit" value="Cadastrar"/>
            </form>
        </div>    
    )
}