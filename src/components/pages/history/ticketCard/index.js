import "./ticketCard.scss";

import { TagItList } from "../../../common";
export const TicketCard = () => {
  const mechanicList = [
    {
      label: "Thirunavukarasu",
      value: 0,
    },
    {
      label: "P.Ramanujam",
      value: 1,
    },
  ];

  const natureofissue = [
    {
      label: "Mileage issue",
      value: 0,
    },
    {
      label: "Battery vibration/abnormal noise ",
      value: 1,
    },
  ];
  return (
    <div className="card ticketCard mb-5">
      <div className="card-header">
        <h4 className="ticket-title">
          Ticket No <span className="ticket-code"> #5011513</span>
        </h4>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-borderless table-sm v-detail">
              <tbody>
                <tr>
                  <td>Customer name</td>
                  <td>Phone number</td>
                  <td>Vehicle model</td>
                  <td>Vehicle number</td>
                  <td>Running Km</td>
                  <td>Last service</td>
                </tr>
                <tr>
                  <td>Kosaksi pasapugal</td>
                  <td>9085456352</td>
                  <td>BOW-Cafe</td>
                  <td>TN07 CF 5644</td>
                  <td>20,521 km</td>
                  <td>12/06/2023</td>
                </tr>
              </tbody>
            </table>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="mb-3">
              <label className="form-label">Engineer</label>
              <input type="text" className="form-control" value="Bharath " />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <label className="form-label">Engineer</label>
              <TagItList data={mechanicList} />
            </div>
          </div>
          <div className="col-12">
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <div className="mb-3">
              <label className="form-label">Service type</label>
              <input
                type="text"
                className="form-control"
                value="General Service 1"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="mb-3">
              <label className="form-label">Nature of issue</label>
              <TagItList data={natureofissue} />
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <label className="form-label">Nature of issue</label>
              <textarea
                className="form-control"
                value={
                  "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
                }
                rows="3"
              ></textarea>
            </div>
          </div>
          <div className="col-12">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3">
              <label className="suptitle mb-2">Image Remarks</label>
              <ul class="nav ">
                {
                    [1,2,3,4,5,6].map((data,i)=><li class="nav-item mx-2" key={i}>
                    <img className="autoImg" src={require('../../../../assets/img/auto.png')}/> 
                </li>)
                }
              </ul>
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              <label className="form-label">Nature of issue</label>
              <textarea
                className="form-control"
                value={
                  "There's a dent on left side below side mirror "
                }
                rows="3"
              ></textarea>
            </div>
          </div>
          <div className="col-12">
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};
