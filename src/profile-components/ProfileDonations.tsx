import MaterialTable, { Options } from "material-table"
import tableIcons from "../table/TableIcons";
import MatTable from '../table/MatTable';

// define generic interface for data/column

const ProfileDonations = () => {

  const data = [
    { date: '10/02/22', coin: 'ETH', amount: '0.2', txh: '0xcaa486f1796009a5c88fccf98dafbf1d14335480d2cd31a60dbcf93301cf8770'}
  ];
  
  const columns = [ // can pass customSort prop to each column
    { title: 'Date', field: 'date'},
    { title: 'Coin', field: 'coin'},
    { title: 'Amount', field: 'amount'},
    { title: 'TxH', field: 'txh'}
  ];

  const containerStyle = {
    height: '79.5vh'
  };

  const tableStyle = {
    height: '79.5vh'
  };
   // TODO: Adjust height of tables and pass CSV download to options
    return (
      <div style={{...containerStyle}}>
        <MatTable
          title={<h1>Donations Sent</h1>}
          columns={columns}
          data={data}
          style={{...tableStyle}}
          />
      </div>
    );

}




export default ProfileDonations;
