/* eslint-disable jsx-a11y/anchor-is-valid */
import { TagItList } from "../../../../common";
import './jobDetail.scss'
export const JobDetail = ({toggle}) => {
  const gsList = [
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
    <>
      <div class="card mb-4">
        <div class="card-body">
          <div className="row">
            <div className="col-md-3">
              <input
                type="text"
                className="form-control "
                value="General Service 1"
              />
            </div>
            <div className="col-md-4">
              <TagItList data={gsList} />
            </div>
          </div>
        </div>
      </div>

      <div class="card jobDetailIssueCard h-75">
        <div class="card-body">
          <div className="row">
            <div className="col-md-12">
              <ul class="nav issueTab">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Issues
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Job
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-2">
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
              <input
                type="text"
                className="form-control  mb-3"
                value="Changed the break oil"
              />
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
          {/* <div className="col-12">
            <hr />
          </div> */}
        </div>

        {/* <div className="row">
            <div className="col-md-12 text-end">
                <button className="btn btn-closed">Close</button>
                </div>
                </div> */}
        </div>
        <div class="card-footer text-end bg-white b-0">
        <button className="btn btn-closed" onClick={toggle}>Close</button>
  </div>
      </div>
    </>
  );
};
