import React from 'react';

const clientes = [
    {
      cliente: 'Luana',
      idade: 27,
      compras: [
        { nome: 'Notebook', preco: 'R$ 2500' },
        { nome: 'Geladeira', preco: 'R$ 3000' },
        { nome: 'Smartphone', preco: 'R$ 1500' },
      ],
      ativa: true,
    },
    {
      cliente: 'João',
      idade: 35,
      compras: [
        { nome: 'Televisão', preco: 'R$ 2000' },
        { nome: 'Máquina de Lavar', preco: 'R$ 1800' },
        { nome: 'Câmera Fotográfica', preco: 'R$ 1200' },
      ],
      ativa: false,
    },
    {
      cliente: 'Maria',
      idade: 41,
      compras: [
        { nome: 'Ar-condicionado', preco: 'R$ 3500' },
        { nome: 'Sofá', preco: 'R$ 2200' },
        { nome: 'Micro-ondas', preco: 'R$ 400' },
      ],
      ativa: true,
    },
    {
      cliente: 'Pedro',
      idade: 29,
      compras: [
        { nome: 'Console de Videogame', preco: 'R$ 2800' },
        { nome: 'Fritadeira Elétrica', preco: 'R$ 300' },
        { nome: 'Smartwatch', preco: 'R$ 900' },
      ],
      ativa: false,
    }
  ];
  


const Clientes = () => { 
    
    return (
        <>
            <h2>Clientes</h2>
           {clientes.map(({cliente, idade, compras, ativa}, index) => {
                const totalCompras = compras.map(item => Number(item.preco.replace('R$ ', '')))
                .reduce((a, b) => a + b);

            return (
                <div key={index}>
                    <h3>Cliente: {cliente}</h3>
                    <p>Idade: {idade}</p>
                    <p>Compras:</p>
                    <ul>
                        {compras.map((item, idx) => (
                            <li key={idx}>
                                {item.nome} - {item.preco}
                            </li>
                        ))}
                    </ul>
                    <p>Total de compras: R$ {totalCompras}</p>
                    <p>Status: <span style={{ color: ativa ? 'green' : 'red'}}>{ ativa ? 'Ativa' : 'Desativada'}</span></p>
                </div>
            )

           })} 
        </>
    )
}

export default Clientes;