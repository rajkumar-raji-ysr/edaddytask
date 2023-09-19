import {Breadcrumb} from '../../components/common'
import {TicketCard ,IssuesCard,IncoiceCard,Gatepass,TimesheetCard} from '../../components/pages';

export const HistoryPage = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <Breadcrumb/>
        </div>
      </div>

      <div className="row">
        <div className="col-8">
          <TicketCard/>
        </div>
        <div className="col-4">
          <TimesheetCard/>
        </div>
        <div className="col-12">
          <IssuesCard/>
        </div>
        <div className="col-8">
          <IncoiceCard/>
        </div>
        <div className="col-4">
          <Gatepass/>
        </div>
      </div>

    </>
  );
};
