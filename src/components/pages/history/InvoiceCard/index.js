import "./InvoiceCard.scss";

export const IncoiceCard = () => {
  return (
    <div className="card InvoiceCard">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <h4 className="title"> Invoice</h4>
          </div>
          <div className="col-md-6 text-end">
            <button className="btn btn-invoice">Paid Date 21/07/2023</button>
            <button className="btn btn-action mx-2">
              <img src={require("../../../../assets/img/Printer.png")} />
            </button>
            <button className="btn btn-action ms-2">
              <img src={require("../../../../assets/img/DownloadSimple.png")} />
            </button>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table class="table invoice-table">
          <thead>
            <tr>
              <th scope="col">Part no.</th>
              <th scope="col">Part Description</th>
              <th scope="col">Qty</th>
              <th scope="col">Unit price</th>
              <th scope="col">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tail Lamp</td>
              <td>Apsmotiv 2 Pcs 12V Yellow & Red Rear Tail Light </td>
              <td>1</td>
              <td className="active">₹ 1200</td>
              <td className="active">₹ 1200</td>
            </tr>

            <tr>
              <td>Tail Lamp</td>
              <td>Apsmotiv 2 Pcs 12V Yellow & Red Rear Tail Light </td>
              <td>1</td>
              <td className="active">₹ 800</td>
              <td className="active">₹ 800</td>
            </tr>

            <tr className="summary">
              <td colSpan={2}> Service Description</td>

              <td>Count</td>
              <td>Charges</td>
              <td>Total Amount</td>
            </tr>
            <tr>
              <td colSpan={2}>Changed the tail lamp Light </td>
              <td>1</td>
              <td className="active">₹ 250</td>
              <td className="active">₹ 250</td>
            </tr>
            <tr>
              <td colSpan={2}>Changed the wire</td>

              <td>1</td>
              <td>₹ 200</td>
              <td className="active">₹ 200</td>
            </tr>
            <tr className="summary">
              <td colSpan={3}> </td>
              <td>Subtotal</td>
              <td className="active">₹ 2450</td>
            </tr>
            <tr className="summary">
              <td colSpan={3}> </td>
              <td>18% of tax</td>
              <td className="active">₹ 441</td>
            </tr>
            <tr className="summary">
              <td colSpan={3}>(two thousand eight hundred ninety-one only)</td>
              <td>Grand Total</td>
              <td className="total">₹ 2891</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
