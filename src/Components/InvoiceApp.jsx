import { getInvoice } from "../Services/getInvoice";

export const InvoiceApp = () => {
  const {
    name: nameInvoice, 
    id, 
    client: {
        name, 
        lastName, 
    address: {country, city, street, number}}, 
    company: { name: nameCompany, nit}, 
    items }= getInvoice();  

  return (
    <>
      <h1>{nameInvoice}</h1>
      <ul>
        <li>{ id }</li>
      </ul>

        <h3>Datos del cliente</h3>
        <ul>
            <li>{ name } { lastName }</li>
            <li>{ country } - { city }</li>
            <li>{ street } - { number }</li>
        </ul>

        <h3>Datos de la empresa</h3>
        <ul>
            <li>{ nameCompany }</li>
            <li>{ nit }</li>
        </ul>

        <h3>Productos de la factura</h3>
        <table>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                { items.map(({name, price, quantity}) =>
                    (
                        <tr>                    
                            <td>{ name }</td>
                            <td>{ price }</td>
                            <td>{ quantity }</td>    
                        </tr>
                    )
                )}                
            </tbody>
        </table>
    </>
  );
};
