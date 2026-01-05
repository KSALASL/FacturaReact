import { getInvoice } from "../Services/getInvoice";

export const InvoiceApp = () => {
  const invoice = getInvoice();
  const {name, lastName} = invoice.client

  return (
    <>
      <h1>{invoice.name}</h1>
      <ul>
        <li>{ invoice.id }</li>
      </ul>

        <h3>Datos del cliente</h3>
        <ul>
            <li>{ name } { lastName }</li>
        </ul>

    </>
  );
};
