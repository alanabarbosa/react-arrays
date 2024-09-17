import React from 'react';

const livros = [
    { nome: 'A Game of Thrones', ano: 1996 },
    { nome: 'A Clash of Kings', ano: 1998 },
    { nome: 'A Storm of Swords', ano: 2000 },
    { nome: 'A Feast for Crows', ano: 2005 },
    { nome: 'A Dance with Dragons', ano: 2011 },
    { nome: 'The Winds of Winter', ano: 2024 },
    { nome: 'A Dream of Spring', ano: 2028 },    
    { nome: 'The Fellowship of the Ring', ano: 1954 },
    { nome: 'The Two Towers', ano: 1954 },
    { nome: 'The Return of the King', ano: 1955 },
    { nome: 'Harry Potter and the Philosopher\'s Stone', ano: 1997 },
    { nome: 'Harry Potter and the Chamber of Secrets', ano: 1998 },
    { nome: 'Harry Potter and the Prisoner of Azkaban', ano: 1999 },
    { nome: 'Harry Potter and the Goblet of Fire', ano: 2000 },
    { nome: 'Harry Potter and the Order of the Phoenix', ano: 2003 },
    { nome: 'Harry Potter and the Half-Blood Prince', ano: 2005 },
    { nome: 'Harry Potter and the Deathly Hallows', ano: 2007 },
  ];
  


const Livros = () => {
    
    return (
        <>
        <h2>Livros</h2>
        {livros.filter(({ ano}) => ano >= 1998)
        .map(({nome, ano}) => 
        <li key={nome}>
            {nome}, {ano}
        </li>)
                   
        }      
        </>
    )
}

export default Livros;