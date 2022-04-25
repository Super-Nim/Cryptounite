import MatTable from "../table/MatTable";

const ProfileReceived = () => {

    const data = [
        { date: '11/02/22', coin: 'BTC', amount: '0.5', txh: '0xcaa486f1796009a5c88fccf98dafbf1d14335480d2cd31a60dbcf93301cf8770'}
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
              title={<h1>Donations Received</h1>}
              columns={columns}
              data={data}
              style={{...tableStyle}}
              />
          </div>
        );

}

export default ProfileReceived;