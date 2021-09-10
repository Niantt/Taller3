 function main() {
    return {
        host: 'http://localhost/',
        slug: ['system/station1/dhs1/playback', 'op/sys'],
        saludo: (host)=>{
            alert(host)
        },
        senddata: (cmd,par,slug,host) => {
            
            let data = JSON.stringify({ cmd, par})
            console.log(data)
           
            fetch(host+slug, {

                method: 'POST',
                headers: {

                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
                    'Access-Control-Allow-Methods': 'POST',
                    'Content-Type': 'application/json'

                },
                mode: "no-cors",
                body: data,

            })
                .then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                })
                .catch((error) => {
                    console.log('Error:', error);
                });

        }

    }
}

export default main;