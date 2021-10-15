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
                text:"Estacion 1",
            },
            {
                value:'system/station2/dhs1',
                text:'Estacion 2',
            },
        ],
        access(){
            this.$refs.output.innerText = this.selectedOption;
            this.variable = this.$refs.output.innerText
            console.log(this.variable)
            return this.variable
            
        },
    };
}
// function page(){
//     return {
//         selectedOption:"",
//         variable:"",
//         options:[
//             {
//                 value:"system/station1/dhs1",
//                 text:"Estacion 1",
//             },
//             {
//                 value:'system/station2/dhs1',
//                 text:'Estadion 2',
//             },
//         ],
//         access(){
//             this.$refs.output.innerText = this.selectedOption;
//             this.variable = this.$refs.output.innerText
//             console.log(this.variable)
//             return this.variable
            
//         },
//     };
// }


export  {main};

