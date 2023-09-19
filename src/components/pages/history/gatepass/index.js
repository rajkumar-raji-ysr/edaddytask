import "./gatepass.scss";
export const Gatepass = () => {
  return (
    <div className="card gatepassCard">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <h4 className="title"> Invoice</h4>
          </div>
        </div>
      </div>
      <div className="card-body">
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
        </div>
        <div className="row">
          <div className="col-7">
            <div className="mb-3">
              <label className="form-label">Authorized by</label>
              <input
                type="text"
                className="form-control  mb-3"
                value="Bharath  "
              />
            </div>
          </div>
         
        </div>
        <div className="row">
          <div className="col-7">
            <div className="mb-3">
              <label className="form-label">Delivered by</label>
              <input
                type="text"
                className="form-control  mb-3"
                value="Bharath  "
              />
            </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};
