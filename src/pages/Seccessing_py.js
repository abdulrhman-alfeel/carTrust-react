import React ,{useEffect} from 'react'

export default function Seccessing_py() {
useEffect(() => {
        const data = { /* received data from another URL */ };
    
        fetch('https://secure.paytabs.sa/query', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            
            'authorization': 'SGJNG9J2RJ-J6TN6NMND6-DTJ9TL6GB6',
          },
          
          data:{
            "profile_id":103133,
            'token':'CVKMNT-7DP96G-7QGQNQ-QKGMBV'
          }
          
        //   body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
          console.log('Callback URL received data:', data);
        //   process the received data here
        })
        .catch(error => {
          console.error('Error sending POST request to callback URL:', error);
        });
      }, []);
    //   curl --request POST \
    //   --url https://secure.paytabs.sa/payment/query  \
    //   --url https://secure.paytabs.sa/payment/token \
    //   --header 'authorization: PROFILE-SERVER-KEY' \
    //   --header 'content-type: application/json' \
    //   --data '{
    //     "profile_id": 123456,
    //     "token": "JfN1DVwmdq7XXXkmfP11QpDWFHZjZzZz",
    //   }'

      return (
        <div>
          <h1>
          Sccess
          </h1>
          </div>
      )
}
