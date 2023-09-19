import "./timesheet.scss";
export const TimesheetCard = () => {
const tileLineList=[
    {
        title:"Ticket Open 10/07/2023",
        time:"07:05:45"
    },
    {
        title:"Engineer assigned  10/07/2023",
        time:"08:05:45"
    },
    {
        title:"Telephonic  10/07/2023",
        time:"09:05:45"
    },
    {
        title:"JC Created  10/07/2023",
        time:"11:05:45"
    },
    {
        title:"Invoice Created  10/07/2023",
        time:"11:05:45"
    },
    {
        title:"Paid  10/07/2023",
        time:"11:05:45"
    },
    {
        title:"Gate pass created  10/07/2023",
        time:"11:05:45"
    },
    // {
    //     title:"Delivered 10/07/2023",
    //     time:"11:05:45"
    // },
    // {
    //     title:"Ticket Closed 10/07/2023",
    //     time:"11:05:45"
    // }
]

  return (
    <div className="card timesheetCard">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6">
            <h4 className="title"> Time sheet</h4>
          </div>
        </div>
      </div>
      <div className="card-body">
        <div class="step-container">
          {/* <!-- completed --> */}
          {tileLineList.map(({time,title})=> 
            <div class="step completed">
            <div class="v-stepper">
              <div class="circle"></div>
              <div class="line"></div>
            </div>

            <div class="step-content">
              <div className="row">
                <div className="col-md-12">
                  <h4 className="ticketTitle">
                   {title}{" "}
                    <span className="text-pur">{time}</span>
                  </h4>
                  <input
                    type="text"
                    className="form-control   mb-3"
                    value="Loral Ipsum"
                  />
                </div>
              </div>
            </div>
          </div>
          )}
        
        

{/*          
          <div class="step active">
            <div class="v-stepper">
              <div class="circle"></div>
              <div class="line"></div>
            </div>

            <div class="step-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>

        
          <div class="step empty">
            <div class="v-stepper">
              <div class="circle"></div>
              <div class="line"></div>
            </div>

            <div class="step-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting
            </div>
          </div> */}

          {/* <!-- regular --> */}
          {/* <div class="step">
            <div class="v-stepper">
              <div class="circle"></div>
              <div class="line"></div>
            </div>

            <div class="step-content">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry.
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
