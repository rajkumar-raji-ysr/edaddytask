import "./IssuesCard.scss";
import { HistoryModal } from "../historyModal";
import { Popover, PopoverBody } from "reactstrap";
import { useState } from "react";
export const IssuesCard = () => {
    const [isOpen,setIsOpen] =useState(false)
  return (
    <div className="card issuesCard mb-5">
      <div className="card-header">Issues</div>
      <div className="card-body">
        <div className="row">
          <div className="col-md-2">
            <div className="mb-3">
              <label className="form-label">Issue</label>
              <input
                type="text"
                className="form-control active_in mb-3"
                value="Break issue "
              />
              <input
                type="text"
                className="form-control active_in  mb-3"
                value="Indicator issue"
              />
              <input
                type="text"
                className="form-control active_in  mb-3"
                value="Horn issue"
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="mb-3">
              <label className="form-label">Remarks</label>
              <input
                type="text"
                className="form-control  mb-3"
                value="Break not applying properly"
              />
              <input
                type="text"
                className="form-control   mb-3"
                value="Indicator not working properly often"
              />
              <input
                type="text"
                className="form-control   mb-3"
                value="Horn sounds fault"
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className="mb-3">
              <div className="line line1"></div>
              <label className="form-label">Rectify </label>
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control  mb-3"
                  value="Changed the break oil"
                />
                <img
                  className="warBtn"
                 onClick={()=>setIsOpen(true)}
                 alt=""
                  src={require("../../../../assets/img/warning 1.png")}
                />
              </div>
              <div className="line line2"></div>
              <input
                type="text"
                className="form-control   mb-3"
                value="Changed Indicator Wire"
              />
              <div className="line line2"></div>
              <input
                type="text"
                className="form-control   mb-3"
                value="Horn wire is loose, fixed it."
              />
            </div>
          </div>
          <div className="col-12">
            <hr />
          </div>
        </div>
      </div>


      <HistoryModal isOpen={isOpen} toggle={()=>setIsOpen(!isOpen)} />
    </div>
  );
};
