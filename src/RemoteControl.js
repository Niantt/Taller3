function main() {
    return {
        host: 'http://localhost/',
        slug: ['system/station1/dhs1/playback','system/station1/dhs1', 'op/sys'],
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
        },
        selectedOption:"",
        variable:"",
        options:[
            {
                value:"system/station1/dhs1",
                text:"Station 1",
            },
            {
                value:'system/station2/dhs1',
                text:'Station 2',
            },
            {
                value:'system/station3/dhs1',
                text:'Station 3',
            },
            {
                value:'system/station4/dhs1',
                text:'Station 4',
            },
            {
                value:'system/station5/dhs1',
                text:'Station 5',
            },
            {
                value:'system/station6/dhs1',
                text:'Station 6',
            },
            {
                value:'system/station7/dhs1',
                text:'Station 7',
            },
            {
                value:'system/station8/dhs1',
                text:'Station 8',
            },
            {
                value:'system/station9/dhs1',
                text:'Station 9',
            },
            {
                value:'system/station10/dhs1',
                text:'Station 10',
            },
            
        ],
        station: ['system/station1/dhs1/playback','system/station2/dhs1/playback','system/station3/dhs1/playback','system/station4/dhs1/playback','system/station5/dhs1/playback',
                'system/station6/dhs1/playback', 'system/station7/dhs1/playback', 'system/station8/dhs1/playback','system/station9/dhs1/playback','system/station10/dhs1/playback'],
        access(){
            this.variable = this.selectedOption;
            console.log(this.variable)
            return this.variable
            
        },
    };
}

export  {main};

