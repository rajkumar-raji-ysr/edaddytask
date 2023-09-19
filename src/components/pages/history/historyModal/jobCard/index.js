import "./jobCard.scss";

export const JobCard = () => {
  return (
    <div className="card jobCard mb-5">
      <div className="card-header">
        <h4 className="ticket-title">
          {" "}
          <img
            className="me-2"
            alt=""
            src={require("../../../../../assets/img/job.png")}
          />
          Job card no. <span className="ticket-code"> #5011513</span>
        </h4>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-12">
            <label className="subTT">
              JC Date <span>12/03/2023</span>
            </label>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <label className="subTT">
              Ticket no. <span>12/03/2023</span>
            </label>
          </div>
          <div className="col-md-6">
            <label className="subTT">
              date <span>12/03/2023</span>
            </label>
          </div>
          <div className="col-md-12">
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <label className="subTT">
              Customer <br /> <span>Kosaksi pasapugal</span>
            </label>
          </div>
          <div className="col-md-6">
            <label className="subTT">
              Brand <br /> <span>E-Daddy</span>
            </label>
          </div>
          <div className="col-md-6">
            <label className="subTT">
              Model <br /> <span>BOW-customized</span>
            </label>
          </div>
          <div className="col-md-6">
            <label className="subTT">
              Vehicle no. <br /> <span>TN08BG1232</span>
            </label>
          </div>
          <div className="col-md-6">
            <label className="subTT">
              Motor number <br /> <span>Battery number </span>
            </label>
          </div>
          <div className="col-md-6">
            <label className="subTT">
              KM’s Driven <br /> <span>Mileage </span>
            </label>
          </div>
          <div className="col-md-12">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="mb-3">
              <label className="form-label">In</label>
              <input
                type="text"
                className="form-control active_in mb-3"
                value="13/06/2023 09:46:21 "
              />
            </div>
          </div>
          <div className="col-4">
            <div className="mb-3">
              <label className="form-label">Out</label>
              <input
                type="text"
                className="form-control  mb-3"
                value="13/06/2023 09:46:21 "
              />
            </div>
          </div>
          <div className="col-md-12">
            <hr />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <div className="mb-3">
              <label className="suptitle mb-2">Image Remarks</label>
              <ul class="nav ">
                {
                    [1,2,3,4,6].map((data,i)=><li class="nav-item mx-2" key={i}>
                    <img className="autoImg" src={require('../../../../../assets/img/auto.png')}/> 
                </li>)
                }
              </ul>
            </div>
          </div>
          <div className="col-md-12">
            <div className="mb-3">
              {/* <label className="form-label">Nature of issue</label> */}
              <textarea
                className="form-control"
                value={
                  "There's a dent on left side below side mirror "
                }
                rows="3"
              ></textarea>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
};
